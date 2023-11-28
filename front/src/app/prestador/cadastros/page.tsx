import on from './style.module.css'

export default function Cadastros() {
    return (
      <div className={on.Cadbody} >
         
         <main>
          <div className={on.form}>
          <header><h1>cadastro</h1></header>
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
              <div className={on.submit}>
                 <button>enviar</button>
              </div>
             
            </div>
         </main>
      </div>
    )
  }
  