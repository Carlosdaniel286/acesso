import {  Request,Response } from "express";
import { Login} from "../service/login";
  

export const signIn = async (req:Request, res:Response)=>{
    try{
      
      const login = new Login(req)
      await login.authenticateUser(res)
      
     }catch(err){
      const error = err as Error;
      res.status(400).json(error.message)
      }
  };

  




  //"carlosdaniiel286@gmail.com"
  

