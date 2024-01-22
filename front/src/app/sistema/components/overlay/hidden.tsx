'use client'
import { Dispatch, ReactNode, SetStateAction, useRef } from 'react';
import over from './style/over.module.css'
import { useContextHiddent } from '../../context/hiddeNav';
import { useChangeInput } from '../../context/changeInputs';
import { useUser } from '../../context/contetx';
interface Props {
    children: ReactNode;
    setHidden: Dispatch<SetStateAction<boolean>> | null
  }
export default function Overlay({children, setHidden}:Props) {
  const {setHiddeNav} = useContextHiddent()
  const {setChangeInput} =useChangeInput()
    const refPai = useRef<HTMLDivElement>(null);
    const { inputs,setInputs } = useUser();
    const handleClick = (event: React.MouseEvent) => {
      //setInputs({...inputs,name:''})
        if (event.target === refPai.current) {
          setInputs({...inputs,name:'', cpf:'' ,cnh:'',address:{lt:"",qd:''}})
          if(setHidden){
            setHidden(false)
          }
           setHiddeNav(false)
           setChangeInput('nome')
          
          }
        
      };
    
      return (
        <div ref={refPai} className={over.overlay}
         onClick={(e) => { handleClick(e) }}
          >
          <div className={over.hidden}>{children}</div>
        </div>
    )
  };