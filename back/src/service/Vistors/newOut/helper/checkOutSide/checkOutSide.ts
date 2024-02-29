import { PrismaClient } from "@prisma/client"
import { dateInSide } from "../../../helper/dateInSide/dateInSide"
import { dateOutSide } from "../../../helper/dateOutSide/dateOutSide"

export const checkOutSide =async(visitorId:number, prisma:PrismaClient)=>{
    try{
    let permisson = true
    const dateOutside = await dateOutSide(visitorId,prisma)
    const dateInside =  await dateInSide(visitorId,prisma)
    if(dateInside && dateOutside){
       if(dateOutside>dateInside){
          permisson =false
       }
    }
    return permisson
}catch(err){
  return false
}
}
      