export interface IPersoon {
  PersoonID?: number;
  Voorletters: string;
  Tussenvoegsel: string;
  Achternaam: string;
  Geslacht: string;
  Geboortedatum?: Date;
  Nationaliteit: string;
  IsGbaGeregistreerd: boolean;
  BSN?: number;
  Contactgegevens: IContactgegevens;
}

export interface IContactgegevens {
  ContactgegevensID: number;
  Adresregel1: string;
  Adresregel2: string;
  Huisnummer: string;
  HuisnummerToevoeging: string;
  Postcode: string;
  Woonplaats: string;
  Land: string;
  Email: string;
}

export interface ICertificering {
  CertificeringID: number;
  Nummer: string;
  BeginDatum: Date;
  EindDatum: Date;
  Certificaat: ICertificaat;
  CertificeringAantekeningen: ICertificeringAantekening[];
}

export interface ICertificaat {
  CertificaatID: number;
  Naam: string;
  Code: string;
}

export interface IVoorOpleiding {
  VooropleidingID: number;
  Naam: string;
  Code: string;
  Omschrijving: string;
  Categorie: IVoorOpleidingCategorie;
}

export interface IVoorOpleidingCategorie {
  VooropleidingCategorieID: number;
  Naam: string;
}

export interface ICertificeringAantekening {
  AantekeningCode: string;
}

export interface IFormOptions {
  hasAccount: boolean;
  isLoggedIn: boolean;
  dutchResident: boolean;
  hasBsn: boolean;
  AchternaamBSN?: string;
  Certificering?: ICertificering;
  Certificaat?: ICertificaat;
  Vooropleiding?: IVoorOpleiding;
  VooropleidingCategorie?: IVoorOpleidingCategorie;
  File1?: File;
  File2?: File;
  File3?: File;
  Remarks: string;
  ExamDate?: Date;
  Approved: boolean;
  Costs: number;
}

export enum LicenseSteps {
  Login,
  CountryCheck,
  PersonalInfo,
  BSN,
  Email,
  PreEducationOption,
  ExamDate,
  Document,
  DocumentAG,
  Approval,
  Summary,
  Completion,
}
