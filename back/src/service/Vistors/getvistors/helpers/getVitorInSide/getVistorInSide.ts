import { PrismaClient } from "@prisma/client";

export const getVistorInside =async(prisma:PrismaClient)=>{
    const visitorsInInside = await prisma.visitor.findMany({
        where: { inside: {some: {} }
        // Garante que exista pelo menos um objeto inside associado
          },include: {inside: {
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
            }
          }
        },
        distinct: ['id'] // Garante que os resultados sejam distintos pelo ID do visitante
      });
      return visitorsInInside
}