/* eslint-disable react-hooks/rules-of-hooks */
import { useState,useEffect, SetStateAction, Dispatch } from "react"
type input={
    inputvalue: Dispatch<SetStateAction<string>>
}
export const Inputscof=({inputvalue}:input)=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[signIn, setSignIn]=useState({
        cpf:'',
        password:''
      })
    const[cpf, setCpfs]=useState<string[]>([])
     
    useEffect(()=>{
     inputvalue(signIn.cpf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[signIn.cpf])
    
    const clearcpf=(ev:React.KeyboardEvent<HTMLInputElement>)=>{
        const keys = ev.key
       if(keys=='Backspace'){
          const newArray = signIn.cpf.split('')
          newArray.pop()
          setCpfs([...newArray])
          setSignIn({...signIn,cpf:newArray.join('')})
        }
    
       }
      
      
      const setCpf = (ev:React.ChangeEvent<HTMLInputElement>  ) => {
        const keys = ev.target.value.split('')
        const limit = cpf.length
        let last = keys[keys.length-1]
        
       
        
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
          
          setSignIn({...signIn,cpf:cpf.join('')})
          
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
               value={signIn.cpf}
              />
        </>
    )
}