import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import NodeCache from 'node-cache';
import { Response ,Request } from 'express';
import { PrismaClient } from '@prisma/client';
//import { PrismaClientValidationError } from '@prisma/client/runtime/library';
dotenv.config();


 export const meuCache = new NodeCache();


export class Login {
    private cpf:string
    private password:string=''
    private prisma :PrismaClient

 constructor(req:Request,prisma :PrismaClient){
      this.cpf = req.body.cpf
      this.password = req.body.password
      this.prisma =prisma
     
    }

    async generateToken(userId:string,name:string){
        try{
            const secretKey = process.env.SECRET_KEY as string;
            const expiresIn = '24h'; // Pode ajustar o tempo de expiração
            const token = jwt.sign({ userId,name }, secretKey, { expiresIn });
            return token;
        }catch(err){
            console.log(err)
            return false
        }
    }

    async authenticateUser (res:Response){
       
        try{
        
        if(typeof this.password!=='string') res.status(400).send('erro de tipo, senha deve conter caracters')

        const user = await this.prisma.user.findFirst({ where: { cpf:this.cpf} })
        
        if(!user) return res.status(400).send('Esse Usuário Não Existe!')
        const authenticated =  await bcrypt.compare(this.password, user.password)
        
        if(!authenticated) return res.status(400).send('senha incorreta')
         
        const token = await this.generateToken(user.id.toString(),user.name)
        
         if(!token)  return res.status(400).send('erro na geraçao de token')
         const indtifqueUser ={id:user.id.toString()}

         meuCache.set(token, indtifqueUser, 2 * 60 * 60);
         console.log(this.password)
         res.setHeader('token',`${token}`).setHeader('name',user.name).status(200).send('login bem sucessedido')
    
    }catch(err){
       
       
            
        if( err instanceof Error){
            const error = err as Error;
            console.log(error)
            return res.status(400).send(error.message)
            }

            return res.status(400).send('erro inseperado')

    }
}
}
