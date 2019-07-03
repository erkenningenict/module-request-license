import { ICertificering, IFormOptions, IPersoon, LicenseSteps } from '../../shared/Model';

export default interface ILicenseFormValues {
  Persoon: IPersoon;
  Certificeringen: ICertificering[];
  FormOptions: IFormOptions;
  licenseRequestResult?: {
    VrijstellingsVerzoekID: number;
    invoiceLink: string;
    requestFormPdfLink: string;
  };
  onStep: (step: LicenseSteps) => void;
}
