import { UserProvider } from './context/contetx'
import { UserProviderVisitors } from './context/visitors'
import style from './styleLayout/style.module.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <>
       <div className={style.ons}>
        <UserProviderVisitors>
        <UserProvider>
           {children}
        </UserProvider>
      </UserProviderVisitors>
        </div>
      </>
    
  )
}
