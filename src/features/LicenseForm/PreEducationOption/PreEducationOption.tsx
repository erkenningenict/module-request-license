import React from 'react';

import { Button } from '@erkenningen/ui/components/button';
import { Spinner } from '@erkenningen/ui/components/spinner';
import { Col } from '@erkenningen/ui/layout/col';
import { Row } from '@erkenningen/ui/layout/row';

import { FormSelect } from '@erkenningen/ui/components/form';

import { LicenseSteps } from '../../../shared/Model';
import { validateField } from '../../../shared/validation/Form';
import { FormikProps } from 'formik';
import ILicenseFormValues from '../ILicenseFormValues';
import { useGrowlContext } from '@erkenningen/ui/components/growl';
import {
  useCertificatesByPreEducationQuery,
  useGetEducationDataQuery,
} from '../../../generated/graphql';
import { useEffect } from 'react';

interface PreEducatiionOptionsProps {
  form: FormikProps<ILicenseFormValues>;
  setStep: (step: LicenseSteps) => void;
}

const PreEducationOption: React.FC<PreEducatiionOptionsProps> = (props) => {
  const { showGrowl } = useGrowlContext();
  const { loading, data } = useGetEducationDataQuery({
    onError() {
      showGrowl({
        severity: 'error',
        summary: 'Fout bij ophalen prijs',
        sticky: true,
        detail: `Er is een fout opgetreden bij het ophalen van gegevens. Probeer het later nog eens`,
      });
    },
  });

  useEffect(() => {
    if (data && data.Vooropleidingen && props.form.values.FormOptions.VooropleidingID) {
      const vooropleiding = data?.Vooropleidingen.find(
        (v) => v.VooropleidingID === props.form.values.FormOptions.VooropleidingID,
      );

      if (vooropleiding) {
        props.form.setFieldValue('FormOptions.Vooropleiding', vooropleiding);
      }
    }
  }, [data?.Vooropleidingen, props.form.values.FormOptions.VooropleidingID]);

  const { loading: certificatesByPreEducationLoading, data: certificatesByPreEducationData } =
    useCertificatesByPreEducationQuery({
      variables: {
        code: props?.form.values?.FormOptions?.Vooropleiding?.Code || '',
      },
      skip:
        props.form.values.FormOptions?.Vooropleiding?.Code === '' ||
        props.form.values.FormOptions?.Vooropleiding === undefined,
      fetchPolicy: 'network-only',
      nextFetchPolicy: 'network-only',
      onError() {
        showGrowl({
          severity: 'error',
          summary: 'Fout bij ophalen prijs',
          sticky: true,
          detail: `Er is een fout opgetreden bij het ophalen van gegevens. Probeer het later nog eens`,
        });
      },
    });

  if (loading) {
    return <Spinner text={'Gegevens laden...'} />;
  }

  if (!data) {
    return null;
  }

  const onCategoryChange = (): void => {
    // Reset pre education value if category has been changed
    props.form.setFieldValue('FormOptions.VooropleidingID', '');
    props.form.setFieldValue('FormOptions.Vooropleiding', undefined);
  };

  const onPreEducationChange = (): void => {
    // Reset certificate value if pre-education has been changed
    props.form.setFieldValue('FormOptions.CertificaatID', '');
    props.form.setFieldValue('FormOptions.Certificaat', '');
  };

  const validate = (): boolean => {
    let isValid = true;

    isValid = isValid && validateField(props.form, 'FormOptions.VooropleidingCategorieID');
    isValid = isValid && validateField(props.form, 'FormOptions.VooropleidingID');
    isValid = isValid && validateField(props.form, 'FormOptions.CertificaatID');

    return isValid;
  };

  const prevStep = (): void => {
    props.setStep(LicenseSteps.Email);
  };

  const nextStep = (): void => {
    props.setStep(LicenseSteps.ExamDate);
  };

  const onSubmit = (): void => {
    if (validate()) {
      nextStep();
    }
  };

  const categories = data.preEducationCategories;
  const selectOptionsCountries: any[] =
    (categories &&
      categories.map((item: any) => ({
        label: item.Naam,
        value: item.VooropleidingCategorieID,
        item,
      }))) ||
    [];

  const vooropleidingen = data.Vooropleidingen;
  const selectOptionsVooropleidingen: any[] =
    props.form.values.FormOptions.VooropleidingCategorieID && vooropleidingen
      ? vooropleidingen
          .filter(
            (item) =>
              props.form.values.FormOptions.VooropleidingCategorieID &&
              item.Categorie.VooropleidingCategorieID ===
                props.form.values.FormOptions.VooropleidingCategorieID &&
              item.Code !== '30.01',
          )
          .map((item) => ({
            label: `${item.Code} | ${item.Naam}`,
            value: item.VooropleidingID,
            item,
          }))
      : [];

  const possibleCertificatesToChoose =
    certificatesByPreEducationData?.certificatesByPreEducation || [];
  const selectOptionsCertificates: any[] = possibleCertificatesToChoose
    ? possibleCertificatesToChoose.map((item: any) => ({
        label: item.Naam,
        value: item.CertificaatID,
        item,
      }))
    : [];
  if (
    selectOptionsCertificates &&
    selectOptionsCertificates.length === 1 &&
    (props.form.values.FormOptions.Certificaat === undefined ||
      (props.form.values.FormOptions.Certificaat &&
        props.form.values.FormOptions.CertificaatID !==
          selectOptionsCertificates[0].item.CertificaatID))
  ) {
    setTimeout(() => {
      props.form.setFieldValue('FormOptions.Certificaat', selectOptionsCertificates[0].item);
      props.form.setFieldValue(
        'FormOptions.CertificaatID',
        selectOptionsCertificates[0].item.CertificaatID,
      );
    }, 1);
  }

  return (
    <>
      <Row>
        <Col>
          <FormSelect
            label="Selecteer opleidingsland"
            name="FormOptions.VooropleidingCategorieID"
            options={selectOptionsCountries}
            filter={true}
            formItemProps={props}
            onChange={onCategoryChange}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <FormSelect
            label="Selecteer vooropleiding"
            name="FormOptions.VooropleidingID"
            options={selectOptionsVooropleidingen}
            filter={true}
            formItemProps={props}
            onChange={onPreEducationChange}
          />
        </Col>
      </Row>

      {props.form.values.FormOptions.Vooropleiding && !certificatesByPreEducationLoading ? (
        <Row>
          <Col>
            <FormSelect
              label="Selecteer gewenste certificering"
              name="FormOptions.CertificaatID"
              options={selectOptionsCertificates}
              filter={true}
              onChange={(e) => {
                const cert = selectOptionsCertificates.find((s) => s.value === e.value);
                if (cert) {
                  props.form.setFieldValue('FormOptions.Certificaat', cert.item);
                  props.form.setFieldValue('FormOptions.CertificaatID', cert.value);
                }
              }}
              formItemProps={props}
            />
          </Col>
        </Row>
      ) : null}
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

export default PreEducationOption;
