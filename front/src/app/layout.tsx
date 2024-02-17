import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>easyresgistercondominios</title>
      </head>
      <body className={"bodys"} suppressHydrationWarning={true}>
        {children}
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
