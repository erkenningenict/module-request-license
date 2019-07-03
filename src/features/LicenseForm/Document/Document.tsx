import * as React from 'react';

import { LicenseSteps } from '../../../shared/Model';
import { isValidDocumentFile } from '../../../shared/validation/File';

import { Alert, Button, Col, Row } from '@erkenningen/ui';

import FormItem from '../../../components/ui/FormItem';
import FormStep from '../../../components/ui/FormStep';

class Document extends FormStep {
  private inputRef1: React.RefObject<HTMLInputElement>;
  private inputRef2: React.RefObject<HTMLInputElement>;
  private inputRef3: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.inputRef1 = React.createRef();
    this.inputRef2 = React.createRef();
    this.inputRef3 = React.createRef();
    this.onFile1Change = this.onFile1Change.bind(this);
    this.onFile2Change = this.onFile2Change.bind(this);
    this.onFile3Change = this.onFile3Change.bind(this);
    this.onFile1Click = this.onFile1Click.bind(this);
    this.onFile2Click = this.onFile2Click.bind(this);
    this.onFile3Click = this.onFile3Click.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  public render() {
    return (
      <div>
        <Row>
          <Col>
            <Alert type="info">Upload hier uw diploma, cijferlijst en legitimatie.</Alert>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              label="Selecteer uw diploma"
              icon="pi pi-plus"
              className="p-button-secondary"
              onClick={this.onFile1Click}
            />
            <input
              name="file1"
              type="file"
              onChange={this.onFile1Change}
              style={{ display: 'none' }}
              ref={this.inputRef1}
            />
            <span>
              <i>
                {this.props.values.FormOptions.File1
                  ? this.props.values.FormOptions.File1.name
                  : ''}
              </i>
            </span>
            <FormItem form={this.props} name="FormOptions.File1" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              label="Selecteer uw cijferlijst"
              icon="pi pi-plus"
              className="p-button-secondary"
              onClick={this.onFile2Click}
            />
            <input
              name="file2"
              type="file"
              onChange={this.onFile2Change}
              style={{ display: 'none' }}
              ref={this.inputRef2}
            />
            <span>
              <i>
                {this.props.values.FormOptions.File2
                  ? this.props.values.FormOptions.File2.name
                  : ''}
              </i>
            </span>
            <FormItem form={this.props} name="FormOptions.File2" />
          </Col>
        </Row>
        {!this.props.values.FormOptions.isLoggedIn ? (
          <Row>
            <Col>
              <Button
                label="Selecteer uw legitimatie"
                icon="pi pi-plus"
                className="p-button-secondary"
                onClick={this.onFile3Click}
              />
              <input
                name="file3"
                type="file"
                onChange={this.onFile3Change}
                style={{ display: 'none' }}
                ref={this.inputRef3}
              />
              <span>
                <i>
                  {this.props.values.FormOptions.File3
                    ? this.props.values.FormOptions.File3.name
                    : ''}
                </i>
              </span>
              <FormItem form={this.props} name="FormOptions.File3" />
            </Col>
          </Row>
        ) : null}
        <Row>
          <Col>&nbsp;</Col>
        </Row>
        <Row>
          <Col>
            <Button
              onClick={this.prevStep}
              label="Vorige"
              icon="fa fa-chevron-left"
              iconPos="left"
            />
            <Button
              onClick={this.onSubmit}
              label="Volgende"
              icon="fa fa-chevron-right"
              iconPos="right"
            />
          </Col>
        </Row>
      </div>
    );
  }

  private onFile1Click(): void {
    if (this.inputRef1.current) {
      this.inputRef1.current.click();
    }
  }

  private onFile2Click(): void {
    if (this.inputRef2.current) {
      this.inputRef2.current.click();
    }
  }

  private onFile3Click(): void {
    if (this.inputRef3.current) {
      this.inputRef3.current.click();
    }
  }

  private onFile1Change(event: any): void {
    this.props.setFieldValue('FormOptions.File1', event.currentTarget.files[0]);
  }

  private onFile2Change(event: any): void {
    this.props.setFieldValue('FormOptions.File2', event.currentTarget.files[0]);
  }

  private onFile3Change(event: any): void {
    this.props.setFieldValue('FormOptions.File3', event.currentTarget.files[0]);
  }

  private onSubmit() {
    if (this.validate()) {
      this.nextStep();
    }
  }

  private validate(): boolean {
    let isValid = true;

    const file1ValidationResult = isValidDocumentFile(this.props.values.FormOptions.File1);
    this.props.setFieldError('FormOptions.File1', file1ValidationResult);
    isValid = isValid && file1ValidationResult === '';

    const file2ValidationResult = isValidDocumentFile(this.props.values.FormOptions.File2);
    this.props.setFieldError('FormOptions.File2', file2ValidationResult);
    isValid = isValid && file2ValidationResult === '';

    if (!this.props.values.FormOptions.isLoggedIn) {
      const file3ValidationResult = isValidDocumentFile(this.props.values.FormOptions.File3);
      this.props.setFieldError('FormOptions.File3', file3ValidationResult);
      isValid = isValid && file3ValidationResult === '';
    }

    return isValid;
  }

  private prevStep(): void {
    this.setStep(LicenseSteps.ExamDate);
  }

  private nextStep(): void {
    this.setStep(LicenseSteps.Approval);
  }
}

export default Document;
