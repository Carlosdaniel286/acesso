import { UserProvider } from './context/contetx'
import { UserProviderVisitors } from './context/visitors'
import style from './styleLayout/style.module.css'
import { UserChangeInput} from './context/changeInputs'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <>
       <div className={style.ons}>
        <UserChangeInput>
        <UserProviderVisitors>
        <UserProvider>
           {children}
        </UserProvider>
      </UserProviderVisitors>
      </UserChangeInput>
        </div>
      </>
    
  )
}
