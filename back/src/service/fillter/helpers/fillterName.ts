import { PrismaClient } from "@prisma/client";

export class NameFilter {
   private nameStart:string
   private prisma: PrismaClient
   
   constructor (NameStart:string ,prisma: PrismaClient){
    this.nameStart =NameStart
    this.prisma = prisma
   }

   async nameStartfilter(){
     try{

        const stringsFiltradas = await this.prisma.visitor.findMany({
            where: {
              name: {
                startsWith: this.nameStart
              }
            }
          });
      return stringsFiltradas
    
    }catch(erro){
     console.log(erro)
     return ['']
     }
   }
  
}
  