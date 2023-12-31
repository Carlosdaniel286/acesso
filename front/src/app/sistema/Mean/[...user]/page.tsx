// `app` directory
import { redirect } from "next/navigation"
import Mean from "./main"

async function getProjects() {
    const res = await fetch(`http://localhost:3001/getvisitors`)
    
    const projects:string= await res.json()
   
    return projects
  }
   
  export default async function Dashboard() {
    const projects = await getProjects()
    console.log(projects)
   
   return(
        <>
         <Mean/>
        </>
      )
    
  }