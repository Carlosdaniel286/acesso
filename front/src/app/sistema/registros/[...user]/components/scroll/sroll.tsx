/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import on from '../scroll/style/scroll.module.css'
import Card from '../vistors/visitaCard/card'
import { useVisitors } from '@/app/sistema/context/visitors'
import { useEffect } from 'react'
import dotenv from 'dotenv';
dotenv.config();
import { ConnectSoket } from '@/app/sistema/context/socket'
import { project } from '@/app/types/form'



export default  function  Scroll (){
 const {socket} = ConnectSoket()
 const {visitors ,setVisitors}= useVisitors();
    
    useEffect(()=>{
      if(socket){
        socket.emit("getvisitor", "");
        socket.on("getvisitors", (msg:project[]|[]) => {
            console.log(msg)
        setVisitors([...msg])
        })
    }
    },[socket])
    
    return (
        <div className={on.bodyon}>
           <div className={on.scroll}>
            {visitors && 
            <>
             {visitors.map((item)=>(
                
               <div  key={item.id} className={on.cards}>
                
                <Card 
             cards={
                {
                    name:item.name,
                    cpf:item.cpf,
                    id:item.id,
                    User:item.User
                }
             }
            
            />
            </div>
            ))}
            </>
          }
            
           </div>
        
        </div>
    )
}