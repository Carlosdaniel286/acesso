import on from './style/card.module.css'
import Image from 'next/image'


export default function CardVisita(){
    

    return (
        <div className={on.bodyprest}>
          <div className={on.person}>
            <div className={on.img}>
              <Image 
               alt=''
               width={100}
               height={100}
               src={'/user.jpg'}
               style={{borderRadius:'50%',border:' 5px solid'}}
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
              <button className={on.inside}>entrada</button>
              <button className={on.info}>informaçoes</button>
              <button className={on.outside}>saida</button>
            </div>
        </div>
    )
}