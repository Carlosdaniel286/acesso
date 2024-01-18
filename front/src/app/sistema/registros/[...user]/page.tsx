// `app` directory
import { redirect } from "next/navigation"
import Mean from "./main"
import { cookies} from 'next/headers'
import dotenv from 'dotenv';
dotenv.config();
const urlBase = process.env.NEXT_PUBLIC_URL_BASE
const UrlCient = process.env.NEXT_PUBLIC_URL_CLIENT
import axios from "axios"



async function getProjects() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    if(!token) return false
    const kay = token.value
   
   const response = await axios.get(`${urlBase}/token`,{
    withCredentials:true,
    headers:{
      'cookie': `token=${kay}`
    }
  })
    const projects = response.status
    if(projects===200) return true
    
}catch(err){
 
 return true
}
  }
   
  export default async function Dashboard() {
    const projects = await getProjects()
    
   
   
    if(!projects){
     return (
      redirect(`${UrlCient}/sistema/portaria/login`)
     )
    }else{
      return(
      <>
       
         <Mean/>
       
      </>
      )
    }
    
  }