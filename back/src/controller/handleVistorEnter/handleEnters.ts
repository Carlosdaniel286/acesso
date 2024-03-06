
import { newEntry } from "../../service/Vistors/newEnter/newEnter";
import { visitorAddres } from "../../types/vistors";
import prisma from "../../database/prisma";
import { Request, Response } from "express";
export type newEnters = {
  address: visitorAddres[];
  visitorId: number;
};



export const handleEntersVisitor = async (req: Request, res: Response) => {
    try {
      const newVisitor = req.body as newEnters
      console.log(newVisitor);
      const connect = await prisma;
      if (!connect) return res.status(400).send('erro de conexão');
      const newEnter = new newEntry(
        newVisitor.visitorId,
        newVisitor.address,
        connect
      );
      const response = await newEnter.NewEntry();
      if (!response.success) res.status(400).send(response);
      return res.status(200).send(response);
    } catch (error) {
      console.error("Erro ao processar visita:", error);
      res.status(400).send(error);
    }
  
};
