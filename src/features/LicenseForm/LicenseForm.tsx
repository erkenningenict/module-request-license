import React, { useState } from 'react';
import { LicenseSteps } from '../../shared/Model';

import { Alert } from '@erkenningen/ui/components/alert';
import { Col } from '@erkenningen/ui/layout/col';
import { Panel } from '@erkenningen/ui/layout/panel';
import { Row } from '@erkenningen/ui/layout/row';
import { Formik, FormikProps } from 'formik';

import Login from '../../features/LicenseForm/Login/Login';
import BSN from '../../features/LicenseForm/BSN/BSN';
import PersonalInfo from '../../features/LicenseForm/PersonalInfo/PersonalInfo';
import CountryCheck from '../../features/LicenseForm/CountryCheck/CountryCheck';
import Email from '../../features/LicenseForm/Email/Email';
import PreEducationOption from '../../features/LicenseForm/PreEducationOption/PreEducationOption';
import ExamDate from '../../features/LicenseForm/ExamDate/ExamDate';
import Document from '../../features/LicenseForm/Document/Document';
import DocumentAG from '../../features/LicenseForm/Document/DocumentAG';
import Approval from '../../features/LicenseForm/Approval/Approval';
import Summary from '../../features/LicenseForm/Summary/Summary';
import Completion from '../../features/LicenseForm/Completion/Completion';

import ILicenseFormValues from '../../features/LicenseForm/ILicenseFormValues';
import { useAuth } from '../../shared/Auth';
import { useGrowlContext } from '@erkenningen/ui/components/growl';
import {
  BasicPersonData,
  CreatePersonByBsn,
  CreatePersonByPersonData,
  RequestLicenseInput,
  useRequestLicenseMutation,
} from '../../generated/graphql';

