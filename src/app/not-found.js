'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

import dynamic from 'next/dynamic';

// Dynamically import the component and disable SSR
const NotFound = dynamic(() => import('@/layouts/NotFound'), { ssr: false });

const Index = () => {
  const { t } = useTranslation('translation');
  return <NotFound translation={t} />;
};

export default Index;
