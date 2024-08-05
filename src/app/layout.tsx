import { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import { Header } from '@/components/Header';

import { siteConfig } from '@/constant/config';

const comfortaa = Comfortaa({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-comfortaa',
});

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='uk'
      className={`${comfortaa.variable} font-comfortaa min-h-screen max-h-screen`}
    >
      <head>
        <meta
          name='google-site-verification'
          content='xlxjJ0CZWAHHRY3xHAz4utJkPpUqucaB5Ol5na206kA'
        />
      </head>
      <body className='font-comfortaa block '>
        <main className='flex flex-col relative'>
          <Header />
          <div className='flex '>{children}</div>
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
