import { visitorAddres } from "../../types/vistors"
import { PrismaClient } from "@prisma/client"
import { Inside } from "../insideVisitor"
export class newEntry {
    private   visitorId:number
    private   addressResident:visitorAddres
    private   prisma:PrismaClient
   
   constructor(visitorId:number, addressResident:visitorAddres,prisma:PrismaClient){
      this.addressResident=addressResident,
      this.visitorId =visitorId
      this.prisma =prisma
    }
    
    async NewEntry(){
        try{
        if(this.addressResident.qd=='') return
        if(this.addressResident.lt=='') return
        const address = await this.prisma.address.findFirst({
            where:{
                qd:this.addressResident.qd,
                lt:this.addressResident.lt
            }
        })
        if(!address) return  
        if(!address.idResident) return 
       
        const inside = new Inside(this.visitorId,address.idResident,1,this.prisma)
        await inside.visitorInside()
    }catch(err){

    }

    }

}