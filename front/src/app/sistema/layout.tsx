import { UserChangeInput } from './context/changeInputs'
import { UserProviderVisitors } from './context/visitors'
import style from './styleLayout/style.module.css'
import { UserProviderHidden } from './context/hiddeNav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
     <>
       <div className={style.ons}>
        <UserProviderHidden>
       <UserChangeInput>
        <UserProviderVisitors>
       
           {children}
        
      </UserProviderVisitors>
      </UserChangeInput>
      </UserProviderHidden>
     
        </div>
      </>
    
  )
}
function setHiddeNav(arg0: boolean) {
  throw new Error('Function not implemented.')
}

