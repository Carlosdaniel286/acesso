/* eslint-disable react/no-children-prop */
import { UserChangeInput } from './context/changeInputs'
import { UserProviderVisitors } from './context/visitors'
import style from './styleLayout/style.module.css'
import { UserProviderHidden } from './context/hiddeNav'
import Mean from '../sistema/registros/todos/[...user]/main'
import { ConnectSoket, SocketProvider } from './context/socket'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
     <>
       <div className={style.ons}>
      
      <SocketProvider>
      <UserProviderHidden>
       <UserChangeInput>
        <UserProviderVisitors>
        <Mean 
         children={
        <> {children}</>
           
          }
          />
        
      </UserProviderVisitors>
      </UserChangeInput>
      </UserProviderHidden>
      </SocketProvider>
      
        </div>
      </>
    
  )
}


