/* eslint-disable react-hooks/rules-of-hooks */
// `app` directory
import { redirect } from "next/navigation"
import Scroll from "../../components/scroll/sroll";
import { cookies} from 'next/headers'
import dotenv from 'dotenv';
import { AxiosError } from "axios";
dotenv.config();
const urlBase = process.env.NEXT_PUBLIC_URL_BASE
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
    return false
}catch(err){
 if(err instanceof AxiosError){
    console.log(err.message)
    return false
    }
    return false
}
  }
   
  export default async function Dashboard() {
    const projects = await getProjects()
    
 if(!projects){
 
     return (
      redirect(`/`)
     )
    }else{
     
    return(
       
      <>
       <Scroll
        DiplayInfo={'default'}
       />
      </>
      )
    }
    
  }