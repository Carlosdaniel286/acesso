import { Request, Response } from "express";
import path from "path";
import multer from 'multer'
import {  Router } from "express";
import aws from 'aws-sdk'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
export const router = Router()
import multers3 from 'multer-s3'
import { v4 as uuid } from 'uuid';



const s3 = new S3Client({
    region:'sa-east-1',
   
    credentials: {
        accessKeyId:'AKIAQ3EGRQOGTWCXT6L6',
        secretAccessKey:'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',
        
    }
});


const upload = multer({ 
   storage: multers3({
    s3,
    bucket:'imagem-bucker',
    acl:'public-read',
    metadata: function (req, file, cb) {
        cb(null, {fieldName: uuid()+file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })

});

// Rota para lidar com o upload da foto
export const handlePhoto = async (req:Request, res:Response) => {
  try {
   
      res.status(200).json('Foto enviada com sucesso!');
   
  } catch (err) {
    console.error('Erro ao lidar com a foto:', err);
    res.status(400).json('Erro ao lidar com a foto');
  }
};

router.post('/photo', upload.single('photo'), (req, res) => {
    try{
        const file = req.file;
        console.log(file)
   res.status(200).json('Foto enviada com sucesso!');
    }catch(err){
        console.log(err)
    }
});

module.exports = router;
