import * as React from 'react';

import { FormikProps } from 'formik';

import ILicenseFormValues from '../../features/LicenseForm/ILicenseFormValues';
import { LicenseSteps } from '../../shared/Model';

class FormStep<T = {}> extends React.Component<FormikProps<ILicenseFormValues>, T> {
  constructor(props: any) {
    super(props);

    this.setStep = this.setStep.bind(this);
  }

  protected setStep(step: LicenseSteps): void {
    this.props.values.onStep(step);
  }
}

export default FormStep;
