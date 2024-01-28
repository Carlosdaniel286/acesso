import { PrismaClient } from "@prisma/client"

export class Inside {
  private  visitorId:number
  private   residentId:number
  private   idAddress:number
  private prisma :PrismaClient
    constructor(visitorId:number,residentId:number,idAddress:number,prisma :PrismaClient){
     this.visitorId =visitorId
     this.residentId =residentId
     this.prisma =prisma
     this.idAddress =idAddress
    }
 async visitorInside (){
  const inside = await this.prisma.inside.create({
    data:{
     visitorId:this.visitorId,
     residentId:this.residentId,
     idAddress:this.idAddress
      
    }
  })
  return inside
 }
 
}