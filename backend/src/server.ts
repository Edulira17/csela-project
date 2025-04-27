import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";
import routes from "./routes/create-student.route";

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors, {
  origin: "http://localhost:5173",
  methods: ["POST", "GET"],
  allowedHeaders: ["Content-Type"],
});

app.register(routes, { prefix: "/api" });

app.get("/", () => {
  return "Server is running";
});

app.listen({ port: 3333 }).then(() => {
  console.log("Server is running");
});
