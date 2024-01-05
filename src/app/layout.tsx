import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import type { Metadata } from 'next'
import Header from './layout/Header'
import Footer from './layout/Footer';
import Head from 'next/head';
import { headers } from 'next/headers';
import { parseUrlAndAddTags } from './utils/parseTags';

export const metadata: Metadata = {
  title: 'UPSC AKHADA',
  description: 'Relevant . Quality . Simplified',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const headersList = headers()
  // const header_url = headersList.get('x-url') || "";
  // const pathname = headersList.get('x-pathname');
  // const origin_url = headersList.get('x-origin');
  // console.log('pathname ', pathname);
  // console.log(JSON.stringify(parseUrlAndAddTags(pathname)));

  return (
    <html lang="en">
      {/* <head>
        <title>UPSC Akhada</title>
        {parseUrlAndAddTags(pathname) &&
          parseUrlAndAddTags(pathname)?.map((itemTag) => (
            <>
              {itemTag.type === 'description' && <meta name={itemTag.name} content={itemTag.content}></meta>}
            </>
          ))
        }
      </head> */}
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
