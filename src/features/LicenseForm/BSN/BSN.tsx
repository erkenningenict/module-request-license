import React from 'react';
import { ERKENNINGEN_LOGIN_URL } from '@erkenningen/config/dist/index';

import { isValidBSN } from '../../../shared/validation/Bsn';

import { Alert } from '@erkenningen/ui/components/alert';
import { Button } from '@erkenningen/ui/components/button';
import { Col } from '@erkenningen/ui/layout/col';
import { Row } from '@erkenningen/ui/layout/row';

import { FormCalendar, FormText } from '@erkenningen/ui/components/form';

import { LicenseSteps } from '../../../shared/Model';
import ILicenseFormValues from '../ILicenseFormValues';
import { FormikProps } from 'formik';
import { useGrowlContext } from '@erkenningen/ui/components/growl';
import { useCheckForExistingPersonByBsnMutation } from '../../../generated/graphql';

interface BSNProps {
  form: FormikProps<ILicenseFormValues>;
  setStep: (step: LicenseSteps) => void;
}

const BSN: React.FC<BSNProps> = (props) => {
  const { showGrowl } = useGrowlContext();

  const [checkForExistingPersonByBsn, { loading, error, data }] =
    useCheckForExistingPersonByBsnMutation({
      // onCompleted() {
      //   showGrowl({
      //     severity: 'success',
      //     summary: 'BSN',
      //     detail: 'Success.',
      //   });
      // },
      onError(e) {
        showGrowl({
          severity: 'error',
          summary: 'BSN controle niet succesvol',
          sticky: true,
          detail: `Er is een fout opgetreden bij de BSN controle. Probeer het later nog eens. Foutmelding: ${e.message}`,
        });
      },
    });

  const validate = (): boolean => {
    let isValid = true;

    if (!isValidBSN(props.form.values.Persoon.BSN)) {
      props.form.setFieldError(
        'Persoon.BSN',
        'Ongeldig BSN nummer. Een BSN bestaat uit 8 of 9 cijfers.',
      );
      isValid = false;
    } else {
      props.form.setFieldError('Persoon.BSN', '');
    }

    if (!props.form.values.Persoon.Geboortedatum) {
      props.form.setFieldError('Persoon.Geboortedatum', 'Vul uw geboortedatum in');
      isValid = false;
    } else {
      props.form.setFieldError('Persoon.Geboortedatum', '');
    }

    return isValid;
  };

  const prevStep = (): void => {
    props.setStep(LicenseSteps.CountryCheck);
  };

  const nextStep = (): void => {
    props.setStep(LicenseSteps.Email);
  };

  const checkForExistingPersonByBsnWrapper = () => {
    if (!validate()) {
      return;
    }
    checkForExistingPersonByBsn({
      variables: {
        bsn: parseInt('' + props.form.values.Persoon.BSN, 0),
        birthDate: props.form.values.Persoon.Geboortedatum,
      },
    });
  };

  // Is result is valid, then continue to next step
  if (
    data &&
    data.checkForExistingPersonByBsn &&
    !data.checkForExistingPersonByBsn.personFoundInDatabase &&
    data.checkForExistingPersonByBsn.personFoundInGba
  ) {
    // Go to next step if result is valid
    nextStep();
    return null;
  }

  return (
    <>
      <Row>
        <Col>
          <Alert type="info">
            Voor correcte adressering en administratie is uw BSN nummer vereist. De licentie wordt
            uitgegeven in opdracht van de rijksoverheid. Indien u geen BSN heeft neem contact op met
            Bureau Erkenningen: <a href="mailto:info@erkenningen.nl">info@erkenningen.nl</a>.
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          {error ? (
            <Alert>
              Ophalen van BSN gegevens mislukt. Probeer het nog een keer of neem contact op met de
              helpdesk.
            </Alert>
          ) : null}
          {data &&
          data.checkForExistingPersonByBsn &&
          data.checkForExistingPersonByBsn.personFoundInDatabase ? (
            <Alert type="warning">
              {data.checkForExistingPersonByBsn.message}
              <br />
              Heeft u al een account bij Bureau Erkenningen? Log dan in door{' '}
              <a href={ERKENNINGEN_LOGIN_URL}>hier</a> te klikken.
            </Alert>
          ) : null}
          {data &&
          data.checkForExistingPersonByBsn &&
          !data.checkForExistingPersonByBsn.personFoundInDatabase &&
          !data.checkForExistingPersonByBsn.personFoundInGba ? (
            <Alert type="warning">
              De combinatie BSN en geboortedatum is niet gevonden. Controleer uw invoer.
            </Alert>
          ) : null}
          <FormText
            label="BSN nummer"
            placeholder="BSN nummer"
            name="Persoon.BSN"
            readonly={props.form.values.Persoon.IsGbaGeregistreerd}
            formItemProps={props}
            onBlur={validate}
          />
        </Col>
      </Row>
      <FormCalendar
        id="birthDate"
        label="Geboortedatum"
        name="Persoon.Geboortedatum"
        readonly={props.form.values.Persoon.IsGbaGeregistreerd}
        form={props.form}
        placeholder="dd-mm-jjjj"
      />
      <FormText
        label="(Achternaam)"
        placeholder="Achternaam"
        name="FormOptions.AchternaamBSN"
        readonly={props.form.values.Persoon.IsGbaGeregistreerd}
        formItemProps={props}
      />

      <Button onClick={prevStep} label="Vorige" icon="fa fa-chevron-left" iconPos="left" />
      <Button
        label="Volgende"
        onClick={checkForExistingPersonByBsnWrapper}
        disabled={props.form.isSubmitting || loading}
        icon={loading ? 'pi pi-spin pi-spinner' : 'fa fa-chevron-right'}
        iconPos="right"
      />
    </>
  );
};

export default BSN;
