import prisma from "../database/prisma"



  

export class Residents {
   
async setNewResident() {
   
    try{
       const connect = await prisma
       if(!connect) return
     const newAddr= await connect?.address.findFirst({
            where:{
                lt:1,
                qd:2
            }
          })


       const newResident = await connect.resident.create({
            data:{
              name: 'carlos',
              cpf: '000',
              address:{
                  connect: {
                  id: newAddr?.id, // Utiliza o ID do endereço criado anteriormente
                }
              },
              license: null ,
              idUser: 2,
            } 
  
          })
   
        
    
   
       
        
        
    
    }catch(error){
    console.log(error)
    }
   }
  
  
  
  

}