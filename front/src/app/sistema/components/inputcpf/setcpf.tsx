/* eslint-disable react-hooks/rules-of-hooks */
import { useState,useEffect, SetStateAction, Dispatch } from "react"
type input={
    inputvalue: Dispatch<SetStateAction<string>>,
  
  
}
export const Inputcpf=({inputvalue}:input)=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[signIn, setSignIn]=useState('')
    const[cpf, setCpfs]=useState<string[]>([])
     
    useEffect(()=>{
     inputvalue(signIn)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[signIn])
    
    const clearcpf=(ev:React.KeyboardEvent<HTMLInputElement>)=>{
        const keys = ev.key
       if(keys=='Backspace'){
          const newArray = signIn.split('')
          newArray.pop()
          setCpfs([...newArray])
          setSignIn(newArray.join(''))
        }
    
       }
      
      
      const setCpf = (ev:React.ChangeEvent<HTMLInputElement>  ) => {
        const keys = ev.target.value.split('')
        const limit = cpf.length
        const last = keys[keys.length-1]
        
       
        
        if (!isNaN(Number(last)) || last === '0') {
          if (limit < 15) {
          setCpfs([...cpf,last])
          
          
          if (limit === 3) {
          const newArray = [...cpf, '.', last];
           setCpfs([...newArray])
          
          }
        
          if (limit === 7) {
            const newArray = [...cpf, '.', last];
            setCpfs([...newArray])
           
          }
        
          if (limit === 11) {
            const newArray = [...cpf, '-', last];
            setCpfs([...newArray])
            
          }
          
          setSignIn(cpf.join(''))
          
          return
        }
      }
    
    
    }
    return(
    <>
               <input type="text" 
               placeholder='cpf'
              
               onKeyDown={(ev)=>clearcpf(ev)}
               onChange={(ev)=>setCpf(ev)}
               value={signIn}
              />
        </>
    )
}