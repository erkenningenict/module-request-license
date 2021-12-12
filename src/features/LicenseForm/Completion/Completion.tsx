import React from 'react';

import { Alert } from '@erkenningen/ui/components/alert';
import { Col } from '@erkenningen/ui/layout/col';
import { Row } from '@erkenningen/ui/layout/row';

import { toDutchDate } from '@erkenningen/ui/utils';
import ILicenseFormValues from '../ILicenseFormValues';
import { LicenseSteps } from '../../../shared/Model';
import { FormikProps } from 'formik';

interface CompletionProps {
  form: FormikProps<ILicenseFormValues>;
  setStep: (step: LicenseSteps) => void;
}

const Completion: React.FC<CompletionProps> = (props) => {
  const getInvoiceJsLink = (): { __html: string } => {
    if (!props.form.values.licenseRequestResult) {
      return { __html: '' };
    }

    return {
      __html: `<a href="#" onclick="${props.form.values.licenseRequestResult.invoiceLink};return false;">hier</a>`,
    };
  };
  return props.form.values.licenseRequestResult ? (
    <>
      <Row>
        <Col>
          <Alert type="info">
            <p>
              Nadat de aanvraag positief is beoordeeld en de betaling verwerkt, ontvangt u het
              vakbekwaamheidsbewijs &quot;
              {props.form.values.FormOptions.Certificaat
                ? props.form.values.FormOptions.Certificaat.Naam
                : ''}
              &quot; met als ingangsdatum{' '}
              {props.form.values.FormOptions.ExamDate
                ? toDutchDate(props.form.values.FormOptions.ExamDate.toISOString())
                : null}
              .
            </p>
            <p>
              Wanneer de beoordeling van bijgevoegde documenten vragen oproept, wordt contact met u
              opgenomen.
            </p>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Bedankt voor uw aanvraag. U kunt uw factuur{' '}
            <span dangerouslySetInnerHTML={getInvoiceJsLink()} /> bekijken en via iDEAL betalen.
          </p>
          <p>
            Uw aanvraag document in PDF kunt u{' '}
            <a
              rel="noopener noreferrer"
              href={props.form.values.licenseRequestResult.requestFormPdfLink}
              target="_blank"
            >
              hier
            </a>{' '}
            downloaden
          </p>
        </Col>
      </Row>
    </>
  ) : null;
};

export default Completion;
