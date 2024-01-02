import prisma from "../database/prisma"
 
     
  

type visitor={
       qd:number,
        lt:number
    

}
export class Visitor {
    private name=''
    private idResident:number
    private cpf:number=1
    private address ={
      qd:0,
      lt:0
    }
    private license =''
    private idUser:number
    
  constructor(name:string,cpf:number,address:visitor,license:string,idResident:number,idUser:number){
    this.name =name
    this.cpf = cpf
    this.address=address
    this.license =license
    this.idResident =idResident
    this.idUser=idUser
  }
   
  async setNewVisitor() {
    try{
      const Address= await prisma.address.findFirst({
        where:{
            lt:this.address.lt,
            qd:this.address.qd,
            
        },
        
        
      })

      console.log(Address)

      if(Address ===null) return
      if(Address.idResident ===null) return
       
     const newVisitor = await prisma.visitor.create({
        data: {
          name: this.name,
          cpf:this.cpf,
          Address:{
            connect: {
            id: Address?.id, // Utiliza o ID do endereço criado anteriormente
          }
        },
          license: this.license ,
          idResident: Address?.idResident ,
          User: {
            connect: { 
              id:this.idUser
            },  // Você precisa fornecer um idUser válido aqui
          },
        },
        
      });
      const ResidentVisitor = await prisma.residentVisitor.create({
        data:{
         visitorId:newVisitor.id,
         residentId:newVisitor.idResident
        }
     })
       
      console.log(newVisitor)
    }catch(error){
    console.log(error)
    }
  }
  
  

}