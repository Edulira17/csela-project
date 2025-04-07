import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { completeFormSchema } from "../schemas/registration-student-schema";

const prisma = new PrismaClient();

export async function createStudentHandler(req: FastifyRequest, reply: FastifyReply) {
  try {
    const parsed = completeFormSchema.parse(req.body)

    const estudante = await prisma.estudante.create({
      data: {
        nomeCompleto: parsed.studentInfo.nomeCompleto,
        naturalidade: parsed.studentInfo.naturalidade,
        idade: Number(parsed.studentInfo.idade),
        dataNascimento: new Date(parsed.studentInfo.dataNascimento.split('/').reverse().join('-')),
        escola: parsed.studentInfo.escola,
        serie: parsed.studentInfo.serie,
        turno: parsed.studentInfo.turno,

        responsavel: {
          create: {
            nomeResponsavel: parsed.responsibleInfo.nomeResponsavel,
            numeroContato: parsed.responsibleInfo.numeroContato,
            rg: parsed.responsibleInfo.rg,
            cpf: parsed.responsibleInfo.cpf,
          }
        },

        endereco: {
          create: {
            cep: parsed.addressInfo.cep,
            rua: parsed.addressInfo.rua,
            bairro: parsed.addressInfo.bairro,
            cidade: parsed.addressInfo.cidade,
          }
        },

        informacoesAdicionais: {
          create: {
            oficina: parsed.additionalInfo.oficina,
            horario: parsed.additionalInfo.horario,
            moradia: parsed.additionalInfo.moradia,
            auxilio: parsed.additionalInfo.auxilio === "sim",
            transporte: parsed.additionalInfo.transporte === "sim",
            moradores: parsed.additionalInfo.moradores,
            divulgacao: parsed.additionalInfo.divulgacao === "sim",
          }
        }
      }
    });

    return reply.code(201).send({ message: 'Estudante cadastrado com sucesso' })
  } catch (error) {
    console.error(error)
    return reply.status(400).send({ error: 'Erro ao cadastrar estudante', details: error })
  }
}