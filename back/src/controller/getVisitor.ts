import { Request, Response } from "express";
import { getVisitor } from "../service/getVisitor";
import { reqs, reqe } from "../service/creatUser";

export const getVisitors = async (req: Request, res: Response) => {
  try {
    const visitor = await getVisitor();
    res.status(200).send(visitor);
  } catch (err) {
    console.log(err);
    const error = err as Error;

    res.status(400).send(error.message);
  }
};
