import * as React from 'react';

import { LicenseSteps } from '../../../shared/Model';
import { validateField } from '../../../shared/validation/Form';

import { Alert, Button, Col, Row } from '@erkenningen/ui';

import FormCalendar from '../../../components/ui/FormCalendar';
import FormStep from '../../../components/ui/FormStep';

class ExamDate extends FormStep {
  constructor(props: any) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  public render() {
    return (
      <>
        <Row>
          <Col>
            <Alert type="info">
              Geef aan wanneer uw examen behaald is.{' '}
              {this.props.values.FormOptions.Vooropleiding &&
              this.props.values.FormOptions.Vooropleiding.Code === '30.02'
                ? 'De datum moet tussen 1 januari 2019 en vandaag liggen.'
                : 'De datum moet liggen tussen vandaag en maximaal 5 jaar in het verleden.'}
            </Alert>
          </Col>
        </Row>
        <FormCalendar
          id="examDate"
          label="Datum examen behaald"
          name="FormOptions.ExamDate"
          placeholder="dd-mm-jjjj"
          form={this.props}
        />
        <Button onClick={this.prevStep} label="Vorige" icon="fa fa-chevron-left" iconPos="left" />
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
    return validateField(this.props, 'FormOptions.ExamDate');
  }

  private prevStep() {
    this.setStep(LicenseSteps.PreEducationOption);
  }

  private nextStep() {
    this.setStep(
      this.props.values.FormOptions.Vooropleiding &&
      ['30.02', '30.03'].indexOf(this.props.values.FormOptions.Vooropleiding.Code) > -1
        ? LicenseSteps.DocumentAG
        : LicenseSteps.Document,
    );
  }
}

export default ExamDate;
