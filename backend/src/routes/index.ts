import { FastifyInstance } from "fastify";
import { createStudentHandler } from "../controllers/createStudent";

export default async function routes(app: FastifyInstance){
  app.post('/students', createStudentHandler)
}