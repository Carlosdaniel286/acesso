import { Request, Response } from "express";
import path from "path";
import multer from 'multer'
import { S3Client} from '@aws-sdk/client-s3';
//import d from '../../image'
import multers3 from 'multer-s3'
import { v4 as uuid } from 'uuid';
import dotenv from 'dotenv'
dotenv.config()

const accessKeyId = process.env.ACCESSKEYID as string
const secretAccessKey = process.env.SECRETACCESSKEY as string
const s3 = new S3Client({
    region:'sa-east-1',
   
    credentials: {
        accessKeyId,
        secretAccessKey
        
    }
});
const uploads = multer({ 
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

const paths = path.resolve(__dirname,'../../image')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, paths)
    },
    filename: function (req, file, cb) {
        const ext = path.extname(req.body.photo.originalname);
       
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `file-` + uniqueSuffix + ext);
    }
  })
  

  export const upload = multer({ storage: storage });

  


