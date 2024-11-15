import express, { json, Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

app.get("/", (_: Request, res: Response) => {
  res.send({ message: "Bienvenido..." });
});

app.get("/:name", (req: Request, res: Response) => {
  const { name } = req.params;

  res.send({ message: `Hola ${name}!` });
});

app.listen(3000, () => console.log("Escuchando en el puerto 3000"));