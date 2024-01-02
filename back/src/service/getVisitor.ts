import prisma from "../database/prisma"
import { MeuErro } from "./login"

export const getVisitor= async()=>{
    try{
        const allUsers = await prisma.visitor.findMany({
            select: {
              name: true ,
              cpf:true,
              id:true
            }
          })
          console.log(allUsers)
          const usersWithStrings = allUsers.map(user => ({
            ...user,
            cpf: Number(user.cpf.toString())
        }));
      return usersWithStrings
  }catch(err){
    throw new MeuErro('sem usuarios')
    }
}