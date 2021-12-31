import { Certificaat, Certificering, Vooropleiding } from '../generated/graphql';

export interface IFormOptions {
  hasAccount: boolean;
  isLoggedIn: boolean;
  dutchResident: boolean;
  hasBsn: boolean;
  AchternaamBSN?: string;
  Certificering?: Certificering;
  CertificaatID?: number;
  Certificaat?: Certificaat;
  VooropleidingID?: number;
  Vooropleiding?: Vooropleiding;
  VooropleidingCategorieID?: number;
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
