'use client'
import zxcvbn from 'zxcvbn';
import { KeyboardEvent, useEffect, useState } from 'react';
import on from './style.module.css'
import Cadastros from '../../components/Form/form';
import Image from 'next/image';
import { checkPasswordStrength } from '../helps/helps';
import { Inputcpf } from '../../components/inputcpf/cpf';


export default function Login () {
  const[signIn, setSignIn]=useState({
    cpf:'',
    password:''
  })
  const[scores, setScores]=useState({
    score:0,
    texts:''
  })
 const[cpf, setCpfs]=useState<string>('')
  
  const signUp = (ev:React.ChangeEvent<HTMLInputElement>) => {
    const password = ev.target.value; // Assuming signIn is an object with a password property
    const result= checkPasswordStrength(password)
    setScores({...scores,texts:result.text,score:result.score})
    setSignIn({...signIn,password})
  };
  
  




const fetch = () => {
    const containsLetters = /[a-zA-Z]/.test(signIn.password);
    const containsNumbers = /\d/.test(signIn.password);
    const containsSpecialCharacters = /[!@#$%*]/.test(signIn.password);
    const isValidPassword = containsLetters && containsNumbers && containsSpecialCharacters;
    
    const verifque = isValidPassword && scores.score > 2
    console.log(verifque)
    if(!verifque ){
      setScores({...scores,texts:'deve contem letras, numeros , caracteris e ser forte '})
    }
  };
  
  
  
  
  return (
      <div className={on.Loginbody} >
          <div className={on.login}>
          
          <Cadastros 
          // eslint-disable-next-line react/no-children-prop
          children={
            <>
              <Inputcpf/>
              <div className={on.password}>
               <input type="text" 
               placeholder='deve contem letras, numeros , caracteris e ser forte'
               onChange={(ev)=>signUp(ev)}
              
                value={signIn.password}
              />
              <div className={on.text}><span>{scores.texts}</span></div>
              </div>
            </>
          }
          
          Onclik={fetch}
          header='login'
          />
           
         </div>
         <div className={on.imgbody}>
            <div className={on.img}>
              <div className={on.border}></div>
               <div className={on.contentImg}>
              <Image 
                alt=''
                height={440}
                width={380}
                src={'/orange.png'}
                />
              </div>
          </div>
          </div>
         
      </div>
    )
  }

  