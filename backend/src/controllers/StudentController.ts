import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { completeFormSchema } from "../schemas/registration-student-schema";
// import { sendConfirmationEmail } from "../utils/sendConfirmationEmail";

const prisma = new PrismaClient();

export async function createStudentHandler(
  req: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const parsed = completeFormSchema.parse(req.body);

    const student = await prisma.estudante.create({
      data: {
        nomeCompleto: parsed.studentInfo.nomeCompleto,
        naturalidade: parsed.studentInfo.naturalidade,
        idade: Number(parsed.studentInfo.idade),
        dataNascimento: new Date(
          parsed.studentInfo.dataNascimento.split("/").reverse().join("-")
        ),
        escola: parsed.studentInfo.escola,
        serie: parsed.studentInfo.serie,
        turno: parsed.studentInfo.turno,

        responsavel: {
          create: {
            nomeResponsavel: parsed.responsibleInfo.nomeResponsavel,
            numeroContato: parsed.responsibleInfo.numeroContato,
            email: parsed.responsibleInfo.emailResponsavel,
            rg: parsed.responsibleInfo.rg,
            cpf: parsed.responsibleInfo.cpf,
          },
        },

        endereco: {
          create: {
            cep: parsed.addressInfo.cep,
            rua: parsed.addressInfo.rua,
            bairro: parsed.addressInfo.bairro,
            cidade: parsed.addressInfo.cidade,
          },
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
          },
        },
      },
    });

    // await sendConfirmationEmail(parsed.responsibleInfo.emailResponsavel, parsed.studentInfo.nomeCompleto);

    return reply
      .status(201)
      .send({ message: "Pré-Matrícula recebida com sucesso!", student});
  } catch (error) {
    console.error(error);
    return reply
      .status(400)
      .send({ error: "Erro ao realizar o Pré-Cadastro", details: error });
  }
}
