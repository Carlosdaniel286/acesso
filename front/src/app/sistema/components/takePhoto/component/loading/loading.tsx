import { useEffect } from 'react';
import style from '../../style/addPicture.module.css'
import Swal from 'sweetalert2';
export default function Loading() {
     useEffect(()=>{
        Swal.fire({
            title: 'Aguarde...',
            text: 'Carregando',
            showConfirmButton: false,
            allowOutsideClick: false,
           })
          return (()=>{
            Swal.close()
           })
    },[])

  return (
    <div className={style.container_loading}></div>
  )
}
  