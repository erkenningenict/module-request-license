import gql from 'graphql-tag';

export const COUNTRIES_QUERY = gql`
  {
    Landen {
      Text
      Value
    }
  }
`;

export const NATIONALITIES_QUERY = gql`
  {
    Nationaliteiten {
      Text
      Value
    }
  }
`;

export const CERTIFICATES_QUERY = gql`
  {
    Certificaten {
      CertificaatID
      Naam
      Code
    }
  }
`;

export const PRE_EDUCATION_CATEGORIES_QUERY = gql`
  {
    preEducationCategories {
      VooropleidingCategorieID
      Naam
    }
  }
`;

export const PRE_EDUCATIONS_QUERY = gql`
  {
    Vooropleidingen(codes: []) {
      VooropleidingID
      Code
      Naam
      Omschrijving
      Categorie {
        VooropleidingCategorieID
        Naam
      }
    }
  }
`;

export const CERTS_BY_PRE_EDUCATION_QUERY = gql`
  query CertificatesByPreEducation($code: String!) {
    certificatesByPreEducation(code: $code) {
      CertificaatID
      Code
      Naam
    }
  }
`;

export const MY_PERSON_QUERY = gql`
  {
    my {
      Persoon {
        PersoonID
        Voorletters
        Tussenvoegsel
        Achternaam
        Geslacht
        Nationaliteit
        Geboortedatum
        IsGbaGeregistreerd
        BSN
        Contactgegevens {
          ContactgegevensID
          Adresregel1
          Adresregel2
          Huisnummer
          HuisnummerToevoeging
          Postcode
          Woonplaats
          Land
          Email
        }
      }
      Certificeringen(alleenGeldig: true) {
        CertificeringID
        Nummer
        BeginDatum
        EindDatum
        Certificaat {
          Naam
          Code
        }
        CertificeringAantekeningen {
          AantekeningCode
        }
      }
    }
  }
`;

export const CERTIFICATE_PRICE_QUERY = gql`
  {
    tariefByCertificaatCode(certificaatCode: "AG", individueleAanvraag: true) {
      TotaalExtBtw
    }
  }
`;

export interface ICertificatePriceQueryResult {
  tariefByCertificaatCode: { TotaalExtBtw: number };
}
