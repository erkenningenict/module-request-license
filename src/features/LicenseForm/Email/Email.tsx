import * as React from 'react';

import { validateField } from '../../../shared/validation/Form';

import { Alert, Button, Col, Row } from '@erkenningen/ui';

import FormStep from '../../../components/ui/FormStep';
import FormText from '../../../components/ui/FormText';

import { LicenseSteps } from '../../../shared/Model';

class Email extends FormStep {
  constructor(props: any) {
    super(props);

    this.prevStep = this.prevStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  public render() {
    return (
      <>
        <Row>
          <Col>
            <Alert type="info">
              {this.props.values.FormOptions.isLoggedIn
                ? 'Controleer of uw e-mailadres nog actief en correct is.'
                : 'Vul uw e-mailadres in.'}
            </Alert>
          </Col>
        </Row>
        <FormText
          id="email"
          label="E-mail"
          keyfilter="email"
          placeholder="E-mailadres"
          name="Persoon.Contactgegevens.Email"
          form={this.props}
        />
        {!this.props.values.FormOptions.isLoggedIn ? (
          <Button onClick={this.prevStep} label="Vorige" icon="fa fa-chevron-left" iconPos="left" />
        ) : null}
        <Button
          onClick={this.onSubmit}
          disabled={this.props.isSubmitting}
          label="Volgende"
          icon="fa fa-chevron-right"
          iconPos="right"
        />
      </>
    );
  }

  private onSubmit() {
    if (this.validate()) {
      this.nextStep();
    }
  }

  private validate(): boolean {
    return validateField(this.props, 'Persoon.Contactgegevens.Email');
  }

  private prevStep(): void {
    this.setStep(
      this.props.values.FormOptions.dutchResident && this.props.values.FormOptions.hasBsn
        ? LicenseSteps.BSN
        : LicenseSteps.PersonalInfo,
    );
  }

  private nextStep(): void {
    this.setStep(LicenseSteps.PreEducationOption);
  }
}

export default Email;
