import * as React from 'react';

import { Select } from '@erkenningen/ui/components/select';
import { Spinner } from '@erkenningen/ui/components/spinner';
import { FormikProps } from 'formik';

import { validateField } from '../../shared/validation/Form';

import FormItem from './FormItem';

interface IFormSelectProps {
  id: string;
  label: string;
  name?: string;
  value?: any;
  readonly?: boolean;
  options: Array<{ label: string; value: any; item?: any }>;
  placeholder?: string;
  onChange?: (e: any) => void;
  form?: FormikProps<any>;
  loading?: boolean;
  filter?: boolean;
}

class FormSelect extends React.Component<IFormSelectProps, {}> {
  public render() {
    const handleChange = (event: any) => {
      if (this.props.form && this.props.name) {
        const item = this.props.options.find((o) => o.value === event.value);
        const itemValue = item && item.item ? item.item : event.value;

        this.props.form.setFieldValue(this.props.name, itemValue);
        this.props.form.setFieldTouched(this.props.name, true);

        validateField(this.props.form, this.props.name, itemValue);
      }
      if (this.props.onChange) {
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
          <Spinner />
        ) : (
          <Select
            id={this.props.id}
            options={this.props.options}
            placeholder={this.props.placeholder || this.props.label}
            value={this.getFormValue()}
            onChange={handleChange}
            disabled={this.props.readonly}
            filter={this.props.filter}
            className="w-100"
          />
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
        value = value[part];
      }

      // Map value to option if available
      const option = this.props.options.find((o) => {
        if (!o.item) {
          return false;
        }
        return JSON.stringify(o.item) === JSON.stringify(value);
      });

      if (option) {
        return option.value;
      }

      return value;
    }

    return undefined;
  }
}

export default FormSelect;
