import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { UserProviderHidden } from './sistema/context/hiddeNav'
import { UserChangeInput } from "./sistema/context/changeInputs";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <title>easyresgistercondominios</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
         <link rel="manifest" href="/site.webmanifest"></link>
       </head>
      <body className={"bodys"} suppressHydrationWarning={true}>
        <UserChangeInput>
        <UserProviderHidden >
        {children}
      </UserProviderHidden >
      </UserChangeInput>
        <footer>
          <ul>
            <li>
              <Image
                alt="contato"
                width={35}
                height={35}
                src={"/telefone.png"}
              />
              <span>
                <Link href={"https://wa.me/5562994809880"} target="_blank">
                  62994809880
                </Link>
              </span>
            </li>
            <li>
              <Image alt="email" width={32} height={32} src={"/email.png"} />
              <span>
                <Link
                  href={
                    "mailto:carlosdaniielprogramador@gmail.com"
                  }
                  target="_blank"
                >
                  carlosdaniielprogramador@gmail.com
                </Link>
              </span>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
//"carlosdaniiel286@gmail.com"
