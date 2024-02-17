import { PrismaClient } from "@prisma/client"
import { visitors ,ArrysAddress ,visitorAddres} from "../types/vistors" 
import { Inside } from "./insideVisitor"
  
  export class Visitor {
    private name=''
    private cpf=''
    private address:visitorAddres[] =[{
      qd:0 ,
      lt:0
    }]
    private license =''
    private idUser:number
    private prisma:PrismaClient
    private Address:ArrysAddress[]=[]
  constructor(msg:visitors, id:number,prisma:PrismaClient){
    this.name =msg.name
    this.cpf = msg.cpf
    this.address=msg.address
    this.license =msg.cnh
    this.idUser=id
    this.prisma =prisma
    
  }
  
  async setNewVisitor() {
    try{
      
      console.log(this.address)
      for (const item of this.address) {
        if (item.lt == '') return { success: false, message: 'Endereço não encontrado.' };
        if (item.qd == '') return { success: false, message: 'Endereço não encontrado.' };
      
        const Address = await this.prisma.address.findFirst({
          where: {
            lt: item.lt,
            qd: item.qd,
          },
        });
      
        console.log(Address);
      
        if (Address === null) {
          return { success: false, message: 'Endereço não encontrado.' };
        }
      
        if (Address.idResident === null) {
          return { success: false, message: 'Sem residente nesse endereço.' };
        }
      
        this.Address.push(Address);
      }
      
      if (this.Address.length === 0) {
        return { success: false, message: 'vazio' };
      }
      
        const newVisitor = await this.prisma.visitor.create({
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
     
     
      console.log( this.Address)
      for (let i = 0; i <  this.Address.length; i++) {
        const item =  this.Address[i];
        console.log('oi')
        if (!item.idResident) return { success: false };
        const inside = new Inside(newVisitor.id, item.idResident, item.id, this.prisma);
        const insides = await inside.visitorInside();
        console.log(insides);
        if (i ===  this.Address.length - 1) {
          return { success: true };
        }
      }
      
      
    //return { success: true, message:  '' };
     
    }catch(error){
      console.error('Erro ao criar visitante:', error);
      return { success: false, message: 'Falha ao criar o visitante.' };
      }
    }

    
  }