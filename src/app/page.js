'use client';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

import Preloaders from '@/layouts/Preloaders';
const Homes = dynamic(() => import('@/app/homes'), { ssr: false, loading: () => <Preloaders /> });

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Homes />;
}
