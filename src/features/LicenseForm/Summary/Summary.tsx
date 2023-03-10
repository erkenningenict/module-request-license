import * as React from 'react';

import { Alert } from '@erkenningen/ui/components/alert';
import { Button } from '@erkenningen/ui/components/button';
import { Spinner } from '@erkenningen/ui/components/spinner';
import { Col } from '@erkenningen/ui/layout/col';
import { Row } from '@erkenningen/ui/layout/row';

import { LicenseSteps } from '../../../shared/Model';
import { toDutchDate } from '@erkenningen/ui/utils';
import { useGetCertificatePriceQuery } from '../../../generated/graphql';
import { useGrowlContext } from '@erkenningen/ui/components/growl';
import { FormikProps } from 'formik';
import ILicenseFormValues from '../ILicenseFormValues';

interface SummaryProps {
  form: FormikProps<ILicenseFormValues>;
  setStep: (step: LicenseSteps) => void;
}
const Summary: React.FC<SummaryProps> = (props) => {
  const { showGrowl } = useGrowlContext();
  const { loading, data: certificatePrice } = useGetCertificatePriceQuery({
    variables: {
      certificaatCode: props.form.values.FormOptions.Certificaat?.Code || '',
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

  if (!certificatePrice?.tariefByCertificaatCode) {
    return null;
  }

  const isAG = (): boolean => {
    return (
      props.form.values.FormOptions.Vooropleiding !== undefined &&
      ['30.02', '30.03'].indexOf(props.form.values.FormOptions.Vooropleiding.Code) !== -1
    );
  };

  const prevStep = () => {
    props.setStep(LicenseSteps.Approval);
  };

  const data = props.form.values;

  return (
    <>
      <Row>
        <Col>
          <Alert type="info">
            Bevestig de aanvraag door op de knop Afronden te klikken. U ziet dan de aanvraag en er
            wordt ook een factuur aangemaakt die u kunt betalen met iDeal. Daarnaast ontvangt u een
            e-mail met de door u ingediende gegevens.
            {!data.FormOptions.isLoggedIn ? (
              <span>
                <br />
                <br />
                Uw inloggegevens worden per e-mail verstuurd.
              </span>
            ) : null}
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col size="col-xs-6" className="row-spacer">
          <h4>Persoonsgegevens</h4>
          {!data.FormOptions.hasBsn ? (
            <>
              <Row>
                <Col>
                  <b>Naam</b>
                </Col>
                <Col>
                  {data.Persoon.Voorletters} {data.Persoon.Tussenvoegsel} {data.Persoon.Achternaam}
                </Col>
              </Row>
              <Row>
                <Col>
                  <b>Adres</b>
                </Col>
                <Col>
                  {data.Persoon.Contactgegevens.Adresregel1}{' '}
                  {data.Persoon.Contactgegevens.Huisnummer}{' '}
                  {data.Persoon.Contactgegevens.HuisnummerToevoeging}
                  <br />
                  {data.Persoon.Contactgegevens.Adresregel2 ? (
                    <span>
                      {data.Persoon.Contactgegevens.Adresregel2}
                      <br />
                    </span>
                  ) : null}
                  {data.Persoon.Contactgegevens.Postcode}
                  &nbsp;&nbsp;
                  {data.Persoon.Contactgegevens.Woonplaats}
                  <br />
                  {data.Persoon.Contactgegevens.Land}
                </Col>
              </Row>
              <Row>
                <Col>
                  <b>Nationaliteit</b>
                </Col>
                <Col>{data.Persoon.Nationaliteit}</Col>
              </Row>
            </>
          ) : null}
          <Row>
            <Col>
              <b>Geboortedatum</b>
            </Col>
            <Col>{data.Persoon.Geboortedatum ? toDutchDate(data.Persoon.Geboortedatum) : null}</Col>
          </Row>
          {data.FormOptions.hasBsn && data.Persoon.BSN ? (
            <Row>
              <Col>
                <b>BSN</b>
              </Col>
              <Col>{data.Persoon.BSN}</Col>
            </Row>
          ) : null}
          <Row>
            <Col>
              <b>E-mail</b>
            </Col>
            <Col>{data.Persoon.Contactgegevens.Email}</Col>
          </Row>
        </Col>
        <Col size="col-xs-6" className="row-spacer">
          <h4>Certificering</h4>
          {data.FormOptions.Vooropleiding ? (
            <>
              <Row>
                <Col>
                  <b>Vooropleiding</b>
                </Col>
                <Col>{data.FormOptions.Vooropleiding.Naam}</Col>
              </Row>
              <Row>
                <Col>
                  <b>Datum examen behaald</b>
                </Col>
                <Col>
                  {data.FormOptions.ExamDate ? toDutchDate(data.FormOptions.ExamDate) : null}
                </Col>
              </Row>
            </>
          ) : null}
          <Row>
            <Col>
              <b>Nieuwe licentie</b>
            </Col>
            <Col>{data.FormOptions.Certificaat ? data.FormOptions.Certificaat.Naam : ''}</Col>
          </Row>
          {isAG() ? (
            <>
              <Row>
                <Col>
                  <b>Certificaat Adviseren Gewasbescherming</b>
                </Col>
                <Col>
                  <i>{data.FormOptions.File1 ? data.FormOptions.File1.name : ''}</i>
                </Col>
              </Row>
              {!data.FormOptions.isLoggedIn ? (
                <Row>
                  <Col>
                    <b>Legitimatie</b>
                  </Col>
                  <Col>
                    <i>{data.FormOptions.File2 ? data.FormOptions.File2.name : ''}</i>
                  </Col>
                </Row>
              ) : null}
            </>
          ) : (
            <>
              <Row>
                <Col>
                  <b>Diploma</b>
                </Col>
                <Col>
                  <i>{data.FormOptions.File1 ? data.FormOptions.File1.name : ''}</i>
                </Col>
              </Row>
              <Row>
                <Col>
                  <b>Cijferlijst</b>
                </Col>
                <Col>
                  <i>{data.FormOptions.File2 ? data.FormOptions.File2.name : ''}</i>
                </Col>
              </Row>
              {!data.FormOptions.isLoggedIn ? (
                <Row>
                  <Col>
                    <b>Legitimatie</b>
                  </Col>
                  <Col>
                    <i>{data.FormOptions.File3 ? data.FormOptions.File3.name : ''}</i>
                  </Col>
                </Row>
              ) : null}
            </>
          )}
          {data.FormOptions.Remarks ? (
            <Row>
              <Col>
                <b>Opmerkingen</b>
              </Col>
              <Col>{data.FormOptions.Remarks}</Col>
            </Row>
          ) : null}
          <Row>
            <Col>
              <b>Kosten</b>
            </Col>
            <Col>
              <span>
                {certificatePrice?.tariefByCertificaatCode.TotaalExtBtw || '?'} Euro (excl. btw)
              </span>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>&nbsp;</Col>
      </Row>

      <Row>
        <Col>
          <Button
            disabled={props.form.isSubmitting}
            onClick={() => prevStep()}
            label="Vorige"
            icon="fa fa-chevron-left"
            iconPos="left"
          />
          <Button
            onClick={props.form.submitForm}
            disabled={props.form.isSubmitting}
            label="Afronden"
            icon={props.form.isSubmitting ? 'pi pi-spin pi-spinner' : 'pi pi-check'}
            iconPos="right"
          />
        </Col>
      </Row>

      {props.form.isSubmitting ? (
        <>
          <Row>
            <Col>&nbsp;</Col>
          </Row>

          <Row>
            <Col>
              <Alert type="warning">
                Let op, het verwerken van de aanvraag kan even duren. Even geduld a.u.b.
              </Alert>
            </Col>
          </Row>
        </>
      ) : null}
    </>
  );
};

export default Summary;
