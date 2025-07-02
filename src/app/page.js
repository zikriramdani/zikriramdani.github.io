'use client';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

import Preloaders from '@/layouts/Preloaders';
const Homes = dynamic(() => import('@/app/homes'), { ssr: false, loading: () => <Preloaders /> });

export default function Home() {
  useEffect(() => {
    import('font-awesome/css/font-awesome.min.css');
  }, []);
  return <Homes />;
}
