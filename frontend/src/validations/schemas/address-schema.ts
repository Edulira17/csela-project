import * as yup from 'yup'


export const addressDataSchema = yup.object({
  rua: yup
    .string()
    .required("A rua é obrigatória"),

  bairro: yup
    .string()
    .required("O bairro é obrigatório"),

  cidade: yup
    .string()
    .required("A cidade é obrigatória"),

  uf: yup
    .string()
    .length(2, "UF deve ter exatamente 2 caracteres")
    .required("A UF é obrigatória"),

  cep: yup
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .matches(/^\d{8}$/, "O CEP deve ter 8 números")
    .required("O CEP é obrigatório"),
})