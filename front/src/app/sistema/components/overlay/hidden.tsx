'use client'
import { Dispatch, ReactNode, SetStateAction, useRef } from 'react';
import over from './style/over.module.css'
import { useContextHiddent } from '../../context/hiddeNav';
import { useChangeInput } from '../../context/changeInputs';

type OverlayVisibility = {
  setOverlayVisibility: () => void;
};

type HandleOverlayVisibility = 'default' | OverlayVisibility;

interface Props {
  children: React.ReactNode;
  handleOverlayVisibility: 'default' | (()=>void)
}

export default function Overlay({children,handleOverlayVisibility}:Props) {
  const {setHiddeNav,hiddeNav} = useContextHiddent()
  const {setChangeInput} =useChangeInput()
    const refPai = useRef<HTMLDivElement>(null);
    
    const handleClick = (event: React.MouseEvent) => {
      if (event.target === refPai.current) {
        if(handleOverlayVisibility!=='default'){
          handleOverlayVisibility()
          setChangeInput('nome')
          return
        }
       }
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