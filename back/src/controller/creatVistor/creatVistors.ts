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
    console.log('im')
      const connect = await prisma;
      const  photo  = req.body as Express.Multer.File
      
      console.log(photo)
      if (!connect) return res.status(400).send('deu errado');
      const file = req.file
      if(file==undefined)return res.status(400).send('deu errado');
      console.log(file)
      const newVisitor = req.body as VisitorInfo
      const userId = Number(req.headers.user as string)
      const creatVistors = new Visitor(newVisitor, userId, connect);
      const response = await creatVistors.setNewVisitor();

     if (!response.success) {
        return res.status(400).send(response);
      }else{
        return res.status(200).send(response.message);
      }
      } catch (error) {
       return res.status(400).send('erro');
      }
  
};
