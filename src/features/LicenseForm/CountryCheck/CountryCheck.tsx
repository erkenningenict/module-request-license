import * as React from 'react';

import { LicenseSteps } from '../../../shared/Model';

import { Button, Col, Row } from '@erkenningen/ui';

import FormCheck from '../../../components/ui/FormCheck';
import FormStep from '../../../components/ui/FormStep';

class CountryCheck extends FormStep {
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
            <FormCheck
              id="residentNl"
              label="Woont u in Nederland?"
              name="FormOptions.dutchResident"
              form={this.props}
              help={
                'U woont en werkt langer dan 4 maanden in Nederland' +
                ' en u bent niet opgenomen in de Registratie Niet-Ingezetene (RNI).'
              }
            />
          </Col>
        </Row>
        {this.props.values.FormOptions.dutchResident ? (
          <Row>
            <Col>
              <FormCheck
                id="hasBsn"
                label="Heeft u een BSN?"
                name="FormOptions.hasBsn"
                form={this.props}
              />
            </Col>
          </Row>
        ) : null}
        {!this.props.values.FormOptions.isLoggedIn ? (
          <Button onClick={this.prevStep} label="Vorige" icon="fa fa-chevron-left" iconPos="left" />
        ) : null}
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

  private onSubmit() {
    if (!this.validate()) {
      return;
    }

    this.nextStep();
  }

  private nextStep() {
    if (this.props.values.FormOptions.dutchResident && this.props.values.FormOptions.hasBsn) {
      this.setStep(LicenseSteps.BSN);
    } else {
      this.setStep(LicenseSteps.PersonalInfo);
    }
  }

  private prevStep() {
    this.setStep(LicenseSteps.Login);
  }

  private validate(): boolean {
    return true;
  }
}

export default CountryCheck;
