import { useEffect, useState } from "react";
export default function InputPhone() {
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
