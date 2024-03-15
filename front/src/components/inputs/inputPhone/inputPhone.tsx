import { useEffect, useState } from "react";

type Phone ={
  getValueOfPhone:((ev:string)=>void)
}

export default function InputPhone({getValueOfPhone}:Phone) {
  const [phone, setPhone] = useState("");
  const [newPhone, setNewPhone] = useState<string[]>([]);
  

  const handlePhone = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    const kay = ev.key;
    const isNumber = /^\d$/.test(kay);
    const isBackspace = kay === "Backspace";
    
    if (isNumber) {
      newPhone[0] = "(";
    if ( newPhone[2]) {newPhone[3] = ")";}
      
    if (newPhone.length > 12) return;
       setNewPhone([...newPhone, kay])
    } 
     
    if (isBackspace) {
        const clean = newPhone.slice(0, -1);
        setNewPhone(clean)
      }
    
    
  };
  useEffect(() => {
    const phones = newPhone.join('');
    setPhone(phones);
  }, [newPhone]);
  
  useEffect(() => {
     getValueOfPhone(phone)
  }, [phone]);

  return (
    <>
      <input
        type="text"
        placeholder="numero de celular"
        onKeyDown={(ev) => {
          handlePhone(ev);
        }}
        value={phone}
      />
    </>
  );
}
