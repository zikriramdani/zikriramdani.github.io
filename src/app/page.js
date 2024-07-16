import dynamic from 'next/dynamic';

import Preloaders from '@/layouts/Preloaders';
const Homes = dynamic(() => import('@/app/homes'), { ssr: false, loading: () => <Preloaders /> });

export const metadata = {
  title: 'CV Zikri Ramdani',
  description:
    'I am a Web developer who lives in Kunciran Indah, Tangerang City. Want to continue learning web development. Not easily give up.',
  manifest: '/manifest.json',
  openGraph: {
    title: 'CV Zikri Ramdani',
    description:
      'I am a Web developer who lives in Kunciran Indah, Tangerang City. Want to continue learning web development. Not easily give up.',
    url: '/',
    images: [
      {
        url: '/assets/images/header/avatar.webp',
        width: 800,
        height: 800,
        alt: 'Avatar Image'
      }
    ]
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
    shortcut: '/favicon.ico'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CV Zikri Ramdani',
    description:
      'I am a Web developer who lives in Kunciran Indah, Tangerang City. Want to continue learning web development. Not easily give up.',
    image: '/assets/images/header/avatar.webp'
  }
};

export default function Home() {
  return <Homes />;
}
