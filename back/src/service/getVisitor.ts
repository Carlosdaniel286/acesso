import prisma from "../database/prisma"
import { MeuErro } from "./login"

export const getVisitor= async()=>{
    try{
        const allUsers = await prisma.visitor.findMany({
            select: {
              name: true ,
              cpf:true,
              id:true,
              User:{
                select:{
                  name:true
                }
              }
            }
          })
          
          
      return allUsers
  }catch(err){
    throw new MeuErro('sem usuarios')
    }
}