// provider.js
'use client';

import React, { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/redux/store';

import '../../../i18n';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

export default function ReduxProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    AOS.init();

    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 100); // kasih waktu delay biar efeknya terlihat

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
