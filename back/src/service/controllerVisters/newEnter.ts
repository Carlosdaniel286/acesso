import { visitorAddres } from "../../types/vistors"
import { PrismaClient } from "@prisma/client"
import { Inside } from "../insideVisitor"
export class newEntry {
    private   visitorId:number
    private   addressResident:visitorAddres[]
    private   prisma:PrismaClient
   
   constructor(visitorId:number, addressResident:visitorAddres[],prisma:PrismaClient){
      this.addressResident=addressResident,
      this.visitorId =visitorId
      this.prisma =prisma
    }
    
    async NewEntry(){
        try{
            for (const item of this.addressResident) {
                if (item.lt == '') return { success: false, message: 'Endereço não encontrado.' };
                if (item.qd == '') return { success: false, message: 'Endereço não encontrado.' };
                
                const address = await this.prisma.address.findFirst({
                    where:{
                        qd:item.qd,
                        lt:item.lt
                    }
                })
                
                if(!address) return { success: false, message: 'Endereço não encontrado.' }  
                if(!address.idResident) return { success: false, message: 'Endereço não encontrado.' }  

                const inside = new Inside(this.visitorId,address.idResident,address.id,this.prisma)
                await inside.visitorInside()
            }
            return { success: true, message: 'entrada' };
       
    }catch(err){
    console.log(err)
    return { success: false, message: 'Endereço não encontrado.' };
    }

    }

}