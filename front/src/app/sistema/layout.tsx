/* eslint-disable react/no-children-prop */
import { UserChangeInput } from '@/context/changeInputs'
import { UserProviderVisitors } from '@/context/visitors'
import style from './styleLayout/style.module.css'
import { UserProviderHidden } from '@/context/hiddeNav'
import Mean from '../sistema/registros/todos/[...user]/main'
import { SocketProvider } from '@/context/socket'
import { UserProviderStream } from '@/context/mediaDevices/mediaDevices'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
     <>
       <div className={style.ons}>
      <UserProviderStream>
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
      </UserProviderStream>
        </div>
      </>
    
  )
}


