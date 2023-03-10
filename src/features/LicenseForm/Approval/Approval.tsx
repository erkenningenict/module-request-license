import * as React from 'react';

import { Alert } from '@erkenningen/ui/components/alert';
import { Button } from '@erkenningen/ui/components/button';
import { Col } from '@erkenningen/ui/layout/col';
import { Row } from '@erkenningen/ui/layout/row';
import { FormText } from '@erkenningen/ui/components/form';

import FormCheck from '../../../components/ui/FormCheck';

import { LicenseSteps } from '../../../shared/Model';
import ILicenseFormValues from '../ILicenseFormValues';
import { FormikProps } from 'formik';
import { useGrowlContext } from '@erkenningen/ui/components/growl';
import { useGetCertificatePriceQuery } from '../../../generated/graphql';
import { Spinner } from '@erkenningen/ui/components/spinner';

interface ApprovalProps {
  form: FormikProps<ILicenseFormValues>;
  setStep: (step: LicenseSteps) => void;
}

const Approval: React.FC<ApprovalProps> = (props) => {
  const { showGrowl } = useGrowlContext();
  const { loading, data } = useGetCertificatePriceQuery({
    variables: {
      certificaatCode: props?.form?.values?.FormOptions?.Certificaat?.Code || '',
    },
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

  const prevStep = () => {
    props.setStep(
      props.form.values.FormOptions.VooropleidingID &&
        ['30.02', '30.03'].indexOf(props?.form.values?.FormOptions?.Vooropleiding?.Code || '') > -1
        ? LicenseSteps.DocumentAG
        : LicenseSteps.Document,
    );
  };

  const nextStep = () => {
    props.setStep(LicenseSteps.Summary);
  };

  return (
    <>
      <Row>
        <Col>
          <Alert type="info">
            Geef aan of u akkoord gaat met de kosten. Voeg optioneel een opmerking toe.
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormText
            label="Opmerkingen"
            name="FormOptions.Remarks"
            isTextArea={true}
            placeholder="Voeg optioneel een opmerking toe"
            formItemProps={props}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormCheck
            id="approved"
            label="U kent de kosten voor aanvraag"
            name="FormOptions.Approved"
            form={props.form}
            help={`De prijs voor de aanvraag is ${
              data.tariefByCertificaatCode?.TotaalExtBtw || '?'
            } Euro (excl. btw)`}
          />
        </Col>
      </Row>
      <Button onClick={prevStep} label="Vorige" icon="fa fa-chevron-left" iconPos="left" />
      <Button
        label="Naar samenvatting aanvraag"
        disabled={!props.form.values.FormOptions.Approved}
        icon="fa fa-chevron-right"
        iconPos="right"
        onClick={nextStep}
      />
    </>
  );
};

export default Approval;
