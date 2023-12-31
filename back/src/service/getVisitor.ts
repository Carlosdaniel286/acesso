import prisma from "../database/prisma"
import { MeuErro } from "./login"

export const getVisitor= async()=>{
    try{
        const allUsers = await prisma.user.findMany({
            select: {
              name: true // substitua 'nome' pelo nome do campo que contém o nome do usuário
            }
          })
      return allUsers
  }catch(err){
    throw new MeuErro('sem usuarios')
    }
}