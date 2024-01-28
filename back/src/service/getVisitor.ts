import prisma from "../database/prisma"
import { MeuErro } from "./login"

export const getVisitor= async()=>{
    try{
        const allUsers = await prisma.visitor.findMany({
            select: {
              name: true ,
              cpf:true,
              id:true,
              license:true,
              inside:{
               select:{
                Address:{
                  select:{
                    qd:true,
                    lt:true
                  }
                },
                resident:true,
                residentId:true
                
               },
               
              },
              
             User:{
                select:{
                  name:true
                }
              }
            }
          })
          
          console.log(allUsers)
      return allUsers
  }catch(err){
    throw new MeuErro('sem usuarios')
    }
}