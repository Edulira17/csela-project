import * as yup from 'yup'

export const additionalInfoSchema = yup.object({
  oficina: yup.string().oneOf(["artes", "violao", "jiu-jitsu", "nivel 1", "nivel 2", "nivel 3"]).required(),
  turno: yup.string().oneOf(["matutino", "vespertino"]).required(),
  moradia: yup.string().oneOf(["propria", "alugada", "cedida"]).required(),
  pessoasNaCasa: yup.string().oneOf(["1", "2-3", "6-7", "8+"]).required(),
  auxilioGoverno: yup.string().oneOf(["sim", "nao"]).required(),
  autorizacaoDivulgacao: yup.string().oneOf(["sim", "nao"]).required(),
  transportePublico: yup.string().oneOf(["sim", "nao"]).required(),
})