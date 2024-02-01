import prisma from "../database/prisma"
import { visitors ,ArrysAddress} from "../types/vistors" 
import { Inside } from "./insideVisitor"    
  


export class Visitor {
    private name=''
    private cpf=''
    private address =[{
      qd:0,
      lt:0
    }]
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
      let address:ArrysAddress[]=[]
      
      this.address.forEach(async(item)=>{
        const Address= await prisma.address.findFirst({
          where:{
              lt:item.lt,
              qd:item.qd,
              },
        })
        
        if (Address === null) {
          return { success: false, message: 'Endereço não encontrado.' };
        }
        if (Address.idResident === null) {
          return { success: false, message: 'Sem residente nesse endereço.' };
        }
        
          address.push(Address)
        
        
  
      })
    const newVisitor = await prisma.visitor.create({
        data: {
          name: this.name,
          cpf:this.cpf,
          license: this.license ,
          User: {
            connect: { 
              id:this.idUser
            },  
          },
        },
      });
     
     
      
      for (const item of address) {
        if (!item.idResident) continue;
      
        const inside = new Inside(newVisitor.id, item.idResident, item.id, prisma);
        await inside.visitorInside();
      
        if (item === address[address.length - 1]) {
          return { success: true };
        }
      }
      
    //return { success: false, message: 'Sem residente nesse endereço.' };
     
    }catch(error){
      console.error('Erro ao criar visitante:', error);
      return { success: false, message: 'Falha ao criar o visitante.' };
      }
    }

    
  }