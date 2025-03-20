import * as yup from 'yup'

export const responsibleSchema = yup.object({
  name: yup
    .string()
    .required()
    .min(3, "O nome deve ter pelo menos 3 caracteres"),
  cpf: yup
    .string()
    .matches(/^\d{11}$/, "O CPF deve conter 11 dígitos numéricos")
    .required("O CPF é obrigatório"),
  rg: yup
    .string()
    .matches(/^\d+$/, "O RG deve conter apenas números").required("O RG é obrigatório"),
  telefone: yup
    .string()
    .matches(/^\d{10,11}$/, "Digite um número de telefone válido com DDD")
    .required("O número de telefone é obrigatório"),
  email: yup
    .string()
    .email("Email inválido")
    .required("O e-mail é obrigatório")
})