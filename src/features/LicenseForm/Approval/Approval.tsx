import * as React from 'react';

import { CERTIFICATE_PRICE_QUERY, ICertificatePriceQueryResult } from '../../../shared/Queries';

import { GqlQuery } from '@erkenningen/graphql';
import { Alert, Button, Col, Row } from '@erkenningen/ui';

import FormCheck from '../../../components/ui/FormCheck';
import FormStep from '../../../components/ui/FormStep';
import FormText from '../../../components/ui/FormText';

import { LicenseSteps } from '../../../shared/Model';

class Approval extends FormStep {
  constructor(props: any) {
    super(props);

    this.prevStep = this.prevStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  public render() {
    return (
      <GqlQuery<ICertificatePriceQueryResult> query={CERTIFICATE_PRICE_QUERY}>
        {(result: ICertificatePriceQueryResult) => {
          return (
            <div>
              <Row>
                <Col>
                  <Alert type="info">
                    Geef aan of u akkoord gaat met de kosten en voeg optioneel een opmerking toe.
                  </Alert>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormText
                    id="remarks"
                    label="Opmerkingen"
                    name="FormOptions.Remarks"
                    isTextArea={true}
                    placeholder="Voeg optioneel een opmerking toe"
                    form={this.props}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormCheck
                    id="approved"
                    label="U kent de kosten voor aanvraag"
                    name="FormOptions.Approved"
                    form={this.props}
                    help={`De prijs voor de aanvraag is ${result.tariefByCertificaatCode
                      .TotaalExtBtw || '?'} Euro (excl. btw)`}
                  />
                </Col>
              </Row>
              <Button
                onClick={this.prevStep}
                label="Vorige"
                icon="fa fa-chevron-left"
                iconPos="left"
              />
              <Button
                label="Naar samenvatting aanvraag"
                disabled={!this.props.values.FormOptions.Approved}
                icon="fa fa-chevron-right"
                iconPos="right"
                onClick={this.nextStep}
              />
            </div>
          );
        }}
      </GqlQuery>
    );
  }

  private prevStep() {
    this.setStep(
      this.props.values.FormOptions.Vooropleiding &&
      ['30.02', '30.03'].indexOf(this.props.values.FormOptions.Vooropleiding.Code) > -1
        ? LicenseSteps.DocumentAG
        : LicenseSteps.Document,
    );
  }

  private nextStep() {
    this.setStep(LicenseSteps.Summary);
  }
}

export default Approval;
