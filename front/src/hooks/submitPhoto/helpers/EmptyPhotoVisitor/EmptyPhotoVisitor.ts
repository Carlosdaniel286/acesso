import axios from "axios";
import dotenv from 'dotenv'
import { Inputs } from "@/types/inputs";
dotenv.config()
const urlBase = process.env.NEXT_PUBLIC_URL_BASE as string

export const handleEmptyPhoto= async(inputs:Inputs)=>{
    try{
       
 const response = await axios.post(`${urlBase}/creatVisitors`,{
            name: inputs.name,
            cpf: inputs.cpf,
            cnh: inputs.cnh,
            address: inputs.address,
        },{
           withCredentials:true, 
        })

  return response
}catch(err){
    console.log(err)
    return false
}
}