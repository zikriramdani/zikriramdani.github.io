'use client';

import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';

// Dynamically import the component and disable SSR
const Error = dynamic(() => import('@/layouts/Error'), { ssr: false });

const Index = () => {
  const { t } = useTranslation('translation');
  return <Error translation={t} />;
};

export default Index;
