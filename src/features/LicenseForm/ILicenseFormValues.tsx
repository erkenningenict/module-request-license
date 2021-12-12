import { Certificering, Persoon } from '../../generated/graphql';
import { IFormOptions, LicenseSteps } from '../../shared/Model';

export default interface ILicenseFormValues {
  Persoon: Persoon;
  Certificeringen: Certificering[];
  FormOptions: IFormOptions;
  licenseRequestResult?: {
    VrijstellingsVerzoekID: number;
    invoiceLink: string;
    requestFormPdfLink: string;
  };
  onStep: (step: LicenseSteps) => void;
}
