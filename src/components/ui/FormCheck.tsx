import * as React from 'react';

import { Checkbox } from '@erkenningen/ui/components/checkbox';
import { Spinner } from '@erkenningen/ui/components/spinner';
import { FormikProps } from 'formik';

import { FormItem } from '@erkenningen/ui/components/form';

interface IFormCheckProps {
  id: string;
  label: string;
  name?: string;
  value?: any;
  readonly?: boolean;
  checked?: boolean;
  onChange?: (e: any) => void;
  form?: FormikProps<any>;
  loading?: boolean;
  help?: string;
}

class FormCheck extends React.Component<IFormCheckProps, unknown> {
  public render() {
    const handleChange = (event: any) => {
      if (this.props.form && this.props.name) {
        this.props.form.setFieldValue(this.props.name, event.checked);
        this.props.form.setFieldTouched(this.props.name, true);
      } else if (this.props.onChange) {
        this.props.onChange(event);
      }
    };

    return (
      <FormItem
        label={this.props.label}
        for={this.props.id}
        form={this.props.form}
        name={this.props.name}
      >
        {this.props.loading ? (
          <span>
            <Spinner />
          </span>
        ) : (
          <div className="checkbox">
            <Checkbox
              id={this.props.id}
              checked={this.getFormValue()}
              onChange={handleChange}
              disabled={this.props.readonly}
            />
            <i style={{ marginLeft: 10 }}>{this.props.help}</i>
          </div>
        )}
      </FormItem>
    );
  }

  private getFormValue(): any {
    if (this.props.value) {
      return this.props.value;
    }

    // Use name value for value retrieval
    if (this.props.form && this.props.name) {
      const parts = this.props.name.split('.');
      let value: any = this.props.form.values;
      for (const part of parts) {
        if (!value) {
          return undefined;
        }
        value = value[part];
      }
      return value;
    }

    return undefined;
  }
}

export default FormCheck;
