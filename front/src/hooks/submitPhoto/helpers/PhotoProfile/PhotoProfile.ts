import axios, { AxiosResponse } from "axios";
import dotenv from 'dotenv'
import { Inputs } from "@/types/inputs";
dotenv.config()
const urlBase = process.env.NEXT_PUBLIC_URL_BASE as string

export const handleProfilePhoto = async(photo:FormData,inputs:Inputs)=>{
  try{
    const address = JSON.stringify(inputs.address)
    photo.append('name', inputs.name);
    photo.append('cpf', inputs.cpf);
    photo.append('cnh', inputs.cnh);
    photo.append('address', address);
    photo.append('phone', inputs.phone);
  
 const response:AxiosResponse = await axios.post(`${urlBase}/creatVisitors`,photo,{
       withCredentials:true, 
             headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

  return response
}catch(err){
    console.log(err)
    return false
}
}