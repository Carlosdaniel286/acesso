import {  Request,Response } from "express";
import { Login} from "../service/login";
  

export const signIn = async (req:Request, res:Response)=>{
    try{
      
      const { cpf, password} = req.body;
      const login = new Login(22222, password)
      const authenticate = await login.authenticateUser()
     // res.cookie('token', authenticate, { httpOnly: true }).json({ message: 'Autenticação bem-sucedida.' });
     console.log(authenticate)
     if(!authenticate)  res.status(400).send('error')
     res.status(200).send(authenticate)
    
     }catch(err){
      const error = err as Error;
      res.status(400).json(error.message)
      
    
       
    }
  };

  




  //"carlosdaniiel286@gmail.com"
  

