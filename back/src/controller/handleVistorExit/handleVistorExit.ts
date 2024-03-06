import { Server, Socket } from "socket.io";
import { Outside, outside } from "../../service/Vistors/newOut/newOut";
import { visitorAddres } from "../../types/vistors";
import prisma from "../../database/prisma";
import { newExitVistor } from "../../service/Vistors/newOut/helper/outSide/handleOutSide";

import { Request, Response } from "express";

export const handleExitVistor = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const visitor = req.body;
    const connect = await prisma;
    if (!connect) return res.status(400).send("sem conexão");
    const newExit = new newExitVistor(visitor.visitorId, connect);
    const response = await newExit.NewExit();
    if (!response.success) return res.status(400).send(response.message);
    return res.status(200).send(response);
  } catch (error) {
    console.error("Erro ao processar visita:", error);
    return res.status(400).send("erro no servidor");
  }
};
