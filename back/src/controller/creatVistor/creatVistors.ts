import { Server, Socket } from "socket.io";
import { Visitor } from "../../service/Vistors/creatVistors/creatvisitor";
import { VisitorInfo } from "../../types/vistors";
import { getVisitor } from "../../service/Vistors/getvistors/getVisitor";
import prisma from "../../database/prisma";
import dotenv from 'dotenv'
import { Request, Response } from "express";
import {upload} from '../../middleware/multer/handlerPhoto'
dotenv.config()
const urlBase = process.env.BASE_URL_EXPRESS as string


export const handleCreateVisitor = async (req: Request, res: Response) => {
 
  try {
   
      const connect = await prisma;
     
      if (!connect) return res.status(400).send('deu errado');
     
     const userId = Number(req.headers.user as string)
     const creatVistors = new Visitor(req,res, userId, connect);
     await creatVistors.setNewVisitor();
    
      } catch (error) {
       return res.status(400).send('erro');
      }
  
};
