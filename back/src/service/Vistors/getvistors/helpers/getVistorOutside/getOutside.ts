import { PrismaClient } from "@prisma/client";



export const getVisitorsOutside= async(prisma:PrismaClient)=>{
    try{
    const visitorsInOutside = await prisma.visitor.findMany({
        where: {
          outside: {
            some: {} // Garante que exista pelo menos um objeto inside associado
          }
        },
        include: {
          outside: {
            select: {
              id: true,
              createdAt: true,
              
            },
            orderBy: {
              createdAt: 'desc' // Ordena por createdAt em ordem decrescente
            },
            take: 1 // Seleciona apenas o último inside
          },
          User:{
            select:{
              name:true
            },
          }
        },
        distinct: ['id'] // Garante que os resultados sejam distintos pelo ID do visitante
      });
     return visitorsInOutside
    }catch(err){
        console.log(err)
        return[]
        
    }
}
