import React from 'react';

import { LicenseSteps } from '../../../shared/Model';

import { Button } from '@erkenningen/ui/components/button';
import { Col } from '@erkenningen/ui/layout/col';
import { Row } from '@erkenningen/ui/layout/row';

import ILicenseFormValues from '../ILicenseFormValues';
import { FormikProps } from 'formik';
import FormCheck from '../../../components/ui/FormCheck';

interface CountryCheckProps {
  form: FormikProps<ILicenseFormValues>;
  setStep: (step: LicenseSteps) => void;
}

const CountryCheck: React.FC<CountryCheckProps> = (props) => {
  const nextStep = () => {
    if (props.form.values.FormOptions.dutchResident && props.form.values.FormOptions.hasBsn) {
      props.setStep(LicenseSteps.BSN);
    } else {
      props.setStep(LicenseSteps.PersonalInfo);
    }
  };
  const onSubmit = () => {
    if (!validate()) {
      return;
    }

    nextStep();
  };

  const prevStep = () => {
    props.setStep(LicenseSteps.Login);
  };

  const validate = (): boolean => {
    return true;
  };

  return (
    <>
      <Row>
        <Col>
          <FormCheck
            id="residentNl"
            label="Woont u in Nederland?"
            name="FormOptions.dutchResident"
            form={props.form}
            help={
              'U woont en werkt langer dan 4 maanden in Nederland' +
              ' en u bent niet opgenomen in de Registratie Niet-Ingezetene (RNI).'
            }
          />
        </Col>
      </Row>
      {props.form.values.FormOptions.dutchResident ? (
        <Row>
          <Col>
            <FormCheck
              id="hasBsn"
              label="Heeft u een BSN?"
              name="FormOptions.hasBsn"
              form={props.form}
            />
          </Col>
        </Row>
      ) : null}
      {!props.form.values.FormOptions.isLoggedIn ? (
        <Button onClick={prevStep} label="Vorige" icon="fa fa-chevron-left" iconPos="left" />
      ) : null}
      <Button
        onClick={onSubmit}
        label="Volgende"
        icon="fa fa-chevron-right"
        iconPos="right"
        disabled={props.form.isSubmitting}
      />
    </>
  );
};

export default CountryCheck;
