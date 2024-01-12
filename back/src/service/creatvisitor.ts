import prisma from "../database/prisma"
import { visitors } from "../types/vistors" 
     
  


export class Visitor {
    private name=''
    private cpf=''
    private address ={
      qd:0,
      lt:0
    }
    private license =''
    private idUser:number
    
  constructor(msg:visitors){
    this.name =msg.name
    this.cpf = msg.cpf
    this.address=msg.address
    this.license =msg.license
    this.idUser=msg.idUser
  }
   
  async setNewVisitor() {
    try{
      
      const Address= await prisma.address.findFirst({
        where:{
            lt:this.address.lt,
            qd:this.address.qd,
            },
      })

      console.log(this.cpf)

      if(Address ===null) return
      if(Address.idResident ===null) return
      
      
     const newVisitor = await prisma.visitor.create({
        data: {
          name: this.name,
          cpf:this.cpf,
          Address:{
            connect: {
            id: Address.id, // Utiliza o ID do endereço criado anteriormente
          }
        },
          license: this.license ,
          idResident: Address.idResident ,
         
         User: {
            connect: { 
              id:this.idUser
            },  
          },
        },
        
      });
     const ResidentVisitor = await prisma.residentVisitor.create({
       data:{
        residentId:Address.idResident,
        visitorId:newVisitor.id,
        
       }
      });

     
      
      

      
    console.log(newVisitor)
    }catch(error){
    console.log(error)
    }
  }
  
  

}