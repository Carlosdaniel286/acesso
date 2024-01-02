/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import on from '../scroll/style/scroll.module.css'
import Card from '../visitaCard/card'
import { project,mean } from '../../main'
import axios from 'axios'
import { useVisitors } from '@/app/sistema/context/visitors'
import { useEffect } from 'react'


export default  function  Scroll ({arry}:mean){
    const {visitors ,setVisitors}= useVisitors();
  const Request = async()=>{
    const response = await axios.get(`http://localhost:3001/getvisitor/visits`)
    const res = response.data as project[]
    setVisitors([...res])
  }
    useEffect(()=>{
       Request() 
    },[])
    
    return (
        <div className={on.bodyon}>
           <div className={on.scroll}>
             {visitors.map((item)=>(
            <div  key={item.id} className={on.cards}>
                <Card 
             cards={
                {
                    name:item.name,
                    cpf:item.cpf,
                    id:item.id
                }
             }
            
            />
            </div>
            ))}
            
           </div>
        
        </div>
    )
}