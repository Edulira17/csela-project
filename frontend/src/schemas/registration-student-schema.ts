import { z } from 'zod'

export const studentInfo = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  naturalidade: z.string().min(3, "A naturalidade deve ter no mínimo 3 caracteres"),
  idade: z
    .string()
    .regex(/^\d+$/, "A idade deve conter apenas números")
    .refine((val) => Number(val) > 0 && Number(val) < 120, {
      message: "Idade deve ser um número entre 1 e 120",
    }),
  dataNascimento: z
    .string()
    .date()
})
