import axios, { AxiosError } from 'axios'
import Login from './portaria/login/component/login/login'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import dotenv from 'dotenv';
dotenv.config();
const urlBase = process.env.NEXT_PUBLIC_URL_BASE
const UrlCient = process.env.NEXT_PUBLIC_URL_CLIENT

export async function generateMetadata() {
   return {
     title: "login",
   };
 }


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
     const res = response.data as string
     if(projects===200) return res 
     return false
 }catch(err){
  if(err instanceof AxiosError){
   //alert(err.response?.data)
   return false
  }
  return false
  
 }
   }
    
   export default async function Dashboard() {
     const projects = await getProjects()
     
  if(!projects){
  
      return (
       <>
        <Login/>
       </>
      )
     }else{
      
     return(
      redirect(`/sistema/registros/todos/${projects}`)
        //redirect('/sistema/registros/todos/carlos')
       
       )
     }
     
   }

