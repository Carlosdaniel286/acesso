import { DataFilter } from "../../service/Vistors/fillterVistorsEnter/filter/main";
import { Datafilter } from "../../types/fillter";
import prisma from "../../database/prisma";
import { Request, Response } from "express";

export const fillterVistors = async (req: Request, res: Response) => {
  try {
      const conect = await prisma;
      if (!conect) return res.status(400).send('erro na conexão')
      const fillter = req.body as Datafilter
      const dataFilter = new DataFilter(fillter, conect);
      const fillters = await dataFilter.HandleDataFilter();
     return res.status(200).send(fillters)
    } catch (err) {
      return res.status(400).send(err)
    }
  
};
