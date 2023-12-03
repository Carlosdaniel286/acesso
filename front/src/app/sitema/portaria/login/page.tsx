'use client'
import zxcvbn from 'zxcvbn';
import { useState } from 'react';
import on from './style.module.css'
import Cadastros from '../../components/Form/form';
import Image from 'next/image';


export default function Login () {
  const[signIn, setSignIn]=useState({
    cpf:'',
    password:''
  })
  const[text, seText]=useState('')
  
  
  
  const signUp = () => {
    const password = signIn.password; // Assuming signIn is an object with a password property
    const result = zxcvbn(password);
    const containsLetters = /[a-zA-Z]/.test(password);
    const containsNumbers = /\d/.test(password);
    const containsSpecialCharacters = /[!@#$%*]/.test(password);
    const isValidPassword = containsLetters && containsNumbers && containsSpecialCharacters;
    const score = Number(result.score);
    seText(result.score.toString())
    const verifque = isValidPassword && score < 3
    console.log(verifque)
    
  };
  

  
 
 const setCpf = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const cpf = ev.target.value.split('');
    const lastChar: string = cpf[cpf.length - 1];
    
    if (cpf.length > 14) return;
   
    if (!isNaN(Number(lastChar)) || lastChar === '0') {
      
      if(cpf.length==3 || cpf.length==7) cpf.push('.') 
      if(cpf.length==11) cpf.push('-')
      setSignIn({ ...signIn, cpf: cpf.join('') });
    }
  
    if (cpf.length === 0 || ev.target.value === '') {
      console.log('Input cleared');
      setSignIn({ ...signIn, cpf: '' });
    }
  };
  
  
  
  return (
      <div className={on.Loginbody} >
          <div className={on.login}>
          
          <Cadastros 
          children={
            <>
               <input type="text" 
               placeholder='cpf'
               onChange={(ev)=>setCpf(ev)}
               value={signIn.cpf}
              />
              <div className={on.password}>
               <input type="password" 
               placeholder='senha'
               onChange={
                (ev:React.ChangeEvent<HTMLInputElement>) => 
                setSignIn({...signIn,password:ev.target.value,})}
                value={signIn.password}
              />
              <div className={on.text}><span>{text}</span></div>
              </div>
            </>
          }
          
          Onclik={signUp}
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
  