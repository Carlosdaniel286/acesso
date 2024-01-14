import prisma from '../database/prisma';
import bcrypt from 'bcrypt';
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';
import zxcvbn from 'zxcvbn';
import {l} from './ds'
const cpf = require('gerador-validador-cpf')
import { CPF} from '@julioakira/cpf-cnpj-utils'
import { Request ,Response } from 'express';


export class User {
    private name:string =''
    private cpf:string =''
    private password:string =''
    public res :Response
    public req :Request
    
    constructor(req:Request,res:Response){
      const { name, cpf, password } = req.body;
        this.cpf =cpf
        this.name =name
        this.password =password
        this.req=req
        this.res=res

    }

    async creatUser(){
        try{
          
          
            if(typeof this.password!=='string') return this.res.status(400).send('erro de tipo, senha deve conter caracters')
             this.verifiqueCpf(this.cpf)
             this.verifiquePassword(this.password)
             const hashedPassword = await bcrypt.hash(this.password, 10);
            
             await prisma.user.create({
                data: {cpf:this.cpf, name:this.name, password:hashedPassword},
              });
            
              return this.res.status(200).send('usuario criado com sucesso')
        
            }catch(err){
        
        if(err instanceof PrismaClientKnownRequestError){
            if(err.code == 'P2002')  return this.res.status(400).send('esse cpf ja existe')
            
            return this.res.status(400).send('falha no serviço')
          } 
          
          if(err instanceof PrismaClientValidationError){
            const message = err.message.toString().split('Argument')[1]
            if(!message) return this.res.status(400).send('erro na validaçao')
            return this.res.status(400).send(message)
            }
           if( err instanceof Error){
            const error = err as Error;
            return this.res.status(400).send(error.message)
            }
    
            return this.res.status(400).send('erro inseperado')
          }
    }
    verifiquePassword(password:string){
        const result = zxcvbn(password);
        const { score } = result;
        const containsLetters = /[a-zA-Z]/.test(password);
        const containsNumbers = /\d/.test(password);
        const containsSpecialCharacters = /[!@#$%*]/.test(password);
        const isValidPassword = containsLetters && containsNumbers && containsSpecialCharacters;
        const verifque = isValidPassword && score > 2
        
        if(!verifque ) return this.res.status(400).send('senha esta faltando requistos')
       
      };
       verifiqueCpf(cpf:string){
        console.log(cpf)
        const verifiqueCpfs = CPF.Validate(cpf)
        console.log(verifiqueCpfs)
       // if(!verifiqueCpfs) return this.res.status(400).send('cpf invalido')
       
      };

}














export const reqs = async()=>{
//const address = await prisma.address.findMany({})
const string = l.replace(/<li>/g, '').replace(/<\/li>/g, ',');
  const arrys = string.split(' ').join('').split("\n")
  //const newAddr= await prisma.address.findMany({})
  
 
  
  for(let i =0;i<arrys.length;i++){
    const ls = i
    const cpfAleatorio = cpf.generate();
    const formatted = CPF.Format(cpfAleatorio);


 const newResident = await prisma.resident.create({
      data:{
        id:(ls+1),
        name: arrys[i],
        cpf: formatted,
        Address:{
            connect: {
            id: (ls+1), // Utiliza o ID do endereço criado anteriormente
          }
        },
        license: null ,
        idUser: 1,
      } 

    })

 
    
  }
  //console.log(Array(arry))
  

}


export const reqe = async()=>{
  //const address = await prisma.address.findMany({})
  let arry =[]
  for (let qd = 1; qd <= 20; qd++) {
    for (let lt = 1; lt<= 20; lt++) {
     arry.push({
      id:arry.length+1,
      qd,
      lt
     })
    
}
    }
    for (let i = 0; i <= arry.length; i++) {
      const address = await prisma.address.create({
        data:{
          id:arry[i].id,
          qd:arry[i].qd,
          lt:arry[i].lt
        }

      })

    }

}