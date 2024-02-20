/* eslint-disable react/no-children-prop */
import { card } from "@/app/types/cards";
import style from './style.module.css'
import Overlay from "@/app/sistema/components/overlay/hidden";
type renderAddress ={
  cards:card,
  handlerOverlay:(()=>void)
}

export default function RenderAddress({ cards,handlerOverlay }: renderAddress) {
  
  return(
    <>        
              
            <Overlay  
              children={
              <div className={style.contanier_Address}>
                 <div className={style.container_button}>
                  <button onClick={handlerOverlay}>x</button></div>
              <div className={style.RenderAddress}>
              {cards.cards.inside.map((item, id) => (
                  <div className={style.maps} key={id}>
                    <p key={id}>
                      qd: {item.Address.qd}
                    </p>
                    <p key={id + 1}>
                      lt: {item.Address.lt}
                    </p>
                    <span className={style.date}> <span className={style.dateNow}>horas:</span> {item.createdAt}</span>
                  </div>
                ))}
                </div>
                </div>
                }
               handleOverlayVisibility={handlerOverlay}
              />
               
              </>
  )
}