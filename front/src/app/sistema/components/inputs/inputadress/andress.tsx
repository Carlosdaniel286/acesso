/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import style from "./style/adress.module.css";
import Swal from "sweetalert2";
export type address ={
  getValueOfAddress:((value:{qd:number,lt:number})=>void)
}


export const InputAdress = ({getValueOfAddress}:address) => {
 
  const [addres, setAddres] = useState({
    qd: '',
    lt: '',
  });

  

  useEffect(() => {
    if (addres.lt !== "" || addres.qd !== "") {
      const qd = Number(addres.qd);
      const lt = Number(addres.lt);
      
      const clone = { ...addres, qd, lt };
       if(lt && qd){
        getValueOfAddress({qd, lt})
       // setInputs({...inputs,address:[clone] })
       
       //
       return
      }
    
      //let arry = inputs.address
      //arry.push(clone)
      //setInputs({...inputs,address:arry});
      
     
      
    }
  }, [addres]);

  const handleQd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.split("");
    const last = inputValue[inputValue.length - 1];

    if (!isNaN(Number(last)) || last === "0" || last === undefined) {
      if (inputValue.length > 3) return;
      const qd = inputValue.join("");
      if(Number(qd)>20) {
        Swal.fire({
          icon: 'info',
          title: 'Endereço Inexistente',
          text: 'Essa Quadra Não Existe',
          showConfirmButton: true,
        });
        
        setAddres({ ...addres, qd:"" });
        return
        }
        
       setAddres({ ...addres, qd });
    }
  };

  const handleLt = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.split("");
    const last = inputValue[inputValue.length - 1];
  if (!isNaN(Number(last)) || last === "0" || last === undefined) {
      if (inputValue.length > 3) return;
      let lt = inputValue.join("");
      if(Number(lt)>20) {
        Swal.fire({
          icon: 'info',
          title: 'Endereço Inexistente',
          text: 'Esse lote Não Existe',
          showConfirmButton: true,

        });

        setAddres({ ...addres, lt:""});
         return
       }
      setAddres({ ...addres, lt });
    }
  };

  return (
    <div className={style.adress}>
      
      <input
       className={style.lt_inputs}
        type="text"
        placeholder={"qd: max 20"}
        onChange={handleQd}
        value={addres.qd}
      />
 
   
     <input
        type="text"
        placeholder={"lt: max 20"}
        onChange={handleLt}
        value={addres.lt}
      />
       
     
    </div>
  )
};
