import "./globals.css";
import Head from 'next/head';
import type { Metadata } from 'next'
import Image from "next/image";
import Link from "next/link";
import { UserProviderHidden } from './sistema/context/hiddeNav'
import { UserChangeInput } from "./sistema/context/changeInputs";
export const metadata: Metadata = {
  title:'condminio',
  description: '...',
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: '/logo.png',
    siteName: 'Next.js',
    images: [
      {
        url: '/logo.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: '/logo.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons:{
    icon: [
      { url: '/favicon-32x32.png' },
      { url: '/favicon-16x16.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
  manifest:'/site.webmanifest'
  

}



export default function RootLayout({ children,}:{children: React.ReactNode;})
{
  return (
    <html lang="pt">
    <body className={"bodys"} >
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