const LicenseForm: React.FC = () => {
  const { clearGrowl, showGrowl } = useGrowlContext();
  const [currentStep, setCurrentStep] = useState<LicenseSteps>(LicenseSteps.Login);
  const [hasSubmitError, setHasSubmitError] = useState<boolean>(false);

  const auth = useAuth();
  const [requestLicense, { error }] = useRequestLicenseMutation({
    onCompleted() {
      showGrowl({
        severity: 'success',
        summary: 'Licentie succesvol aangevraagd',
        detail: 'Uw licentie is succesvol aangevraagd.',
      });
    },
    onError(e) {
      console.log('Error request license', e);
      showGrowl({
        severity: 'error',
        summary: 'Licentie niet aangevraagd!',
        sticky: true,
        detail: `Er is een fout opgetreden bij het aanmaken van de licentie aanvraag. Probeer het later opnieuw. Foutmelding: ${e.message}`,
      });
    },
  });

  if (auth.loading) {
    return <p>Gegevens worden geladen...</p>;
  }

  if (auth.error) {
    // ignore
  }

  if (error) {
    <Alert type="danger">
      Er is een fout opgetreden bij het aanmaken van de licentie. Probeer het later nog eens.
    </Alert>;
  }

  const setStep = (step: LicenseSteps) => {
    setCurrentStep(step);
  };

  let personData: ILicenseFormValues = {
    Persoon: {
      PersoonID: 0,
      Voorletters: '',
      Tussenvoegsel: '',
      Achternaam: '',
      Geslacht: 'o',
      Nationaliteit: 'Nederlandse',
      IsGbaGeregistreerd: false,
      Contactgegevens: {
        ContactgegevensID: 0,
        Adresregel1: '',
        Adresregel2: '',
        Huisnummer: '',
        HuisnummerToevoeging: '',
        Postcode: '',
        Woonplaats: '',
        Land: 'Nederland',
        Email: '',
      },
      GbaNummer: '',
      Roepnaam: '',
    },
    Certificeringen: [],
    FormOptions: {
      hasAccount: false,
      isLoggedIn: false,
      dutchResident: false,
      hasBsn: false,
      Remarks: '',
      Approved: false,
      Costs: 0,
    },
    onStep: setCurrentStep,
  };

  // Update with user data if set
  if (auth && auth?.my && auth.my.Persoon && auth.my.Persoon.Achternaam) {
    personData = {
      ...personData,
      ...auth.my,
      Persoon: {
        ...auth.my.Persoon,
        Geboortedatum: new Date(auth.my.Persoon.Geboortedatum),
        BSN: auth.my.Persoon.BSN === 0 ? undefined : auth.my.Persoon.BSN,
      },
      FormOptions: {
        ...personData.FormOptions,
        AchternaamBSN: auth?.my?.Persoon.Achternaam,
        isLoggedIn: true,
      },
    } as any;
  }

  /**
   * Prevent form submit due to pressing enter key in input
   */
  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
  };

  const onSubmit = (values: ILicenseFormValues, actions: any) => {
    // Only submit when form is in summary step
    if (currentStep !== LicenseSteps.Summary) {
      return;
    }
    setHasSubmitError(false);

    // Build mutation input variables
    const input: RequestLicenseInput = {
      preEducationId: values.FormOptions.VooropleidingID
        ? parseInt(`${values.FormOptions.VooropleidingID}`, 10)
        : 0,
      dateReceived: values.FormOptions.ExamDate ? values.FormOptions.ExamDate.getTime() : null,
      CertificaatID: values.FormOptions.Certificaat
        ? parseInt(`${values.FormOptions.Certificaat.CertificaatID}`, 10)
        : 0,
      CertificeringID: undefined,
      file1: values.FormOptions.File1,
      file2: values.FormOptions.File2,
      file3: values.FormOptions.File3,
      remarks: values.FormOptions.Remarks,
    };
    const mutationVariables: any = {
      variables: {
        input: input,
      },
    };

    if (values.FormOptions.isLoggedIn) {
      const personDataInput: BasicPersonData = {
        PersoonID: parseInt(`${values.Persoon.PersoonID}`, 10),
        Email: values.Persoon.Contactgegevens.Email,
      };
      mutationVariables.variables.personDataInput = personDataInput;
    } else {
      if (values.FormOptions.hasBsn) {
        const createPersonByBsnInput: CreatePersonByBsn = {
          BSN: parseInt(`${values.Persoon.BSN}`, 10),
          Geboortedatum: values.Persoon.Geboortedatum,
          Email: values.Persoon.Contactgegevens.Email,
        };
        mutationVariables.variables.createPersonByBsnInput = createPersonByBsnInput;
      } else {
        const createPersonByPersonDataInput: CreatePersonByPersonData = {
          Voorletters: values.Persoon.Voorletters,
          Tussenvoegsel: values.Persoon.Tussenvoegsel,
          Achternaam: values.Persoon.Achternaam,
          Geslacht: values.Persoon.Geslacht,
          Geboortedatum: values.Persoon.Geboortedatum,
          Nationaliteit: values.Persoon.Nationaliteit,
          Adresregel1: values.Persoon.Contactgegevens.Adresregel1,
          Adresregel2: values.Persoon.Contactgegevens.Adresregel2,
          Huisnummer: parseInt(`${values.Persoon.Contactgegevens.Huisnummer}`, 10),
          HuisnummerToevoeging: values.Persoon.Contactgegevens.HuisnummerToevoeging,
          Postcode: values.Persoon.Contactgegevens.Postcode,
          Woonplaats: values.Persoon.Contactgegevens.Woonplaats,
          Land: values.Persoon.Contactgegevens.Land,
          Email: values.Persoon.Contactgegevens.Email,
        };
        mutationVariables.variables.createPersonByPersonDataInput = createPersonByPersonDataInput;
      }
    }

    requestLicense(mutationVariables)
      .then((response) => {
        if (response.errors) {
          showGrowl({
            severity: 'error',
            summary: 'Licentie niet aangevraagd!',
            sticky: true,
            detail: `Er is een fout opgetreden bij het aanmaken van de licentie aanvraag. Probeer het later opnieuw. Foutmelding: ${response.errors
              .map((e) => e.message)
              .join('.')}`,
          });
          setHasSubmitError(true);
          actions.setSubmitting(false);
          return;
        }
        if (response.data) {
          actions.setFieldValue('licenseRequestResult', response.data?.requestLicense);

          actions.setSubmitting(false);

          setCurrentStep(LicenseSteps.Completion);
        }
      })
      .catch(() => {
        setHasSubmitError(true);
        actions.setSubmitting(false);
      });
  };

  const submitWrapper = (values: ILicenseFormValues, actions: any) => {
    onSubmit(values, actions);
  };

  return (
    <Row className="justify-content-start">
      <Col>
        <Formik
          initialValues={personData}
          onSubmit={submitWrapper}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {(props: FormikProps<ILicenseFormValues>) => (
            <form className="form form-horizontal" onSubmit={handleSubmit}>
              {hasSubmitError ? (
                <Alert type="danger">
                  Er is een fout opgetreden bij het verwerken van de aanvraag. Controleer uw invoer
                  en probeer het nog een keer of neem contact op met de helpdesk.
                </Alert>
              ) : null}
              {currentStep === LicenseSteps.Login ? (
                <Panel title="Login account">
                  <Login setStep={setStep} form={props} />
                </Panel>
              ) : null}
              {currentStep === LicenseSteps.CountryCheck ? (
                <Panel title="Land controle">
                  <CountryCheck setStep={setStep} form={props} />
                </Panel>
              ) : null}
              {currentStep === LicenseSteps.BSN ? (
                <Panel title="BSN Controle">
                  <BSN setStep={setStep} form={props} />
                </Panel>
              ) : null}

              {currentStep === LicenseSteps.PersonalInfo ? (
                <Panel title="Uw persoonsgegevens">
                  <PersonalInfo setStep={setStep} form={props} />
                </Panel>
              ) : null}
              {currentStep === LicenseSteps.Email ? (
                <Panel title="Uw e-mailadres">
                  <Email setStep={setStep} form={props} />
                </Panel>
              ) : null}
              {currentStep === LicenseSteps.PreEducationOption ? (
                <Panel title="Vooropleiding en certificering">
                  <PreEducationOption setStep={setStep} form={props} />
                </Panel>
              ) : null}
              {currentStep === LicenseSteps.ExamDate ? (
                <Panel title="Datum examen behaald">
                  <ExamDate setStep={setStep} form={props} />
                </Panel>
              ) : null}
              {currentStep === LicenseSteps.Document ? (
                <Panel title="Upload benodigde documenten">
                  <Document setStep={setStep} form={props} />
                </Panel>
              ) : null}
              {currentStep === LicenseSteps.DocumentAG ? (
                <Panel title="Certificaat en identiteitsbewijs">
                  <DocumentAG setStep={setStep} form={props} />
                </Panel>
              ) : null}
              {currentStep === LicenseSteps.Approval ? (
                <Panel title="Opmerkingen en akkoord kosten">
                  <Approval setStep={setStep} form={props} />
                </Panel>
              ) : null}
              {currentStep === LicenseSteps.Summary ? (
                <Panel title="Samenvatting">
                  <Summary setStep={setStep} form={props} />
                </Panel>
              ) : null}
              {currentStep === LicenseSteps.Completion ? (
                <Panel title="Afronding">
                  <Completion setStep={setStep} form={props} />
                </Panel>
              ) : null}
            </form>
          )}
        </Formik>
      </Col>
    </Row>
  );
};

export default LicenseForm;
