import React from 'react';

import { validateField } from '../../../shared/validation/Form';

import { Alert } from '@erkenningen/ui/components/alert';
import { Button } from '@erkenningen/ui/components/button';
import { Col } from '@erkenningen/ui/layout/col';
import { Row } from '@erkenningen/ui/layout/row';
import { FormText } from '@erkenningen/ui/components/form';

import { LicenseSteps } from '../../../shared/Model';
import ILicenseFormValues from '../ILicenseFormValues';
import { FormikProps } from 'formik';

interface EmailProps {
  form: FormikProps<ILicenseFormValues>;
  setStep: (step: LicenseSteps) => void;
}

const Email: React.FC<EmailProps> = (props) => {
  const validate = (): boolean => {
    return validateField(props.form, 'Persoon.Contactgegevens.Email');
  };

  const nextStep = (): void => {
    props.setStep(LicenseSteps.PreEducationOption);
  };

  const onSubmit = () => {
    if (validate()) {
      nextStep();
    }
  };

  const prevStep = (): void => {
    props.setStep(
      props.form.values.FormOptions.dutchResident && props.form.values.FormOptions.hasBsn
        ? LicenseSteps.BSN
        : LicenseSteps.PersonalInfo,
    );
  };

  return (
    <>
      <Row>
        <Col>
          <Alert type="info">
            {props.form.values.FormOptions.isLoggedIn
              ? 'Controleer of uw e-mailadres nog actief en correct is.'
              : 'Vul uw e-mailadres in.'}
          </Alert>
        </Col>
      </Row>
      <FormText
        label="E-mail"
        keyfilter="email"
        placeholder="E-mailadres"
        name="Persoon.Contactgegevens.Email"
        formItemProps={props}
      />
      {!props.form.values.FormOptions.isLoggedIn ? (
        <Button onClick={prevStep} label="Vorige" icon="fa fa-chevron-left" iconPos="left" />
      ) : null}
      <Button
        onClick={onSubmit}
        disabled={props.form.isSubmitting}
        label="Volgende"
        icon="fa fa-chevron-right"
        iconPos="right"
      />
    </>
  );
};

export default Email;
