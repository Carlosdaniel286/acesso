//'inside'

import { handleVistorsAddress } from "../../service/Vistors/fillterVistorsEnter/vistorAddress/visitorAddress";
import { Request, Response } from "express";
export const getVistorsAddress = async (req: Request, res: Response) => {
   try {
    const id = Number(req.params.id as string)
      const address = await handleVistorsAddress(id)
      return res.status(200).send(address)
     
    } catch (err) {
      return res.status(400).send(err)
    }
  
};
