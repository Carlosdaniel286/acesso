'use client'
import { Dispatch, ReactNode, SetStateAction, useRef } from 'react';
import over from './style/over.module.css'

interface Props {
    children: ReactNode;
    setHidden: Dispatch<SetStateAction<boolean>>
  }


export default function Overlay({children,setHidden}:Props) {

    const refPai = useRef<HTMLDivElement>(null);
    
    const handleClick = (event: React.MouseEvent) => {
        
        if (event.target === refPai.current) {
            setHidden(false)
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