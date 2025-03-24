import * as yup from 'yup'

export const responsibleDataSchema = yup.object({
  name: yup
    .string()
    .required("O nome do responsável é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres"),

  cpf: yup
    .string()
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "O CPF deve estar no formato 999.999.999-99")
    .required("O CPF é obrigatório"),

  rg: yup
    .string()
    .matches(/^\d{7,8}-?\d$/, "O RG deve estar no formato 9999999-9 ou 99999999-9")
    .required("O RG é obrigatório"),

  telefone: yup
    .string()
    .matches(/^\d{2}\s\d{4,5}-\d{4}$/, "Digite um telefone válido no formato 99 99999-9999")
    .required("O número de telefone é obrigatório"),

  email: yup
    .string()
    .email("Email inválido")
    .required("O e-mail é obrigatório")
})