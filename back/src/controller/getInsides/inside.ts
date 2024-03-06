
import prisma from "../../database/prisma";
import { handleVistorsEnter } from "../../service/Vistors/fillterVistorsEnter/getVistorsEnter";
import { Request, Response } from "express";
//"Vistors_inside"


export const Vistors_Inside = async (req: Request, res: Response) => {
 
    try {
      const connect = await prisma;
      if (!connect) return res.status(400).send('erro no servidor')
      const enter = new handleVistorsEnter(connect);
      const enters = await enter.getVistorsInside();
      return res.status(400).send(enters)
    } catch (err) {
      console.log(err);
      return res.status(400).send('erro no servidor')
    }
  
};
