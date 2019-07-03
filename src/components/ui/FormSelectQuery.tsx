import * as React from 'react';

import { GqlQuery } from '@erkenningen/graphql';
import { FormikProps } from 'formik';

import FormSelect from './FormSelect';

interface IFormSelectQueryProps {
  query: any;
  queryKey: string;
  labelKey?: string;
  valueKey?: string;

  id: string;
  label: string;
  name?: string;
  value?: any;
  readonly?: boolean;
  filter?: boolean;
  itemAsValue?: boolean;
  placeholder?: string;
  onChange?: (e: any) => void;
  form?: FormikProps<any>;
}

class FormSelectQuery extends React.Component<IFormSelectQueryProps, {}> {
  public render() {
    return (
      <GqlQuery query={this.props.query}>
        {(data: any) => {
          const items = data[this.props.queryKey];

          const selectOptions =
            (items &&
              items.map((item: any) => ({
                label: this.props.labelKey ? item[this.props.labelKey] : item.Text,
                value: this.props.itemAsValue
                  ? item
                  : this.props.valueKey
                    ? item[this.props.valueKey]
                    : item.Value,
              }))) ||
            [];

          const newProps = {
            ...this.props,
            options: selectOptions,
          };

          return <FormSelect {...newProps} />;
        }}
      </GqlQuery>
    );
  }

  /**
   * For better rendering performance we need to detect if the value has been changed
   */
  public shouldComponentUpdate(nextProps: IFormSelectQueryProps, nextState: {}): boolean {
    const errorChanged = !(
      this.props.form &&
      this.props.form.errors &&
      nextProps.form &&
      nextProps.form.errors &&
      JSON.stringify(this.props.form.errors) === JSON.stringify(nextProps.form.errors)
    );
    return this.getFormValue(this.props) !== this.getFormValue(nextProps) || errorChanged;
  }

  private getFormValue(props: IFormSelectQueryProps): any {
    if (props.value) {
      return props.value;
    }

    // Use name value for value retrieval
    if (props.form && props.name) {
      const parts = props.name.split('.');
      let value: any = props.form.values;
      for (const part of parts) {
        value = value[part];
      }
      return value;
    }

    return undefined;
  }
}

export default FormSelectQuery;
