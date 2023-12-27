import style from './styleLayout/style.module.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <>
       <div className={style.ons}>
        {children}
        </div>
      </>
    
  )
}
