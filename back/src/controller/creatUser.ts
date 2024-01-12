import {  Request,Response } from "express";
import { User} from "../service/user";
import zxcvbn from 'zxcvbn';


  export const creatUsers = async (req:Request, res:Response)=>{
    try{
     const { name, cpf, password } = req.body;
     const user= new User(name, cpf, password)

     const newUser = await user.creatUser()
     console.log(name)
     console.log(cpf)
     res.status(200).send(newUser)
    
    }catch(err){
      const error = err as Error;
      res.status(400).send(error.message)
     };

}
