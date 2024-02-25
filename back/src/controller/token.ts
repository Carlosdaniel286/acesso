import { Request, Response } from "express";
import { Login } from "../service/user/login";

export const Token = async (req: Request, res: Response) => {
  try {
   const name = req.headers.name as string
    res.status(200).send(name);
  } catch (err) {
    const error = err as Error;
    res.status(400).json(error.message);
  }
};

//"carlosdaniiel286@gmail.com"
