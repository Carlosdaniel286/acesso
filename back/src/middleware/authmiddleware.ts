import { NextFunction,Request,Response } from "express";
import { MeuErro } from "../service/login";
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { meuCache } from "../service/login";
dotenv.config();

import { Token ,Id } from "../types/middleware";


export async function  authMiddleware ( req:Request, res: Response, next: NextFunction){
  try{
      const cookies =req.headers.cookie
     
      
      if(!cookies) return res.status(400).send('sem cookies')
      
      const auth = cookies.includes('token=')
      if(!auth) return res.status(400).send('sem token ou token corrompido')
      const token = cookies.split('=')[1]
     
      const secretKey = process.env.SECRET_KEY as string;
      const verique = jwt.verify(token, secretKey) as Token
      const valor = await meuCache.get(token) as Id
      
      //if(!valor) return res.status(400).send('o servidor caiu')
      //if(valor.id!==verique.userId) return res.status(400).send('usuario invalido')
      
      req.headers['user']=verique.userId.toString()
      req.headers['name']=verique.name
      
      next();
  }catch(err){
    
    if(err instanceof JsonWebTokenError){
        return res.status(400).send('token invalido')
     
    }
    
    const error= err as Error
    res.status(400).send(error.message)
    }
    
}