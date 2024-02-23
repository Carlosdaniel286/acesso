/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
import style from './style.module.css';
import Overlay from "@/app/sistema/components/overlay/hidden";
import { inside } from "@/app/types/form";
import { ConnectSoket } from "@/app/sistema/context/socket";
import { useEffect, useState } from "react";
import { initInside } from "@/app/utils/inside/main";
import { formatDate } from "./helpers/dateTime";

type renderAddress ={
  handlerOverlay: (() => void),
  id: number
}

export default function RenderAddress({ id, handlerOverlay }: renderAddress) {
  const { socket } = ConnectSoket();
  const [vistorInside, setVistorInside] = useState<inside[]>([initInside]);
  
  useEffect(() => {
    if (!socket) return;
    socket.emit('inside', id);
    socket.on('inside', ((item: inside[]) => {
      setVistorInside(item);
    }));
  }, []);

  return (
    <>        
      <Overlay  
        children={
          <div className={style.contanier_Address}>
            <div className={style.container_button}>
              <button onClick={handlerOverlay}>x</button>
            </div>
            <div className={style.RenderAddress}>
              {vistorInside.map((item, id) => (
                <div className={style.maps} key={id}>
                  <p key={id}>
                    qd: {item.Address.qd}
                  </p>
                  <p key={id + 1}>
                    lt: {item.Address.lt}
                  </p>
                  <span className={style.date}> 
                    <span className={style.dateNow}>
                      data: 
                    </span>
                    {`${formatDate(item.createdAt.toString())}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        }
        handleOverlayVisibility={handlerOverlay}
      />
    </>
  );
}
