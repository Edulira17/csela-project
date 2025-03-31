import { z } from 'zod'

const studentInfo = z.object({
  nomeCompleto: z.string().min(3, { message: "O nome deve ter no mínimo 3 caracteres" }),
  naturalidade: z.string().min(3, { message: "A naturalidade deve ter no mínimo 3 caracteres" }),
  idade: z.string().regex(/^\d+$/, "A idade deve conter apenas números").refine((val) => Number(val) > 7 && Number(val) < 17, { message: "Idade deve ser um número entre 7 e 17 ", }),
  dataNascimento: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "Formato inválido (dd/mm/aaaa)"),
  escola: z.string().min(3, "O nome da escola deve ter no mínimo 3 caracteres"),
  serie: z.string().min(1, "A série deve ter no mínimo 1 caractere"),
  turno: z.enum(["Matutino", "Vespertino"], {
    errorMap: () => ({ message: "Selecione um turno válido" })
  })
});

const responsibleInfo = z.object({
  nomeResponsavel: z.string().min(3, "O nome do responsável deve ter no mínimo 3 caracteres"),
  numeroContato: z.string().regex(/^\d{10,11}$/, "Número inválido"),
  rg: z.string().regex(/^\d{7,14}$/, "RG inválido"),
  cpf: z.string().regex(/^\d{11}$/, "CPF inválido"),
});

const addressInfo = z.object({
  cep: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido (Ex: 12345-678)"),
  rua: z.string().min(3, "A rua deve ter no mínimo 3 caracteres"),
  bairro: z.string().min(3, "O bairro deve ter no mínimo 3 caracteres"),
  cidade: z.string().min(3, "A cidade deve ter no mínimo 3 caracteres"),
});

const additionalInfo = z.object({
  oficina: z.string().min(1, "Selecione uma opção"),
  turno: z.enum(["Matutino", "Vespertino"], {
    errorMap: () => ({ message: "Selecione um turno válido" })
  }),
  moradia: z.string().min(1, "Selecione uma opção"),
  recebeAuxilio: z.enum(["Sim", "Não"], { errorMap: () => ({ message: "Selecione Sim ou Não" }) }),
  transportePublico: z.enum(["Sim", "Não"], { errorMap: () => ({ message: "Selecione Sim ou Não" }) }),
  quantidadePessoasResidencia: z.string().regex(/^\d+$/, "Informe um número válido"),
  autorizacaoDivulgacaoImagens: z.enum(["Sim", "Não"], { errorMap: () => ({ message: "Selecione Sim ou Não" }) })
});

const completeFormSchema = z.object({
  studentInfo: studentInfo,
  responsibleInfo: responsibleInfo,
  addressInfo: addressInfo,
  additionalInfo: additionalInfo
});

export default completeFormSchema;


