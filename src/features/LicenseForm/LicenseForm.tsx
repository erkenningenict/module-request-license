import * as React from 'react';

import { Mutation } from 'react-apollo';
import { LicenseSteps } from '../../shared/Model';
import { REQUEST_LICENSE } from '../../shared/Mutations';
import { MY_PERSON_QUERY } from '../../shared/Queries';

import { Formik, FormikActions, FormikProps } from 'formik';

import { Alert, Col, Panel, Row } from '@erkenningen/ui';

import Approval from '../../features/LicenseForm/Approval/Approval';
import BSN from '../../features/LicenseForm/BSN/BSN';
import Completion from '../../features/LicenseForm/Completion/Completion';
import CountryCheck from '../../features/LicenseForm/CountryCheck/CountryCheck';
import Document from '../../features/LicenseForm/Document/Document';
import DocumentAG from '../../features/LicenseForm/Document/DocumentAG';
import Email from '../../features/LicenseForm/Email/Email';
import ExamDate from '../../features/LicenseForm/ExamDate/ExamDate';
import Login from '../../features/LicenseForm/Login/Login';
import PersonalInfo from '../../features/LicenseForm/PersonalInfo/PersonalInfo';
import PreEducationOption from '../../features/LicenseForm/PreEducationOption/PreEducationOption';

import { GqlQuery } from '@erkenningen/graphql';
import ILicenseFormValues from '../../features/LicenseForm/ILicenseFormValues';
import Summary from '../../features/LicenseForm/Summary/Summary';

interface ILicenseFormState {
  currentStep: LicenseSteps;
  hasSubmitError: boolean;
}

