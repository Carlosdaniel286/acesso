import {  Request,Response } from "express";
import { Login} from "../service/login";
import prisma from '../database/prisma';

export const signIn = async (req:Request, res:Response)=>{
    try{
      const conect = await prisma
      if(!conect) return res.status(400).json('sem conexaçao')
      const login = new Login(req, conect)
      await login.authenticateUser(res)
      
     }catch(err){
      const error = err as Error;
      res.status(400).json(error.message)
      }
  };

  




  //"carlosdaniiel286@gmail.com"
  

