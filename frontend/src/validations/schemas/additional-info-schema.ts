import * as yup from 'yup'

export const additionalInfoDataSchema = yup.object({
  oficina: yup
    .string()
    .oneOf(["artes", "violao", "jiu-jitsu", "nivel 1", "nivel 2", "nivel 3"], "Selecione uma oficina válida")
    .required("A oficina é obrigatória"),

  turno: yup
    .string()
    .oneOf(["matutino", "vespertino"], "Selecione um turno válido")
    .required("O turno é obrigatório"),

  moradia: yup
    .string()
    .oneOf(["propria", "alugada", "cedida"], "Selecione um tipo de moradia válido")
    .required("A moradia é obrigatória"),

  pessoasNaCasa: yup
    .string()
    .oneOf(["1", "2-3", "6-7", "8"], "Selecione uma opção válida")
    .required("Este campo é obrigatório"),

  auxilioGoverno: yup
    .string()
    .oneOf(["sim", "nao"], "Selecione Sim ou Não")
    .required("Informe se recebe auxílio do governo"),

  autorizacaoDivulgacao: yup
    .string()
    .oneOf(["sim", "nao"], "Selecione Sim ou Não")
    .required("Informe se autoriza a divulgação de fotos e atividades"),

  transportePublico: yup
    .string()
    .oneOf(["sim", "nao"], "Selecione Sim ou Não")
    .required("Informe se utiliza transporte público"),
})