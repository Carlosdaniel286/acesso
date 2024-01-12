import {  Request,Response } from "express";
import { Login} from "../service/login";
  

export const Token = async (req:Request, res:Response)=>{
    try{
      
      res.status(200).send('concluiado')
      
     }catch(err){
      const error = err as Error;
      res.status(400).json(error.message)
      }
  };

  




  //"carlosdaniiel286@gmail.com"
  