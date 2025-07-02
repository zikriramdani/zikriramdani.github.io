import React from 'react';
import ReduxProvider from '@/redux/provider';

import '@/styles/css/main.css';
import '@/styles/css/style.css';
import '@/styles/fonts/Lato/fonts.css';
import '@/styles/whatsapp/floating-wpp.css';

// import 'font-awesome/css/font-awesome.min.css';

import Heads from '@/layouts/Heads';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000'),
  authors: [{ name: 'Zikri Ramdani' }],
  manifest: '/manifest.json',
  title: 'CV Zikri Ramdani',
  description:
    'Saya seorang Web Developer yang tinggal di Kunciran Indah, Kota Tangerang. Saya memiliki semangat untuk terus belajar pengembangan web dan tidak mudah menyerah.',
  openGraph: {
    url: '/',
    images: [
      {
        url: '/assets/images/header/avatar.webp',
        width: 800,
        height: 800,
        alt: 'Avatar Image'
      }
    ]
  }
};

export const viewport = {
  themeColor: '#000'
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <Heads
        title={metadata.title}
        description={metadata.description}
        author={metadata.authors}
        keywords={metadata.keywords}
        themecolor={viewport.themeColor}
        manifest={metadata.manifest}
        url={metadata.openGraph.url}
        image={metadata.openGraph.images}
      />
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout;
