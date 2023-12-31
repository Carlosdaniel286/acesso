import {  Request,Response } from "express";
import { getVisitor } from "../service/getVisitor";


export const getVisitors = async (req:Request, res:Response)=>{
    try{
     const visitor = await getVisitor()
      res.status(200).send(visitor)
    
    }catch(err){
      const error = err as Error;
      res.status(200).send(error.message)
  };
  
  }