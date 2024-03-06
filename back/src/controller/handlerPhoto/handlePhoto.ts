import { Request, Response } from "express";
import path from "path";
import multer from 'multer'
import { v4 as uuid } from 'uuid';
import dotenv from 'dotenv'
dotenv.config()
const urlBase = process.env.BASE_URL_EXPRESS as string


// Rota para lidar com o upload da foto
export const handlePhoto = async (req:Request, res:Response) => {
  try{
    const file = req.file;
    const image = `${urlBase}/${file?.filename}`
    console.log(image)
    
    if(!file) return  res.status(400).json('erro na requisiação');
  //  console.log(file)
        res.status(200).json('Foto enviada com sucesso!');
}catch(err){
    console.log(err)
}
};




