import SocketProvider from "../../context/socket"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <>
       <div className={'n'}>
        <SocketProvider>
           {children}
        </SocketProvider>
        
        </div>
      </>
    
  )
}
