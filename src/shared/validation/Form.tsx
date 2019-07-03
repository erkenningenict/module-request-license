import { FormikProps } from 'formik';
import { default as moment } from 'moment';
import * as Yup from 'yup';

import ILicenseFormValues from '../../features/LicenseForm/ILicenseFormValues';

// Validation schema
const dateNow = new Date();
const MessageRequired = 'Dit is een verplicht veld';
// const MessageEmail = "Ongeldig e-mailadres";
const ValidationSchema = Yup.object().shape({
  Persoon: Yup.object().shape({
    Voorletters: Yup.string()
      .required(MessageRequired)
      .matches(
        /^(([A-Z]|Adr|Chr|Fr|Fred|IJ|Jac|Joh|Ph|St|Th|Tj)(\.){1}?){1,5}$/,
        'Voorletters zijn geformatteerd volgens hoofdletters en punten: "A.B.C.D.E.", tenzij Adr.',
      ),
    Achternaam: Yup.string().required(MessageRequired),
    Geboortedatum: Yup.date()
      .strict(true)
      .typeError('Ongeldige datum')
      .required(MessageRequired)
      .min(
        new Date(dateNow.getFullYear() - 100, dateNow.getMonth(), dateNow.getDate()),
        'Geboortedatum mag niet meer dan 100 jaar in het verleden liggen',
      )
      .max(
        new Date(dateNow.getFullYear() - 18, dateNow.getMonth(), dateNow.getDate()),
        'Geboortedatum moet meer dan 18 jaar in het verleden liggen',
      ),
    Contactgegevens: Yup.object().shape({
      Adresregel1: Yup.string().required(MessageRequired),
      Huisnummer: Yup.number()
        .transform((n) => (isNaN(n) ? undefined : n))
        .required(MessageRequired)
        .integer('Huisnummer moet een getal zijn')
        .positive('Huisnummer mag niet negatief zijn')
        .min(1, 'Huisnummer moet groter dan 0 zijn'),
      Postcode: Yup.string()
        .required(MessageRequired)
        .when('Land', {
          is: 'Nederland',
          then: Yup.string().matches(
            /^[1-9][0-9]{3}[\s][A-Z]{2}$/,
            'Nederlandse postcode moet geformatteerd zijn als "1234 AB". Buitenlandse postcode? Wijzig eerst het land.',
          ),
        }),
      Woonplaats: Yup.string().required(MessageRequired),
      Land: Yup.string().required(MessageRequired),
      Email: Yup.string()
        .required(MessageRequired)
        .email('E-mailadres is incorrect'),
    }),
  }),
  FormOptions: Yup.object().shape({
    ExamDate: Yup.date()
      .strict(true)
      .typeError('Ongeldige datum')
      .required(MessageRequired)
      .min(
        moment()
          .subtract(5, 'years')
          .toDate(),
        'Datum mag maximaal 5 jaar in het verleden liggen',
      )
      .max(new Date(), 'Datum mag niet in de toekomst liggen')
      .when('Vooropleiding.Code', {
        is: '30.02', // Adviseren Gewasbeschermin g HBO Certificaat
        then: Yup.date()
          .strict(true)
          .min(new Date(2019, 0, 1), 'Datum mag niet voor 1 januari 2019 liggen'),
      }),
    VooropleidingCategorie: Yup.string().required('Selecteer een opleidingsland'),
    Vooropleiding: Yup.string().required('Selecteer een vooropleiding'),
    Certificaat: Yup.string().required('Selecteer een certificering'),
  }),
});

export function validateField(
  form: FormikProps<ILicenseFormValues>,
  field: string,
  value: any = null,
): boolean {
  try {
    if (value) {
      Yup.reach(ValidationSchema, field).validateSync(value);
    } else {
      ValidationSchema.validateSyncAt(field, form.values as any);
    }
    form.setFieldError(field, '');
    return true;
  } catch (validationError) {
    if (validationError.errors) {
      form.setFieldError(field, validationError.errors[0]);
    }
  }
  return false;
}

export default ValidationSchema;
