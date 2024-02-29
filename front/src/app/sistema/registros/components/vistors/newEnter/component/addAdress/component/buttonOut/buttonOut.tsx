import style from './style/buttonOut.module.css'

type prpos={
    DisplayAddAdress:(()=>void)
}

export default function ButtonOut({DisplayAddAdress}:prpos){
  return(
    <div className={style.buttonOutBody}>
     <div className={style.buttonOut_container}>
        <button className={style.buttonOut_Button}
         onClick={DisplayAddAdress}
        >X</button>

     </div>
     
    
    </div>
  )
}