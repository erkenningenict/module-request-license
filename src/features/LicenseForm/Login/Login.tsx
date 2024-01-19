import React, { useEffect } from 'react';

import { LicenseSteps } from '../../../shared/Model';

import { Button } from '@erkenningen/ui/components/button';
import { Col } from '@erkenningen/ui/layout/col';
import { Row } from '@erkenningen/ui/layout/row';

import { ERKENNINGEN_LOGIN_URL } from '@erkenningen/config/dist/index';
import FormCheck from '../../../components/ui/FormCheck';
import { FormikProps } from 'formik';
import ILicenseFormValues from '../ILicenseFormValues';

interface LoginProps {
  form: FormikProps<ILicenseFormValues>;
  setStep: (step: LicenseSteps) => void;
}

const Login: React.FC<LoginProps> = (props) => {
  useEffect(() => {
    if (props.form.values.FormOptions.isLoggedIn) {
      props.setStep(LicenseSteps.Email);
    }
  }, []);

  const onSubmit = (): void => {
    // If user has account, then redirect to DNN login
    if (props.form.values.FormOptions.hasAccount) {
      window.location.href = ERKENNINGEN_LOGIN_URL || '/login';
      return;
    }

    // Go to next step
    props.setStep(
      props.form.values.FormOptions.isLoggedIn ? LicenseSteps.Email : LicenseSteps.CountryCheck,
    );
  };
  return (
    <>
      <Row>
        <Col>
          <FormCheck
            id="hasAccount"
            label="Heeft u een inlog account?"
            name="FormOptions.hasAccount"
            form={props.form}
            help="Vink aan als u al een account bij Bureau Erkenningen heeft."
          />
        </Col>
      </Row>
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

export default Login;
