import { Socket } from "socket.io-client";
import { addressValue } from "@/app/types/inputs";
import Swal from 'sweetalert2';
import { newEnters } from "../../newEnter";
import { project } from "@/app/types/form";
import { Dispatch, SetStateAction } from "react";

type NewEnter ={
    socket:Socket | undefined, 
    valueOfAddress:addressValue[],
    cards: project;
     hiddeNav: {
        overflow: boolean;
        modal: boolean;
    }
    setHiddeNav: Dispatch<SetStateAction<{
        overflow: boolean;
        modal: boolean;
    }>>,
   
}


export const newEnterVistor = async ({
    socket, 
    valueOfAddress,
    cards,
    setHiddeNav,
    hiddeNav,
   
   
  }:NewEnter) => {

const filterAddress = valueOfAddress.filter((item)=>{
      return item.lt!==''&& item.qd!==''
    })
    
    if(filterAddress.length===0){
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Sem Endereço Para Adicionar ',
        showConfirmButton: true,
      });
      return
    }
    const newVisitor: newEnters = {
      address: filterAddress,
      visitorId: cards.id,
    };
    try{
    socket?.emit("visitorsEnter", newVisitor);
    socket?.on("response", async(response:{message:string,success:boolean}) => {
      if(response.success){
        await Swal.fire({
          icon:'success',
          title: 'ok',
          text: 'ok',
          showConfirmButton: false,
          timer:700
        });
      setHiddeNav({ ...hiddeNav, overflow: false });
      
      }else{
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: response.message,
          showConfirmButton: true,
        });
        return
      }
        
    });
   
  }catch(err){
   if(err instanceof ErrorEvent){
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: err.message,
      showConfirmButton: true,
    });
    return
   }
   await Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'erro no servidor',
    showConfirmButton: true,
  });
  return

}
  };