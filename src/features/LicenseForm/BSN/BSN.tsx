import { ERKENNINGEN_LOGIN_URL } from '@erkenningen/config';
import * as React from 'react';
import { Mutation, MutationResult } from 'react-apollo';

import { CHECK_FOR_EXISTING_PERSON_BY_BSN } from '../../../shared/Mutations';
import { isValidBSN } from '../../../shared/validation/Bsn';

import { Alert, Button, Col, Row } from '@erkenningen/ui';

import FormCalendar from '../../../components/ui/FormCalendar';
import FormStep from '../../../components/ui/FormStep';
import FormText from '../../../components/ui/FormText';

import { LicenseSteps } from '../../../shared/Model';

interface IBsnState {
  isValid: boolean;
}

class BSN extends FormStep<IBsnState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isValid: false,
    };

    this.prevStep = this.prevStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.validate = this.validate.bind(this);
  }

  public render() {
    return (
      <Mutation mutation={CHECK_FOR_EXISTING_PERSON_BY_BSN}>
        {(
          checkForExistingPersonByBsn: (input: any) => void,
          { data, loading, error }: MutationResult,
        ) => {
          const checkForExistingPersonByBsnWrapper = () => {
            if (!this.validate()) {
              return;
            }
            checkForExistingPersonByBsn({
              variables: {
                bsn: parseInt('' + this.props.values.Persoon.BSN, 0),
                birthDate: this.props.values.Persoon.Geboortedatum,
              },
            });
          };

          // Is result is valid, then continue to next step
          if (
            data &&
            data.checkForExistingPersonByBsn &&
            !data.checkForExistingPersonByBsn.personFoundInDatabase &&
            data.checkForExistingPersonByBsn.personFoundInGba
          ) {
            // Go to next step if result is valid
            this.nextStep();
            return null;
          }

          return (
            <>
              <Row>
                <Col>
                  <Alert type="info">
                    Voor correcte adressering en administratie is uw BSN nummer vereist. De licentie
                    wordt uitgegeven in opdracht van de rijksoverheid. Indien u geen BSN heeft neem
                    contact op met Bureau Erkenningen:{' '}
                    <a href="mailto:info@erkenningen.nl">info@erkenningen.nl</a>.
                  </Alert>
                </Col>
              </Row>
              <Row>
                <Col>
                  {error ? (
                    <Alert>
                      Ophalen van BSN gegevens mislukt. Probeer het nog een keer of neem contact op
                      met de helpdesk.
                    </Alert>
                  ) : null}
                  {data &&
                  data.checkForExistingPersonByBsn &&
                  data.checkForExistingPersonByBsn.personFoundInDatabase ? (
                    <Alert type="warning">
                      {data.checkForExistingPersonByBsn.message}
                      <br />
                      Heeft u al een account bij Bureau Erkenningen? Log dan in door{' '}
                      <a href={ERKENNINGEN_LOGIN_URL}>hier</a> te klikken.
                    </Alert>
                  ) : null}
                  {data &&
                  data.checkForExistingPersonByBsn &&
                  !data.checkForExistingPersonByBsn.personFoundInDatabase &&
                  !data.checkForExistingPersonByBsn.personFoundInGba ? (
                    <Alert type="warning">
                      De combinatie BSN en geboortedatum is niet gevonden. Controleer uw invoer.
                    </Alert>
                  ) : null}
                  <FormText
                    id="bsn"
                    label="BSN nummer"
                    placeholder="BSN nummer"
                    name="Persoon.BSN"
                    readonly={this.props.values.Persoon.IsGbaGeregistreerd}
                    form={this.props}
                    onBlur={this.validate}
                  />
                </Col>
              </Row>
              <FormCalendar
                id="birthDate"
                label="Geboortedatum"
                name="Persoon.Geboortedatum"
                readonly={this.props.values.Persoon.IsGbaGeregistreerd}
                form={this.props}
                placeholder="dd-mm-jjjj"
              />
              <FormText
                id="surname"
                label="(Achternaam)"
                placeholder="Achternaam"
                name="FormOptions.AchternaamBSN"
                readonly={this.props.values.Persoon.IsGbaGeregistreerd}
                form={this.props}
              />

              <Button
                onClick={this.prevStep}
                label="Vorige"
                icon="fa fa-chevron-left"
                iconPos="left"
              />
              <Button
                label="Volgende"
                onClick={checkForExistingPersonByBsnWrapper}
                disabled={this.props.isSubmitting || loading}
                icon={loading ? 'pi pi-spin pi-spinner' : 'fa fa-chevron-right'}
                iconPos="right"
              />
            </>
          );
        }}
      </Mutation>
    );
  }

  private validate(): boolean {
    let isValid = true;

    if (!isValidBSN(this.props.values.Persoon.BSN)) {
      this.props.setFieldError(
        'Persoon.BSN',
        'Ongeldig BSN nummer. Een BSN bestaat uit 8 of 9 cijfers.',
      );
      isValid = false;
    } else {
      this.props.setFieldError('Persoon.BSN', '');
    }

    if (!this.props.values.Persoon.Geboortedatum) {
      this.props.setFieldError('Persoon.Geboortedatum', 'Vul uw geboortedatum in');
      isValid = false;
    } else {
      this.props.setFieldError('Persoon.Geboortedatum', '');
    }

    return isValid;
  }

  private prevStep(): void {
    this.setStep(LicenseSteps.CountryCheck);
  }

  private nextStep(): void {
    this.setStep(LicenseSteps.Email);
  }
}

export default BSN;
