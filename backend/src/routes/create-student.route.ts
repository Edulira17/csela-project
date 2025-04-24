import { FastifyInstance } from "fastify";
import { createStudentHandler } from "../controllers/StudentController";

export default async function routes(app: FastifyInstance){
  app.post('/students', createStudentHandler)
}