

import prisma from "../database/prisma"
import { MeuErro } from "./login"
import { format } from 'date-fns';

const dateCompare ={
  inside: '',
  outside:''
}






const Fomart =(allUsers:any[])=>{
  
  const allUsersFormatted = allUsers.map((user) => {
      
    return{
       ...user,
       outside:user.outside.map((item:any)=>{
        if(user.outside[user.outside.length-1].createdAt==item.createdAt){
            dateCompare.outside=item.createdAt
        }
        
         return{
           ...item,
           createdAt:format(new Date(item.createdAt), "MM/dd/yyyy HH:mm:ss")
         }
       }),
       inside:user.inside.map((item:any)=>{
        if(user.inside[user.inside.length-1].createdAt==item.createdAt){
          dateCompare.inside=item.createdAt
      }
         return{
           ...item,
           createdAt:format(new Date(item.createdAt), "MM/dd/yyyy HH:mm:ss")
          
         }
         
       
         
       }),
       
       controll:''
       
     }
     
   })

   return allUsersFormatted
}










export const getVisitor= async()=>{
    try{
        
      const connect = await prisma
       if(!connect) return
      const allUsers = await connect.visitor.findMany({
          
            select: {
              name: true ,
              cpf:true,
              id:true,
              license:true,
              inside:{
               select:{
                Address:{
                  select:{
                    qd:true,
                    lt:true
                  },
                  },
                resident:true,
                residentId:true,
                createdAt:true
               },
               
               
              },
              outside:{
               select:{
                createdAt:true
               }
              },
              
             User:{
                select:{
                  name:true
                }
              }
            }
          })
         
         //const allUsersFormatted = Fomart(allUsers)
          
      return allUsers
  }catch(err){
    throw new MeuErro('sem usuarios')
    }
}