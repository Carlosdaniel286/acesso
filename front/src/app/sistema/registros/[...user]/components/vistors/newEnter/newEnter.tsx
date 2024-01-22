/* eslint-disable react/no-children-prop */
'use client'
import { project } from '@/app/types/form'
import style from './style/enter.module.css'
import Cadastros from '@/app/sistema/components/Form/cadastros'
import { InputCnh } from '@/app/sistema/components/inputs/inputCnh/cnh'
import { Inputcpf } from '@/app/sistema/components/inputs/inputcpf/cpf'
import { InputAdress } from '@/app/sistema/components/inputs/inputadress/andress'
import { InputName } from '@/app/sistema/components/inputs/inputname/name'
import { useUser } from '@/app/sistema/context/contetx'
import { useEffect ,useState} from 'react'
import { useChangeInput } from '@/app/sistema/context/changeInputs'
import Overlay from '@/app/sistema/components/overlay/hidden'

export default function NewEntry({name,cpf,id,User}:project){
    const { inputs, setInputs } = useUser();
    const {setChangeInput} = useChangeInput()
    const [hidden, setHidden]=useState(true)
    useEffect(()=>{
        setChangeInput(null)
        setInputs({...inputs,name,cpf})
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return(
     <div className={style.bodyEnter}>
        {hidden && 
        <Overlay
        children={
        <>
     <Cadastros
     children={
        <>
        <InputName
         text=''
        />
        <InputAdress/>
        <Inputcpf/>
        </>
     }
     Onclik={(()=>{})}
     header=''
     SelectButton='1'
     
     />
    
    </>
        }
        setHidden={setHidden}
    />
   }
     </div>
    )

}