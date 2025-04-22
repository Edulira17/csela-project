import { FastifyInstance } from "fastify";
import { createStudentHandler } from "../controllers/create-student";

export default async function routes(app: FastifyInstance){
  app.post('/students', createStudentHandler)
}