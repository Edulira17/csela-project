import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import routes from './routes/create-student.route'


const app = Fastify();
const prisma = new PrismaClient();

app.get('/', () => {
  return "Server is running"
})

app.listen({port: 3333}).then(() => {
  console.log('Server is running')
})

