import * as yup from 'yup'
import { studentDataSchema } from './student-schema'
import { responsibleDataSchema } from './responsible-schema'
import { addressDataSchema } from './address-schema'
import { additionalInfoDataSchema } from './additional-info-schema'

export const registrationFormSchema = yup.object({
  student: studentDataSchema,
  // guardian: responsibleDataSchema,
  // address: addressDataSchema,
  // additionalInfo: additionalInfoDataSchema
});

