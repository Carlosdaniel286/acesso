/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
import style from "./style.module.css";
import Overlay from "@/components/overlay/hidden";
import { inside } from "@/types/form";
import { useEffect, useState } from "react";
import { formatDate } from "./helpers/dateTime";
import axios from "axios";
import dotenv from 'dotenv'
const urlBase = process.env.NEXT_PUBLIC_URL_BASE as string
dotenv.config()
type renderAddress = {
  handlerOverlay: () => void;
  id: number;
};

export default function ShowAddress({ id, handlerOverlay }: renderAddress) {
  const [vistorInside, setVistorInside] = useState<inside[]>([]);

  useEffect(() => {
    const fetchInsideData = async () => {
      try {
        
        const response = await axios.get(`${urlBase}/address/inside/${id}`,{
          withCredentials:true
        })
        setVistorInside(response.data);
      } catch (error) {
        console.error("Error fetching visitor inside data:", error);
      }
    };

    fetchInsideData();

    // Cleanup function to disconnect socket
    return () => {
      // Clean up the effect
    };
  }, [id]);

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
                  <p key={id}>qd: {item.address.qd}</p>
                  <p key={id + 1}>lt: {item.address.lt}</p>
                  <span className={style.date}>
                    <span className={style.dateNow}>data:</span>
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



//"inside"