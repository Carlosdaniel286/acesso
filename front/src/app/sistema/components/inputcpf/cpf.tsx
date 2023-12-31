'use client'

import { useUser } from "../../context/contetx";


export const Inputcpf=()=>{
  const {inputs ,setInputs}= useUser();
   
  
      
  const setCpf = (ev:React.ChangeEvent<HTMLInputElement>  ) => {
        let keys = ev.target.value.split('')
        const limit = keys.length
        const last = keys[keys.length-1]
        const regex = /^[.-]+$/;
        const ponto = regex.test(last)
        console.log(last)
        if (!isNaN(Number(last)) || last === '0' || last === undefined) {
          
          if (limit > 14) return 
           if (limit === 4) {
             keys=[inputs.cpf,'.',last]
            }
          if (limit === 8) {
           keys=[inputs.cpf,'.',last]
          }
           if (limit === 12) {
           keys=[inputs.cpf,'-',last]
           
          }
          setInputs({...inputs,cpf:keys.join('')})
        
         }else if(ponto){
          const newarry = inputs.cpf.split('')
          newarry.pop()
          
          setInputs({...inputs,cpf:newarry.join('')})
        }
    
    
    }
    return(
    <>
               <input type="text" 
               placeholder='cpf'
               onChange={(ev)=>setCpf(ev)}
               value={inputs.cpf}
              />
        </>
    )
}