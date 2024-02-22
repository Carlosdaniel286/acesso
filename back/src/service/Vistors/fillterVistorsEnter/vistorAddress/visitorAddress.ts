import prisma from "../../../../database/prisma"




//'inside'

export const handleVistorsAddress = async(id:number)=>{
    const conncet = await prisma
    if(!conncet) return
    const inside = await conncet.inside.findMany({
        where:{
          visitorId:id
        },
        select:{
            Address:{
               select:{
                lt:true,
                qd:true
               } 
            },
            visitorId:true,
            residentId:true,
            createdAt:true,
            day:true,
            years:true,
            month:true
        },
       
    })

    return inside
}