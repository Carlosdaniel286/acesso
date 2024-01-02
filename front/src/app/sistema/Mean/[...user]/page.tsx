// `app` directory
import { redirect } from "next/navigation"
import Mean, { project,mean } from "./main"
import axios from "axios"
async function getProjects() {
    const response = await axios(`http://localhost:3001/getvisitor/visits`)
    
    const projects = response.data
    console.log(projects)
    
    return projects
  }
   
  export default async function Dashboard() {
    const projects = await getProjects()
   console.log(projects)
   
   return(
        <>
         <Mean
          arry={projects}
         />
        </>
      )
    
  }