import { PrismaClient } from "@prisma/client";
import { visitorsType } from "../../../types/vistors";

export class CodeFilter {
   private code:number
   private prisma: PrismaClient
   private vistors:visitorsType[]=[]
   
   constructor (cod:number ,prisma: PrismaClient){
    this.code=cod
    this.prisma = prisma
    
   }

   async Handlecode(){
     try{
      const stringsFiltradas = await this.prisma.visitor.findUnique({
            where: {
             id:this.code  
            }
          })
          if(stringsFiltradas==null)return ['']
          this.vistors.push(stringsFiltradas)
          return this.vistors
    
    }catch(erro){
       console.log(erro)
       return ['']
     }
   }
  
}
  