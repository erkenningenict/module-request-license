import * as React from 'react';
import Moment from 'react-moment';

import { Alert } from '@erkenningen/ui/components/alert';
import { Col } from '@erkenningen/ui/layout/col';
import { Row } from '@erkenningen/ui/layout/row';

import FormStep from '../../../components/ui/FormStep';

class Completion extends FormStep {
  public render() {
    return this.props.values.licenseRequestResult ? (
      <>
        <Row>
          <Col>
            <Alert type="info">
              <p>
                Nadat de aanvraag positief is beoordeeld en de betaling verwerkt, ontvangt u het
                vakbekwaamheidsbewijs "
                {this.props.values.FormOptions.Certificaat
                  ? this.props.values.FormOptions.Certificaat.Naam
                  : ''}
                " met als ingangsdatum{' '}
                {this.props.values.FormOptions.ExamDate ? (
                  <Moment format="DD-MM-YYYY">
                    {this.props.values.FormOptions.ExamDate.toISOString()}
                  </Moment>
                ) : null}
                .
              </p>
              <p>
                Wanneer de beoordeling van bijgevoegde documenten vragen oproept, wordt contact met
                u opgenomen.
              </p>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Bedankt voor uw aanvraag. U kunt uw factuur{' '}
              <span dangerouslySetInnerHTML={this.getInvoiceJsLink()} /> bekijken en via iDEAL
              betalen.
            </p>
            <p>
              Uw aanvraag document in PDF kunt u{' '}
              <a
                rel="noopener noreferrer"
                href={this.props.values.licenseRequestResult.requestFormPdfLink}
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
  }

  private getInvoiceJsLink(): { __html: string } {
    if (!this.props.values.licenseRequestResult) {
      return { __html: '' };
    }

    return {
      __html: `<a href="#" onclick="${this.props.values.licenseRequestResult.invoiceLink};return false;">hier</a>`,
    };
  }
}

export default Completion;
