/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import on from './style/style.module.css'
import { useUser } from '../../context/contetx';



export default function InputPassword() {
  const {inputs ,setInputs}= useUser();
  
  const signUp = (ev:React.ChangeEvent<HTMLInputElement>) => {
    const password = ev.target.value; // Assuming signIn is an object with a password property
    setInputs({...inputs,password})
  };
 
  return (
          <>
            <div className={on.password}>
               <input type="password" 
               placeholder='senha'
               onChange={(ev)=>signUp(ev)}
               value={inputs.password}
              />
              </div>
            </>
         
         
    )
  }

  