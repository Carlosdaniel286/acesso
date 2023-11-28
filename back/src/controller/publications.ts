import {  Request,Response } from "express";
//import {Publication}  from "../service/acesso";

export const publication = async (req:Request, res:Response)=>{
    try{
     
    }catch(err){
      const error = err as Error;
      res.status(400).send(error.message)
  };

}



export const Feed = async (req:Request, res:Response)=>{
  try{
    
  
  
  }catch(err){
    const error = err as Error;
    res.status(400).send(error.message)
};

}