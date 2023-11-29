'use client'

import on from './style.module.css'
import Cadastros from '../../components/Form/form'


export default function VisitaCadastros() {
   const minhaFuncao = () => {
      alert('Clicou no botão!');
    };
    return (
      <div className={on.Cadbody} >
         <Cadastros
         children={
            <>
        
            <input type="text" 
               placeholder='nome'
              />
              <input type="text" 
               placeholder='cpf'
              />
              <input type="text" 
               placeholder='endereço'
              />
               <input type="text" 
               placeholder='cnh'
               />
              
            </>
             
         
         }

         Onclik={minhaFuncao}
         
         header='cadastro'
         />
         
      </div>
    )
  }
  