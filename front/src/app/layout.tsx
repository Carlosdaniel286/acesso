
import './globals.css'
import { UserProvider } from './sistema/context/contetx'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>easyresgistercondominios</title>
      </head>
      <body className={''}>
        <UserProvider>
          {children}
        </UserProvider>
        </body>
    </html>
  )
}
