import * as React from 'react';

import { LicenseSteps } from '../../../shared/Model';

import { Button } from '@erkenningen/ui/components/button';
import { Col } from '@erkenningen/ui/layout/col';
import { Row } from '@erkenningen/ui/layout/row';

import { ERKENNINGEN_LOGIN_URL } from '@erkenningen/config';
import FormCheck from '../../../components/ui/FormCheck';
import FormStep from '../../../components/ui/FormStep';

class Login extends FormStep {
  constructor(props: any) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  public componentDidMount() {
    if (this.props.values.FormOptions.isLoggedIn) {
      this.setStep(LicenseSteps.Email);
    }
  }

  public render() {
    return (
      <>
        <Row>
          <Col>
            <FormCheck
              id="hasAccount"
              label="Heeft u een inlog account?"
              name="FormOptions.hasAccount"
              form={this.props}
              help="Vink aan als u al een account bij Bureau Erkenningen heeft."
            />
          </Col>
        </Row>
        <Button
          onClick={this.onSubmit}
          label="Volgende"
          icon="fa fa-chevron-right"
          iconPos="right"
          disabled={this.props.isSubmitting}
        />
      </>
    );
  }

  private onSubmit(): void {
    // If user has account, then redirect to DNN login
    if (this.props.values.FormOptions.hasAccount) {
      window.location.href = ERKENNINGEN_LOGIN_URL || '/login';
      return;
    }

    // Go to next step
    this.setStep(
      this.props.values.FormOptions.isLoggedIn ? LicenseSteps.Email : LicenseSteps.CountryCheck,
    );
  }
}

export default Login;
