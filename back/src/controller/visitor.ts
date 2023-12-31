import {  Request,Response } from "express";
import { Visitor } from "../service/Setvisitor";


export const Visitors = async (req:Request, res:Response)=>{
    try{
      const name = req.headers.name as string
      const {cpf,address,license, idResident, idUser} = req.body 
      const visitor = new Visitor(
        name,
        cpf,address,
        license, 
        idResident, 
        idUser
      )
      await visitor.setNewVisitor()
      
      
      res.send('certo')
    
    
    }catch(err){
      const error = err as Error;
      res.status(400).send(error.message)
  };
  
  }