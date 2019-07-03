import * as React from 'react';

import { Alert, Button, Col, Row } from '@erkenningen/ui';

import FormCalendar from '../../../components/ui/FormCalendar';
import FormSelectQuery from '../../../components/ui/FormSelectQuery';
import FormStep from '../../../components/ui/FormStep';
import FormText from '../../../components/ui/FormText';

import { LicenseSteps } from '../../../shared/Model';
import { COUNTRIES_QUERY, NATIONALITIES_QUERY } from '../../../shared/Queries';
import { validateField } from '../../../shared/validation/Form';

class PersonalInfo extends FormStep {
  constructor(props: any) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  public render() {
    return (
      <div>
        <Row>
          <Col>
            <Alert type="info">
              {this.props.values.FormOptions.hasAccount
                ? 'Controleer uw gegevens en corrigeer indien nodig.'
                : 'Vul uw gegevens in'}
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormText
              id="initials"
              label="Voorletters"
              placeholder="Voorletters (A.B.C.)"
              name="Persoon.Voorletters"
              readonly={this.props.values.Persoon.IsGbaGeregistreerd}
              form={this.props}
            />
            <FormText
              id="insertion"
              label="Tussenvoegsel"
              placeholder="Tussenvoegsel"
              name="Persoon.Tussenvoegsel"
              readonly={this.props.values.Persoon.IsGbaGeregistreerd}
              form={this.props}
            />
            <FormText
              id="surname"
              label="Achternaam"
              placeholder="Achternaam"
              name="Persoon.Achternaam"
              readonly={this.props.values.Persoon.IsGbaGeregistreerd}
              form={this.props}
            />
            <FormCalendar
              id="birthDate"
              label="Geboortedatum"
              name="Persoon.Geboortedatum"
              readonly={this.props.values.Persoon.IsGbaGeregistreerd}
              form={this.props}
              placeholder="dd-mm-jjjj"
            />
          </Col>
          <Col>
            <FormText
              id="street"
              label="Straatnaam"
              placeholder="Straatnaam"
              name="Persoon.Contactgegevens.Adresregel1"
              readonly={this.props.values.Persoon.IsGbaGeregistreerd}
              form={this.props}
            />
            <FormText
              id="houseNumber"
              label="Huisnummer"
              keyfilter="pint"
              placeholder="Huisnummer (cijfer)"
              name="Persoon.Contactgegevens.Huisnummer"
              readonly={this.props.values.Persoon.IsGbaGeregistreerd}
              form={this.props}
            />
            <FormText
              id="houseNumberAdd"
              label="Huisnummer toevoeging"
              keyfilter="alphanum"
              placeholder="Toevoeging"
              name="Persoon.Contactgegevens.HuisnummerToevoeging"
              readonly={this.props.values.Persoon.IsGbaGeregistreerd}
              form={this.props}
            />
            <FormText
              id="extraAddressInfo"
              label="Tweede adresregel"
              name="Persoon.Contactgegevens.Adresregel2"
              readonly={this.props.values.Persoon.IsGbaGeregistreerd}
              form={this.props}
            />
            {!this.props.values.Persoon.IsGbaGeregistreerd ? (
              <FormSelectQuery
                id="country"
                label="Land"
                query={COUNTRIES_QUERY}
                queryKey="Landen"
                name="Persoon.Contactgegevens.Land"
                readonly={this.props.values.Persoon.IsGbaGeregistreerd}
                filter={true}
                form={this.props}
              />
            ) : null}
            <FormText
              id="zipCode"
              label="Postcode"
              placeholder={
                this.props.values.Persoon.Contactgegevens.Land !== 'Nederland'
                  ? 'Postcode'
                  : '1234 AB'
              }
              name="Persoon.Contactgegevens.Postcode"
              readonly={this.props.values.Persoon.IsGbaGeregistreerd}
              form={this.props}
            />
            <FormText
              id="city"
              label="Woonplaats"
              placeholder="Woonplaats"
              name="Persoon.Contactgegevens.Woonplaats"
              readonly={this.props.values.Persoon.IsGbaGeregistreerd}
              form={this.props}
            />
            {!this.props.values.Persoon.IsGbaGeregistreerd ? (
              <FormSelectQuery
                id="nationality"
                label="Nationaliteit"
                query={NATIONALITIES_QUERY}
                queryKey="Nationaliteiten"
                name="Persoon.Nationaliteit"
                readonly={this.props.values.Persoon.IsGbaGeregistreerd}
                filter={true}
                form={this.props}
              />
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col>
            <p>U maakt uw aanvraag pas verderop definitief.</p>
            <Button
              onClick={this.prevStep}
              label="Vorige"
              icon="fa fa-chevron-left"
              iconPos="left"
            />
            <Button
              onClick={this.onSubmit}
              label="Volgende"
              icon="fa fa-chevron-right"
              iconPos="right"
            />
          </Col>
        </Row>
      </div>
    );
  }

  private onSubmit() {
    if (this.validate()) {
      this.nextStep();
    }
  }

  private validate(): boolean {
    let isValid = true;

    isValid = validateField(this.props, 'Persoon.Voorletters') && isValid;
    isValid = validateField(this.props, 'Persoon.Achternaam') && isValid;
    isValid = validateField(this.props, 'Persoon.Geboortedatum') && isValid;
    isValid = validateField(this.props, 'Persoon.Contactgegevens.Adresregel1') && isValid;
    isValid = validateField(this.props, 'Persoon.Contactgegevens.Huisnummer') && isValid;
    isValid = validateField(this.props, 'Persoon.Contactgegevens.Postcode') && isValid;
    isValid = validateField(this.props, 'Persoon.Contactgegevens.Woonplaats') && isValid;

    return isValid;
  }

  private prevStep() {
    this.setStep(LicenseSteps.CountryCheck);
  }

  private nextStep() {
    this.setStep(LicenseSteps.Email);
  }
}

export default PersonalInfo;
