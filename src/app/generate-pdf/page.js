'use client';

import { Suspense } from 'react';
import GeneratePdfPage from './GeneratePdfPage'; // kita split Page.js
import { useTranslation } from 'react-i18next';

export default function Page() {
  const { t } = useTranslation('translation');
  return (
    <Suspense
      fallback={null}
    >
      <GeneratePdfPage />
    </Suspense>
  );
}
