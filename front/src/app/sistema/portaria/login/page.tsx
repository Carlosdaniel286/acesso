'use client'
import {  useState } from 'react';
import on from './style.module.css'
import Cadastros from '../../components/Form/form';
import Image from 'next/image';
import { Inputcpf } from '../../components/inputcpf/cpf';
import InputPassword from '../../components/inputPassword/password';
import {  useUser } from '../../context/contetx';
import axios from 'axios';
import { useRouter } from 'next/navigation'


export default function Login () {
  const {inputs}= useUser();
  const router = useRouter()
const Request = async() => {
  const response = await axios.post('http://localhost:3001/login', {  cpf:inputs.cpf, password:inputs.password})
  if(response.status===200) 
  router.push('http://localhost:3000/sistema/Mean/novo')
  
  
}
 
  return (
  
      <div className={on.Loginbody} >
          <div className={on.login}>
          
          <Cadastros 
          // eslint-disable-next-line react/no-children-prop
          children={
            <>
              <Inputcpf/>
              
              <InputPassword/>
            </>
          }
          
          Onclik={Request}
          header='login'
          SelectButton='1'
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

  