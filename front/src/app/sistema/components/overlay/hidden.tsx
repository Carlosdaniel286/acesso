'use client'
import { Dispatch, ReactNode, SetStateAction, useRef } from 'react';
import over from './style/over.module.css'
import { useContextHiddent } from '../../context/hiddeNav';
import { useChangeInput } from '../../context/changeInputs';
interface Props {
    children: ReactNode;
    
  }
export default function Overlay({children}:Props) {
  const {setHiddeNav,hiddeNav} = useContextHiddent()
  const {setChangeInput} =useChangeInput()
    const refPai = useRef<HTMLDivElement>(null);
    
    const handleClick = (event: React.MouseEvent) => {
        if (event.target === refPai.current) {
           setHiddeNav({...hiddeNav,modal:false,overflow:false})
           setChangeInput('nome')
          }
        };
     return (
        <div ref={refPai} className={over.overlay}
         onClick={(e) => { handleClick(e) }}
          >
           {children}
          </div>
    )
  };