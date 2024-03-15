import { getVisitor } from "../../service/Vistors/getvistors/getVisitor";
import { creatAddres, creatResdents } from "../../service/user/creatUser";
import { Request, Response } from "express";

export const getVisitors= async (req: Request, res: Response) => {
    try {
    // await creatAddres()
     const visitor = await getVisitor();
      res.status(200).send(visitor)
    } catch (err) {
     res.status(200).send(err)
    }
  
};
