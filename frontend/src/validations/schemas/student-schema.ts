import * as yup from 'yup'

export const studentDataSchema = yup.object({
  name: yup
    .string()
    .required("O campo nome é obrigatório!")
    .min(3, "O nome deve ter pelo menos 3 caracteres"),

  naturalidade: yup
    .string()
    .required("A naturalidade é obrigatória!")
    .min(3, "A naturalidade deve ter pelo menos 3 caracteres"),

  turno: yup
    .string()
    .oneOf(["matutino", "vespertino"], "Selecione um turno válido")
    .required("O turno é obrigatório!"),

  dataNascimento: yup
    .date()
    .typeError("Data inválida")
    .required("A data de nascimento é obrigatória")
    .max(new Date(), "A data de nascimento não pode estar no futuro"),

  idade: yup
    .number()
    .typeError("A idade deve ser um número")
    .positive("A idade deve ser positiva")
    .integer("A idade deve ser um número inteiro")
    .required("A idade é obrigatória"),

  escola: yup
    .string()
    .required("O nome da escola é obrigatório")
    .min(3, "O nome da escola deve ter pelo menos 3 caracteres"),

  serie: yup
    .string()
    .required("A série é obrigatória")
    .matches(/^\d+$/, "Digite um número válido para a série")
});

