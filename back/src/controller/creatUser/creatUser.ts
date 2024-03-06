import { Request, Response } from "express";
import { User } from "../../service/user/creatUser";
import zxcvbn from "zxcvbn";
import dotenv from "dotenv";
dotenv.config();
const urlBase = process.env.BASE_URL_EXPRESS as string;

export const creatUsers = async (req: Request, res: Response) => {
  try {
    let image = "";
    const file = req.file;
    if (file) image = `${urlBase}/${file?.filename}`;

    const user = new User(req, res);
    await user.creatUser();
  } catch (err) {
    const error = err as Error;
    //res.status(400).send(error.message);
  }
};
