import React from 'react';

import { Alert } from '@erkenningen/ui/components/alert';
import { Button } from '@erkenningen/ui/components/button';
import { Col } from '@erkenningen/ui/layout/col';
import { Row } from '@erkenningen/ui/layout/row';

import { FormCalendar, FormSelect, FormText } from '@erkenningen/ui/components/form';

import { LicenseSteps } from '../../../shared/Model';
import { validateField } from '../../../shared/validation/Form';
import ILicenseFormValues from '../ILicenseFormValues';
import { FormikProps } from 'formik';
import { useGrowlContext } from '@erkenningen/ui/components/growl';
import { useGetCountriesAndNationalitiesQuery } from '../../../generated/graphql';
import { Spinner } from '@erkenningen/ui/components/spinner';

interface PersonalInfoProps {
  form: FormikProps<ILicenseFormValues>;
  setStep: (step: LicenseSteps) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = (props) => {
  const { showGrowl } = useGrowlContext();
  const { loading, data } = useGetCountriesAndNationalitiesQuery({
    onError() {
      showGrowl({
        severity: 'error',
        summary: 'Fout bij ophalen gegevens',
        sticky: true,
        detail: `Er is een fout opgetreden bij het ophalen van gegevens. Probeer het later nog eens`,
      });
    },
  });

  if (loading) {
    return <Spinner text={'Gegevens laden...'} />;
  }

  if (!data) {
    return null;
  }

  const countries = data.Landen.map((l) => ({ value: l.Value, label: l.Text }));
  const nationalities = data.Nationaliteiten.map((n) => ({ value: n.Value, label: n.Text }));

  const prevStep = () => {
    props.setStep(LicenseSteps.CountryCheck);
  };

  const nextStep = () => {
    props.setStep(LicenseSteps.Email);
  };

  const onSubmit = () => {
    if (validate()) {
      nextStep();
    }
  };

  const validate = (): boolean => {
    let isValid = true;

    isValid = validateField(props.form, 'Persoon.Voorletters') && isValid;
    isValid = validateField(props.form, 'Persoon.Achternaam') && isValid;
    isValid = validateField(props.form, 'Persoon.Geboortedatum') && isValid;
    isValid = validateField(props.form, 'Persoon.Contactgegevens.Adresregel1') && isValid;
    isValid = validateField(props.form, 'Persoon.Contactgegevens.Huisnummer') && isValid;
    isValid = validateField(props.form, 'Persoon.Contactgegevens.Postcode') && isValid;
    isValid = validateField(props.form, 'Persoon.Contactgegevens.Woonplaats') && isValid;

    return isValid;
  };

  return (
    <>
      <Row>
        <Col>
          <Alert type="info">
            {props.form.values.FormOptions.hasAccount
              ? 'Controleer uw gegevens en corrigeer indien nodig.'
              : 'Vul uw gegevens in'}
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormText
            label="Voorletters"
            placeholder="Voorletters (A.B.C.)"
            name="Persoon.Voorletters"
            readonly={props.form.values.Persoon.IsGbaGeregistreerd}
            formItemProps={props.form}
          />
          <FormText
            label="Tussenvoegsel"
            placeholder="Tussenvoegsel"
            name="Persoon.Tussenvoegsel"
            readonly={props.form.values.Persoon.IsGbaGeregistreerd}
            formItemProps={props.form}
          />
          <FormText
            label="Achternaam"
            placeholder="Achternaam"
            name="Persoon.Achternaam"
            readonly={props.form.values.Persoon.IsGbaGeregistreerd}
            formItemProps={props.form}
          />
          <FormCalendar
            id="birthDate"
            label="Geboortedatum"
            name="Persoon.Geboortedatum"
            readonly={props.form.values.Persoon.IsGbaGeregistreerd}
            formItemProps={props.form}
            placeholder="dd-mm-jjjj"
          />
        </Col>
        <Col>
          <FormText
            label="Straatnaam"
            placeholder="Straatnaam"
            name="Persoon.Contactgegevens.Adresregel1"
            readonly={props.form.values.Persoon.IsGbaGeregistreerd}
            formItemProps={props.form}
          />
          <FormText
            label="Huisnummer"
            keyfilter="pint"
            placeholder="Huisnummer (cijfer)"
            name="Persoon.Contactgegevens.Huisnummer"
            readonly={props.form.values.Persoon.IsGbaGeregistreerd}
            formItemProps={props.form}
          />
          <FormText
            label="Huisnummer toevoeging"
            keyfilter="alphanum"
            placeholder="Toevoeging"
            name="Persoon.Contactgegevens.HuisnummerToevoeging"
            readonly={props.form.values.Persoon.IsGbaGeregistreerd}
            formItemProps={props.form}
          />
          <FormText
            label="Tweede adresregel"
            name="Persoon.Contactgegevens.Adresregel2"
            readonly={props.form.values.Persoon.IsGbaGeregistreerd}
            formItemProps={props.form}
          />
          {!props.form.values.Persoon.IsGbaGeregistreerd ? (
            <FormSelect
              label="Land"
              name="Persoon.Contactgegevens.Land"
              options={countries}
              readonly={props.form.values.Persoon.IsGbaGeregistreerd}
              filter={true}
              formItemProps={props.form}
            />
          ) : null}
          <FormText
            label="Postcode"
            placeholder={
              props.form.values.Persoon.Contactgegevens.Land !== 'Nederland'
                ? 'Postcode'
                : '1234 AB'
            }
            name="Persoon.Contactgegevens.Postcode"
            readonly={props.form.values.Persoon.IsGbaGeregistreerd}
            formItemProps={props.form}
          />
          <FormText
            label="Woonplaats"
            placeholder="Woonplaats"
            name="Persoon.Contactgegevens.Woonplaats"
            readonly={props.form.values.Persoon.IsGbaGeregistreerd}
            formItemProps={props.form}
          />
          {!props.form.values.Persoon.IsGbaGeregistreerd ? (
            <FormSelect
              label="Nationaliteit"
              name="Persoon.Nationaliteit"
              options={nationalities}
              readonly={props.form.values.Persoon.IsGbaGeregistreerd}
              filter={true}
              formItemProps={props.form}
            />
          ) : null}
        </Col>
      </Row>
      <Row>
        <Col>
          <p>U maakt uw aanvraag pas verderop definitief.</p>
          <Button onClick={prevStep} label="Vorige" icon="fa fa-chevron-left" iconPos="left" />
          <Button onClick={onSubmit} label="Volgende" icon="fa fa-chevron-right" iconPos="right" />
        </Col>
      </Row>
    </>
  );
};

export default PersonalInfo;
