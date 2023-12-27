/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import on from './style/card.module.css'
import Image from 'next/image'


export default function CardVisita(){
  const divRef = useRef<HTMLDivElement>(null);
  const[dimension, setDimension]=useState(100)
  const [largura, setLargura] = useState(window.innerWidth);
  const handleResize = () => {
    setLargura(window.innerWidth);
  };
  useEffect(() => {
    // Adiciona o ouvinte de evento de redimensionamento ao montar o componente
    window.addEventListener('resize', handleResize);

    // Remove o ouvinte de evento de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  useEffect(() => {
    if (divRef.current) {
      const divWidth = divRef.current.clientWidth;
      setDimension(divWidth)
      console.log(divWidth)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[largura])

    return (
        <div className={on.bodyVisit}>
          <div className={on.person} >
            <div className={on.visitimg} ref={divRef}>
              <img
                 src={'/user.jpg'}
                  alt="Descrição da imagem"
                  width={100}
                  height={100}
                />
            </div>
            <div className={on.content}>
            <ul >
               <li>nome:</li>
               <li>cpf:</li>
               <li>endereço:</li>
               <li>atendente:</li>
            </ul>
             </div>
          </div>
          <div className={on.button}>
              <button className={on.inside}>enter</button>
              <button className={on.outside}>saida</button>
              <button className={on.info}>info</button>
            </div>
        </div>
    )
}