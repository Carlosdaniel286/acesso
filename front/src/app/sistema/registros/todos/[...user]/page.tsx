/* eslint-disable react-hooks/rules-of-hooks */
// `app` directory
import { redirect } from "next/navigation"
import Scroll from "../../components/scroll/sroll";
import { cookies} from 'next/headers'
import dotenv from 'dotenv';
import { AxiosError } from "axios";
//import { ConnectSoket } from "../../context/socket";
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
    console.log(projects)
    if(projects===200) return true
    
}catch(err){
 if(err instanceof AxiosError){
  //alert(err.response?.data)
  return false
 }
 
}
  }
   
  export default async function Dashboard() {
    const projects = await getProjects()
    
 if(!projects){
 
     return (
      redirect(`${UrlCient}/portaria/login`)
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