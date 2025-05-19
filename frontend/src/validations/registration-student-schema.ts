import { z } from 'zod'

export const studentInfo = z.object({
  nomeCompleto: z
    .string()
    .min(3, "Este campo é obrigatório"),

  naturalidade: z
    .string()
    .min(1, "Este campo é obrigatório"),

  idade: z
    .string()
    .min(1, "Este campo é obrigatório")
    .regex(/^\d+$/, "A idade deve conter apenas números")
    .refine((val) => Number(val) > 7 && Number(val) < 17, { message: "Idade deve ser um número entre 7 e 17 ", }),

  dataNascimento: z
    .string()
    .min(1, "Este campo é obrigatório")
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Formato inválido (dd/mm/aaaa)"),

  escola: z
    .string()
    .min(1, "Este campo é obrigatório"),

  serie: z
    .string()
    .min(1, "Este campo é obrigatório"),

  turno: z.enum(["matutino", "vespertino"], {
    errorMap: () => ({ message: "Selecione um turno válido" })
  })
});

export const responsibleInfo = z.object({
  nomeResponsavel: z
    .string()
    .min(3, "O nome do responsável deve ter no mínimo 3 caracteres"),

  numeroContato: z
    .string()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Número de contato inválido. Formato esperado: (99) 99999-9999"),
  rg: z
    .string()
    .regex(/^\d{7}-\d$/, "RG inválido. Formato esperado: 9999999-9"),
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido. Formato esperado: 999.999.999-99"),
});

export const addressInfo = z.object({
  cep: z
    .string()
    .regex(/^\d{5}-\d{3}$/, "CEP inválido (Ex: 99999-999)"),

  rua: z
    .string()
    .min(1, "Este campo é obrigatório"),

  bairro: z
    .string()
    .min(1, "Este campo é obrigatório"),

  cidade: z
    .string()
    .min(1, "Este campo é obrigatório"),
});

export const additionalInfo = z.object({
  oficina: z.enum(["artes", "violao", "jiujitsu", "nivel1", "nivel2", "nivel3"], {
    errorMap: () => ({ message: "Selecione uma oficina válida" })
  }),
  horario: z.enum(["matutino", "vespertino"], {
    errorMap: () => ({ message: "Selecione um horário válido" })
  }),
  moradia: z.enum(["propria", "alugada", "cedida"], {
    errorMap: () => ({ message: "Selecione um tipo de moradia válido" })
  }),
  auxilio: z.enum(["sim", "nao"], {
    errorMap: () => ({ message: "Informe se recebe auxílio do governo" })
  }),
  transporte: z.enum(["sim", "nao"], {
    errorMap: () => ({ message: "Informe se utiliza transporte público" })
  }),
  moradores: z.enum(["2-3", "4-5", "6"], {
    errorMap: () => ({ message: "Informe a quantidade de moradores na residência" })
  }),
  divulgacao: z.enum(["sim", "nao"], {
    errorMap: () => ({ message: "Informe se podemos divulgar fotos e atividades de seu filho" })
  }),
});

export const completeFormSchema = z.object({
  studentInfo: studentInfo,
  responsibleInfo: responsibleInfo,
  addressInfo: addressInfo,
  additionalInfo: additionalInfo
});

export type FormData = z.infer<typeof completeFormSchema>;



