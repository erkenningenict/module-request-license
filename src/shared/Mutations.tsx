import gql from 'graphql-tag';

export const REQUEST_LICENSE = gql`
  mutation requestLicense(
    $input: requestLicenseInput!
    $personDataInput: basicPersonData
    $createPersonByBsnInput: createPersonByBsn
    $createPersonByPersonDataInput: createPersonByPersonData
  ) {
    requestLicense(
      input: $input
      personDataInput: $personDataInput
      createPersonByBsnInput: $createPersonByBsnInput
      createPersonByPersonDataInput: $createPersonByPersonDataInput
    ) {
      VrijstellingsVerzoekID
      invoiceLink
      requestFormPdfLink
    }
  }
`;

export const CHECK_FOR_EXISTING_PERSON_BY_BSN = gql`
  mutation checkForExistingPersonByBsn($bsn: Int!, $birthDate: Date!) {
    checkForExistingPersonByBsn(bsn: $bsn, birthDate: $birthDate) {
      personFoundInDatabase
      personFoundInGba
      message
      persons {
        PersoonID
      }
    }
  }
`;