class LicenseForm extends React.Component<{}, ILicenseFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentStep: LicenseSteps.Login,
      hasSubmitError: false,
    };

    this.setStep = this.setStep.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.formRender = this.formRender.bind(this);
  }

  public render() {
    return (
      <Mutation mutation={REQUEST_LICENSE}>
        {(mutation: any) => {
          const submitWrapper = (
            values: ILicenseFormValues,
            actions: FormikActions<ILicenseFormValues>,
          ) => {
            this.onSubmit(values, mutation, actions);
          };
          return (
            <Row className="justify-content-start">
              <Col>
                <GqlQuery query={MY_PERSON_QUERY} ignoreAuthError={true}>
                  {(data: any) => {
                    // Set default values
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
                      onStep: this.setStep,
                    };

                    // Update with user data if set
                    if (data && data.my) {
                      personData = {
                        ...personData,
                        ...data.my,
                        Persoon: {
                          ...data.my.Persoon,
                          Geboortedatum: new Date(data.my.Persoon.Geboortedatum),
                          BSN:
                            data.my.Persoon.BSN === '0' ? null : parseInt(data.my.Persoon.BSN, 0),
                        },
                        FormOptions: {
                          ...personData.FormOptions,
                          AchternaamBSN: data.my.Persoon.Achternaam,
                          isLoggedIn: true,
                        },
                      };
                    }

                    return (
                      <Formik
                        initialValues={personData}
                        onSubmit={submitWrapper}
                        render={this.formRender}
                        validateOnBlur={false}
                        validateOnChange={false}
                      />
                    );
                  }}
                </GqlQuery>
              </Col>
            </Row>
          );
        }}
      </Mutation>
    );
  }

  private formRender(props: FormikProps<ILicenseFormValues>) {
    return (
      <form className="form form-horizontal" onSubmit={this.handleSubmit}>
        {this.state.hasSubmitError ? (
          <Alert type="danger">
            Er is een fout opgetreden bij het verwerken van de aanvraag. Controleer uw invoer en
            probeer het nog een keer of neem contact op met de helpdesk.
          </Alert>
        ) : null}
        {this.state.currentStep === LicenseSteps.Login ? (
          <Panel title="Login account">
            <Login {...props} />
          </Panel>
        ) : null}
        {this.state.currentStep === LicenseSteps.CountryCheck ? (
          <Panel title="Land controle">
            <CountryCheck {...props} />
          </Panel>
        ) : null}
        {this.state.currentStep === LicenseSteps.PersonalInfo ? (
          <Panel title="Uw persoonsgegevens XXXX">
            <PersonalInfo {...props} />
          </Panel>
        ) : null}
        {this.state.currentStep === LicenseSteps.Email ? (
          <Panel title="Uw e-mailadres">
            <Email {...props} />
          </Panel>
        ) : null}
        {this.state.currentStep === LicenseSteps.ExamDate ? (
          <Panel title="Datum examen behaald">
            <ExamDate {...props} />
          </Panel>
        ) : null}
        {this.state.currentStep === LicenseSteps.PreEducationOption ? (
          <Panel title="Vooropleiding en certificering">
            <PreEducationOption {...props} />
          </Panel>
        ) : null}
        {this.state.currentStep === LicenseSteps.BSN ? (
          <Panel title="BSN Controle">
            <BSN {...props} />
          </Panel>
        ) : null}
        {this.state.currentStep === LicenseSteps.Document ? (
          <Panel title="Diploma, cijferlijst en legitimatie">
            <Document {...props} />
          </Panel>
        ) : null}
        {this.state.currentStep === LicenseSteps.DocumentAG ? (
          <Panel title="Certificaat en legitimatie">
            <DocumentAG {...props} />
          </Panel>
        ) : null}
        {this.state.currentStep === LicenseSteps.Approval ? (
          <Panel title="Opmerkingen en akkoord kosten">
            <Approval {...props} />
          </Panel>
        ) : null}
        {this.state.currentStep === LicenseSteps.Summary ? (
          <Panel title="Samenvatting">
            <Summary {...props} />
          </Panel>
        ) : null}
        {this.state.currentStep === LicenseSteps.Completion ? (
          <Panel title="Afronding">
            <Completion {...props} />
          </Panel>
        ) : null}
      </form>
    );
  }

  private setStep(step: LicenseSteps) {
    this.setState({ currentStep: step });
  }

  private onSubmit(
    values: ILicenseFormValues,
    mutation: any,
    actions: FormikActions<ILicenseFormValues>,
  ) {
    // Only submit when form is in summary step
    if (this.state.currentStep !== LicenseSteps.Summary) {
      return;
    }
    this.setState({ hasSubmitError: false });

    // Build mutation input variables
    const mutationVariables: any = {
      variables: {
        input: {
          preEducationId: values.FormOptions.Vooropleiding
            ? parseInt(`${values.FormOptions.Vooropleiding.VooropleidingID}`, 10)
            : null,
          dateReceived: values.FormOptions.ExamDate ? values.FormOptions.ExamDate.getTime() : null,
          CertificaatID: values.FormOptions.Certificaat
            ? parseInt(`${values.FormOptions.Certificaat.CertificaatID}`, 10)
            : null,
          CertificeringID: null,
          file1: values.FormOptions.File1,
          file2: values.FormOptions.File2,
          file3: values.FormOptions.File3,
          remarks: values.FormOptions.Remarks,
        },
      },
    };

    if (values.FormOptions.isLoggedIn) {
      mutationVariables.variables.personDataInput = {
        PersoonID: parseInt(`${values.Persoon.PersoonID}`, 10),
        Email: values.Persoon.Contactgegevens.Email,
      };
    } else {
      if (values.FormOptions.hasBsn) {
        mutationVariables.variables.createPersonByBsnInput = {
          BSN: parseInt(`${values.Persoon.BSN}`, 10),
          Geboortedatum: values.Persoon.Geboortedatum,
          Email: values.Persoon.Contactgegevens.Email,
        };
      } else {
        mutationVariables.variables.createPersonByPersonDataInput = {
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
      }
    }

    mutation(mutationVariables)
      .then((response: any) => {
        actions.setFieldValue('licenseRequestResult', response.data.requestLicense);

        actions.setSubmitting(false);

        this.setStep(LicenseSteps.Completion);
      })
      .catch((e: any) => {
        this.setState({ hasSubmitError: true });
        actions.setSubmitting(false);
      });
  }

  /**
   * Prevent form submit due to pressing enter key in input
   */
  private handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
  }
}

export default LicenseForm;
