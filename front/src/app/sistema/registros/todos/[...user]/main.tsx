'use client'
import on from '../style/style.module.css'
import { ShowModal } from '../../../components/modal/showModal'
import { Modal } from '../../../components/modal/modal'
import Seach from '../../components/serach/search'
import { useContextHiddent } from '../../../context/hiddeNav'
type Means ={
  children:React.ReactNode
}

export default function Mean({children}:Means) {
  const {hiddeNav} = useContextHiddent()
  return (
      <div className={on.body}>
      <header className=''>
          <div className={on.ClikModal} >
            <ShowModal/>
            {hiddeNav.modal && 
            <div className={on.contentModal}>
              <Modal/>
            </div>
            }
          </div>
           <div className={on.seach}>
          <Seach/>
          </div>
           
         </header>
         <main key={'2'} className={on.main}>
            {children}
              
           </main>
          </div>
        
        
    )
  }
  