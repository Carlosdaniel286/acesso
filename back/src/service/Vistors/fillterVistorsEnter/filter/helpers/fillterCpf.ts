import { PrismaClient } from "@prisma/client";


export class CpfFilter {
   private cpfStart :string
   private prisma: PrismaClient
   
   constructor (cpfStart:string ,prisma: PrismaClient){
    this.cpfStart =cpfStart
    this.prisma = prisma
   }

   async cpfStartfilter(){
     try{

        const stringsFiltradas = await this.prisma.visitor.findMany({
            where: {
              cpf: {
                startsWith: this.cpfStart
              }
            },
            select: {
              name: true ,
              cpf:true,
              id:true,
              license:true,
              user:{
                select:{
                  name:true
                }
              }
            }
          });
      return stringsFiltradas
    
    }catch(erro){
     console.log(erro)
     return []
     }
   }
  
}
  