import * as React from 'react';

import { Button, Col, Row } from '@erkenningen/ui';

import FormSelect from '../../../components/ui/FormSelect';
import FormStep from '../../../components/ui/FormStep';

import { GqlQuery } from '@erkenningen/graphql';
import { IVoorOpleiding, LicenseSteps } from '../../../shared/Model';
import {
  CERTS_BY_PRE_EDUCATION_QUERY,
  PRE_EDUCATION_CATEGORIES_QUERY,
  PRE_EDUCATIONS_QUERY,
} from '../../../shared/Queries';
import { validateField } from '../../../shared/validation/Form';

class PreEducationOption extends FormStep {
  constructor(props: any) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onPreEducationChange = this.onPreEducationChange.bind(this);
    this.filterPreEducationsByCategory = this.filterPreEducationsByCategory.bind(this);
  }

  public render() {
    return (
      <div>
        <GqlQuery query={PRE_EDUCATION_CATEGORIES_QUERY}>
          {(data: any) => {
            const items = data.preEducationCategories;
            const selectOptions: any[] =
              (items &&
                items.map((item: any) => ({
                  label: item.Naam,
                  value: item,
                }))) ||
              [];

            return (
              <Row>
                <Col>
                  {' '}
                  <FormSelect
                    id="preEducationCategory"
                    label="Selecteer opleidingsland"
                    name="FormOptions.VooropleidingCategorie"
                    options={selectOptions}
                    filter={true}
                    form={this.props}
                    onChange={this.onCategoryChange}
                  />
                </Col>
              </Row>
            );
          }}
        </GqlQuery>

        <GqlQuery query={PRE_EDUCATIONS_QUERY}>
          {(data: any) => {
            if (!this.props.values.FormOptions.VooropleidingCategorie) {
              return null;
            }

            const items = data.Vooropleidingen;
            const selectOptions: any[] =
              this.props.values.FormOptions.VooropleidingCategorie && items
                ? items
                    .filter(
                      (item: any) =>
                        this.props.values.FormOptions.VooropleidingCategorie &&
                        item.Categorie.VooropleidingCategorieID ===
                          this.props.values.FormOptions.VooropleidingCategorie
                            .VooropleidingCategorieID &&
                        item.Code !== '30.01',
                    )
                    .map((item: any) => ({
                      label: `${item.Code} | ${item.Naam}`,
                      value: item,
                    }))
                : [];

            return (
              <Row>
                <Col>
                  {' '}
                  <FormSelect
                    id="preEducation"
                    label="Selecteer vooropleiding"
                    name="FormOptions.Vooropleiding"
                    options={selectOptions}
                    filter={true}
                    form={this.props}
                    onChange={this.onPreEducationChange}
                  />
                </Col>
              </Row>
            );
          }}
        </GqlQuery>
        {this.props.values.FormOptions.Vooropleiding ? (
          <GqlQuery
            query={CERTS_BY_PRE_EDUCATION_QUERY}
            variables={{
              code: this.props.values.FormOptions.Vooropleiding.Code,
            }}
          >
            {(data: any) => {
              const items = data.certificatesByPreEducation;
              const selectOptions: any[] = items
                ? items.map((item: any) => ({
                    label: item.Naam,
                    value: item,
                  }))
                : [];

              return (
                <Row>
                  <Col>
                    {' '}
                    <FormSelect
                      id="certificate"
                      label="Selecteer gewenste certificering"
                      name="FormOptions.Certificaat"
                      options={selectOptions}
                      filter={true}
                      form={this.props}
                    />
                  </Col>
                </Row>
              );
            }}
          </GqlQuery>
        ) : null}
        <Button onClick={this.prevStep} label="Vorige" icon="fa fa-chevron-left" iconPos="left" />
        <Button
          onClick={this.onSubmit}
          disabled={this.props.isSubmitting}
          label="Volgende"
          icon="fa fa-chevron-right"
          iconPos="right"
        />
      </div>
    );
  }

  private filterPreEducationsByCategory(preEducation: IVoorOpleiding): boolean {
    if (!this.props.values.FormOptions.VooropleidingCategorie) {
      return false;
    }
    return (
      preEducation.Categorie.VooropleidingCategorieID ===
      this.props.values.FormOptions.VooropleidingCategorie.VooropleidingCategorieID
    );
  }

  private onCategoryChange(): void {
    // Reset pre education value if category has been changed
    this.props.setFieldValue('FormOptions.Vooropleiding', '');
  }

  private onPreEducationChange(): void {
    // Reset certificate value if pre-education has been changed
    this.props.setFieldValue('FormOptions.Certificaat', '');
  }

  private onSubmit(): void {
    if (this.validate()) {
      this.nextStep();
    }
  }

  private validate(): boolean {
    let isValid = true;

    isValid = isValid && validateField(this.props, 'FormOptions.VooropleidingCategorie');
    isValid = isValid && validateField(this.props, 'FormOptions.Vooropleiding');
    isValid = isValid && validateField(this.props, 'FormOptions.Certificaat');

    return isValid;
  }

  private prevStep(): void {
    this.setStep(LicenseSteps.Email);
  }

  private nextStep(): void {
    this.setStep(LicenseSteps.ExamDate);
  }
}

export default PreEducationOption;
