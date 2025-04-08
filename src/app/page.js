'use client';
import React from 'react';
import dynamic from 'next/dynamic';

import Preloaders from '@/layouts/Preloaders';
const Homes = dynamic(() => import('@/app/homes'), { ssr: false, loading: () => <Preloaders /> });

export default function Home() {
  return <Homes />;
}
