import prisma from "../database/prisma"


export class Visitor {
    private name=''
    private idResident:number
    private cpf:number=1
    private address =''
    private license =''
    private idUser:number
    
  constructor(name:string,cpf:number,address:string,license:string,idResident:number,idUser:number){
    this.name =name
    this.cpf = cpf
    this.address=address
    this.license =license
    this.idResident =idResident
    this.idUser=idUser
  }
   
  async setNewVisitor() {
     
    const newVisitor = await prisma.visitor.create({
        data: {
          name: this.name,
          cpf: this.cpf,
          address: this.address,
          license: this.license ,
          idResident: this.idResident,
          User: {
            connect: { id:this.idUser},  // Você precisa fornecer um idUser válido aqui
          },
        },
        
      });
       await prisma.visit.create({
        data: {
          visitorId: newVisitor.id,
          residentId: this.idResident,
        },
      });
      console.log(newVisitor)
   }

   

}