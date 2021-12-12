import React from 'react';

import { LicenseSteps } from '../../../shared/Model';
import { validateField } from '../../../shared/validation/Form';

import { Alert } from '@erkenningen/ui/components/alert';
import { Button } from '@erkenningen/ui/components/button';
import { Col } from '@erkenningen/ui/layout/col';
import { Row } from '@erkenningen/ui/layout/row';

import { FormCalendar } from '@erkenningen/ui/components/form';
import { FormikProps } from 'formik';
import ILicenseFormValues from '../ILicenseFormValues';

interface ExamDateProps {
  form: FormikProps<ILicenseFormValues>;
  setStep: (step: LicenseSteps) => void;
}

const ExamDate: React.FC<ExamDateProps> = (props) => {
  const nextStep = () => {
    props.setStep(
      props.form.values.FormOptions.Vooropleiding &&
        ['30.02', '30.03'].indexOf(props.form.values.FormOptions.Vooropleiding.Code) > -1
        ? LicenseSteps.DocumentAG
        : LicenseSteps.Document,
    );
  };

  const validate = (): boolean => {
    return validateField(props.form, 'FormOptions.ExamDate');
  };

  const onSubmit = () => {
    if (validate()) {
      nextStep();
    }
  };

  const prevStep = () => {
    props.setStep(LicenseSteps.PreEducationOption);
  };

  return (
    <>
      <Row>
        <Col>
          <Alert type="info">
            Geef aan wanneer uw examen behaald is.{' '}
            {props.form.values.FormOptions.Vooropleiding &&
            props.form.values.FormOptions.Vooropleiding.Code === '30.02'
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
        formItemProps={props.form}
      />
      <Button onClick={prevStep} label="Vorige" icon="fa fa-chevron-left" iconPos="left" />
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

export default ExamDate;
