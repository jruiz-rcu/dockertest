import express, { json, Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

const BACKEND_URL = process.env.BACKEND_URL;
const BACKEND_PORT = process.env.BACKEND_PORT;
const ENV_TYPE = process.env.ENV_TYPE;

app.get("/", (_: Request, res: Response) => {
  res.send({ message: `Bienvenido. Estás en el ambiente de ${ENV_TYPE}` });
});

app.get("/:name", (req: Request, res: Response) => {
  const { name } = req.params;

  const randNum = Math.floor((Math.random() * 10) + 1);

  console.log(`Se hizo una solicitud al backend, el número es: ${randNum}`);
  res.send({ message: `¡Hola ${name}! Estas en el ambiente de ${ENV_TYPE} en el backend.`, number: randNum });
});

app.listen(BACKEND_PORT, () => console.log(`Escuchando en ${BACKEND_URL}:${BACKEND_PORT}`));