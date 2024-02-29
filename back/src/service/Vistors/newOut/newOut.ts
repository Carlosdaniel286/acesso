import { PrismaClient } from "@prisma/client"

export class Outside {
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
 async visitorOutside (){
    try{
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1
  const years = currentDate.getFullYear()
  const hours = currentDate.getHours();
  
const outside = await this.prisma.outside.create({
    data:{
     visitorId:this.visitorId,
     residentId:this.residentId,
     idAddress:this.idAddress,
     day,
     month,
     years,
     hours
    }
  })
  if(outside) return {success:true}
  return {success:false}
 }catch(err){
    return {success:false}
 }
 }
}

export type outside={
    visitorId:number,
    residentId:number,
    idAddress:number
}