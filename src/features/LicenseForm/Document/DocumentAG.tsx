import * as React from 'react';

import { LicenseSteps } from '../../../shared/Model';
import { isValidDocumentFile } from '../../../shared/validation/File';

import { Alert } from '@erkenningen/ui/components/alert';
import { Button } from '@erkenningen/ui/components/button';
import { Col } from '@erkenningen/ui/layout/col';
import { Row } from '@erkenningen/ui/layout/row';

import { FormItem } from '@erkenningen/ui/components/form';
import { FormikProps } from 'formik';
import ILicenseFormValues from '../ILicenseFormValues';

interface DocumentAGProps {
  form: FormikProps<ILicenseFormValues>;
  setStep: (step: LicenseSteps) => void;
}

const DocumentAG: React.FC<DocumentAGProps> = (props) => {
  const inputRef1 = React.useRef<HTMLInputElement>(null);
  const inputRef2 = React.useRef<HTMLInputElement>(null);
  const acceptedFiles = '.pdf,.docx,.jpg,.jpeg,.png';

  const onFile1Click = (): void => {
    if (inputRef1.current) {
      inputRef1.current.click();
    }
  };

  const onFile2Click = (): void => {
    if (inputRef2.current) {
      inputRef2.current.click();
    }
  };

  const onFile1Change = (event: any): void => {
    props.form.setFieldValue('FormOptions.File1', event.currentTarget.files[0]);
  };

  const onFile2Change = (event: any): void => {
    props.form.setFieldValue('FormOptions.File2', event.currentTarget.files[0]);
  };

  const onSubmit = () => {
    if (validate()) {
      nextStep();
    }
  };

  const validate = (): boolean => {
    let isValid = true;

    const file1ValidationResult = isValidDocumentFile(props.form.values.FormOptions.File1);
    props.form.setFieldError('FormOptions.File1', file1ValidationResult);
    isValid = isValid && file1ValidationResult === '';

    const file2ValidationResult = isValidDocumentFile(props.form.values.FormOptions.File2);
    props.form.setFieldError('FormOptions.File2', file2ValidationResult);
    isValid = isValid && file2ValidationResult === '';

    return isValid;
  };

  const prevStep = (): void => {
    props.setStep(LicenseSteps.ExamDate);
  };

  const nextStep = (): void => {
    props.setStep(LicenseSteps.Approval);
  };

  return (
    <>
      <Row>
        <Col>
          <Alert type="info">
            Upload uw certificaat Adviseren Gewasbescherming{' '}
            {!props.form.values.FormOptions.isLoggedIn ? 'en legitimatie' : null}.
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            label="Selecteer uw certificaat"
            icon="pi pi-plus"
            className="p-button-secondary"
            onClick={onFile1Click}
          />
          <input
            name="file1"
            type="file"
            onChange={onFile1Change}
            style={{ display: 'none' }}
            ref={inputRef1}
          />
          <span>
            <i>
              {props.form.values.FormOptions.File1 ? props.form.values.FormOptions.File1.name : ''}
            </i>
          </span>
          <FormItem form={props.form} name="FormOptions.File1" />
        </Col>
      </Row>

      {!props.form.values.FormOptions.isLoggedIn ? (
        <Row>
          <Col>
            <Button
              label="Selecteer uw legitimatie"
              icon="pi pi-plus"
              className="p-button-secondary"
              onClick={onFile2Click}
            />
            <input
              name="file2"
              type="file"
              onChange={onFile2Change}
              style={{ display: 'none' }}
              ref={inputRef2}
            />
            <span>
              <i>
                {props.form.values.FormOptions.File2
                  ? props.form.values.FormOptions.File2.name
                  : ''}
              </i>
            </span>
            <FormItem form={props.form} name="FormOptions.File2" />
          </Col>
        </Row>
      ) : null}

      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={prevStep} label="Vorige" icon="fa fa-chevron-left" iconPos="left" />
          <Button onClick={onSubmit} label="Volgende" icon="fa fa-chevron-right" iconPos="right" />
        </Col>
      </Row>
    </>
  );
};

export default DocumentAG;
