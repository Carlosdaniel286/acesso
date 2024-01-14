import { Request, Response } from "express";
import { User } from "../service/creatUser";
import zxcvbn from "zxcvbn";

export const creatUsers = async (req: Request, res: Response) => {
  try {
    const user = new User(req,res);
    await user.creatUser();

   
  } catch (err) {
    const error = err as Error;
    //res.status(400).send(error.message);
  }
};
