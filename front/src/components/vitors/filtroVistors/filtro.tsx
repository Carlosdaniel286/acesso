
'use client'
import Image from 'next/image'
import style from './filtro.module.css'
import Options from './component/options/options'
import { useRef, useState ,useEffect} from 'react'


export default function Filtro() {
 const[hidden , setHidden]=useState(false)
 const divRef = useRef<HTMLDivElement>(null);
 const [width , setWidth]=useState(100)
 // Use o hook useEffect para executar código após a renderização do componente
 const handleResize = () => {
  if (divRef.current) {
    const larguraDaDiv = divRef.current.clientWidth;
    const divid = (larguraDaDiv / 2)
    console.log('Largura da div:', larguraDaDiv);
    setWidth(divid)
  }
};

// Adiciona um listener de evento de redimensionamento ao window
useEffect(() => {
  window.addEventListener('resize', handleResize);

  // Remove o listener quando o componente é desmontado
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []); 
   //.filtroBody
   return(
    <div ref={divRef} className={style.filtroBody}>
     
        <div className={style.filtroConetnt} 
         onClick={(()=>(setHidden(!hidden)))}>
             <Image
              alt='filtro'
              width={60}
              height={60}
              src='/filtro.png'
              
              />
              <p>filtro</p>
           </div>
           {hidden &&
            <>
            
             <Options
              width={width}

             />
            
             </> 
             }
    </div>
   )
}