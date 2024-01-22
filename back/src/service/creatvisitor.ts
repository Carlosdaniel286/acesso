import prisma from "../database/prisma"
import { visitors } from "../types/vistors" 
import { Inside } from "./insideVisitor"    
  


export class Visitor {
    private name=''
    private cpf=''
    private address ={
      qd:0,
      lt:0
    }
    private license =''
    private idUser:number
    
  constructor(msg:visitors, id:number){
    this.name =msg.name
    this.cpf = msg.cpf
    this.address=msg.address
    this.license =msg.cnh
    this.idUser=id
  }
  
  async setNewVisitor() {
    try{
      
      const Address= await prisma.address.findFirst({
        where:{
            lt:this.address.lt,
            qd:this.address.qd,
            },
      })

      if (Address === null) {
        return { success: false, message: 'Endereço não encontrado.' };
      }

      if (Address.idResident === null) {
        return { success: false, message: 'Sem residente nesse endereço.' };
      }
    const newVisitor = await prisma.visitor.create({
        data: {
          name: this.name,
          cpf:this.cpf,
          license: this.license ,
          idAddress:Address.id,
          User: {
            connect: { 
              id:this.idUser
            },  
          },
        },
      });
      const inside = new Inside(newVisitor.id,Address.idResident,prisma)
      await inside.visitorInside()
      
      return { success: true};
     
    }catch(error){
      console.error('Erro ao criar visitante:', error);
      return { success: false, message: 'Falha ao criar o visitante.' };
      }
    }

    
  }