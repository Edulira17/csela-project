import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import routes from './routes/create-student.route'


const app = Fastify();
const prisma = new PrismaClient();

app.register(routes, {prefix: '/api'})

app.listen({port: 3333}, (err, address) => {
  if(err){
    console.error(err);
    process.exit(1);
  }

  console.log(`Server is running at ${address}`)
})

