/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import on from '../scroll/style/scroll.module.css'
import Card from '../visitaCard/card'
import { project,mean } from '../../main'
import axios from 'axios'
import { useVisitors } from '@/app/sistema/context/visitors'
import { useEffect } from 'react'
import dotenv from 'dotenv';
dotenv.config();
const urlBase = process.env.NEXT_PUBLIC_URL_BASE
import { ConnectSoket } from '@/app/sistema/context/socket'



export default  function  Scroll (){
 const {socket} = ConnectSoket()
    
  const {visitors ,setVisitors}= useVisitors();
    
    useEffect(()=>{
      if(socket){
        socket.emit("getvisitor", "");
        socket.on("getvisitors", (msg) => {
          console.log(msg);
          setVisitors([...msg])
        })
    }
      
    },[socket])
    
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