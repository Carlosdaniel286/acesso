import {  Request,Response } from "express";
import { Visitor } from "../service/creatvisitor";
import { Residents } from "../service/creatResident";
type visitor={
      qd:string,
      lt:string
}
const resident = new Residents()
export const Visitors = async (req:Request, res:Response)=>{
    try{
      console.log(JSON.stringify(req.body))
      const name = req.body.name as string
      const address = req.body.address as visitor
      const lt = Number(address.lt) 
      const qd = Number(address.qd) 
      const cpf = req.body.cpf
      const {cnh, idResident,idUser} = req.body 
      const cpfWithoutDots = cpf.replace(/\D/g, '');
      const visitor = new Visitor(
        name,
        cpfWithoutDots ,
        {qd,lt},
        cnh, 
        idResident, 
        idUser
      
        )
        
      // await resident.setNewResident()
      await visitor.setNewVisitor()
      
      res.send('certo')
    
    
    }catch(err){
      const error = err as Error;
      res.status(400).send(error.message)
  };
  
  }