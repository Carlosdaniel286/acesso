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
            address:{
               select:{
                lt:true,
                qd:true
               },
               
            },
            visitorId:true,
            residentId:true,
            createdAt:true,
            day:true,
            years:true,
            month:true
        },
       
    })
    const adds = await conncet.address.findMany({
        where:{
          qd:3,
          lt:4
        },
       select:{
        inside:{
            select:{
                visitor:{
                    select:{
                        name:true,
                        
                    },
                    
                }, 
                createdAt:true
            }
        },
        outside:{
            select:{
                visitor:{
                    select:{
                        name:true
                    }
                } 
            }
        }
       }
    })
  
    return inside
}