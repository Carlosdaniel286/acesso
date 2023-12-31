import prisma from "../database/prisma"



  

export class Residents {
   
async setNewResident() {
   
    try{
       
     const newAddr= await prisma.address.findFirst({
            where:{
                lt:1,
                qd:2
            }
          })


       const newResident = await prisma.resident.create({
            data:{
              name: 'carlos',
              cpf: 12312421424,
              Address:{
                  connect: {
                  id: newAddr?.id, // Utiliza o ID do endereço criado anteriormente
                }
              },
              license: null ,
              idUser: 1,
            } 
  
          })
   
        const ResidentVisitor = await prisma.residentVisitor.create({
           data:{
            visitorId:null,
            residentId:newResident.id
           }
        })
    
   
       
        
        
    
    }catch(error){
    console.log(error)
    }
   }
  
  
  
  

}