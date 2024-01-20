import { PrismaClient } from "@prisma/client"

export class Inside {
  private  visitorId:number
  private   residentId:number
  private prisma :PrismaClient
    constructor(visitorId:number,residentId:number ,prisma :PrismaClient){
     this.visitorId =visitorId
     this.residentId =residentId
     this.prisma =prisma
    }
 async visitorInside (){
  const inside = await this.prisma.inside.create({
    data:{
     visitorId:this.visitorId,
     residentId:this.residentId   
    }
  })
  return inside
 }
 
}