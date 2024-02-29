import { PrismaClient } from "@prisma/client";

export const dateInSide =async(visitorId:number,prisma:PrismaClient)=>{
    try{
    const visitorsInOutside = await prisma.visitor.findFirst({
        where: {
          inside: {
            some: {
                visitorId
            } // Garante que exista pelo menos um objeto inside associado
          }
        },
        select: {
          inside: {
            select: {
              id: true,
              createdAt: true,
              },
            orderBy: {
              createdAt: 'desc' // Ordena por createdAt em ordem decrescente
            },
            take: 1 // Seleciona apenas o último inside
          },
          
        },
        distinct: ['id'] // Garante que os resultados sejam distintos pelo ID do visitante
      });
      
      if(visitorsInOutside===null) return false
      return visitorsInOutside.inside[0].createdAt
    }catch(err){
        return false
    }
}