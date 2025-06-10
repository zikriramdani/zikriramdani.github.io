'use client';
import React, { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/redux/store';

import '../../../i18n'; // Inisialisasi i18n (multibahasa)
import AOS from 'aos';
import 'aos/dist/aos.css'; // Gaya untuk animasi AOS

import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Gaya untuk progress bar NProgress

// Konfigurasi NProgress: nonaktifkan spinner (lingkaran loading)
NProgress.configure({ showSpinner: false });

export default function ReduxProvider({ children }) {
  const storeRef = useRef();

  // Membuat store Redux hanya sekali saat komponen pertama kali dimuat
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  const loadLibs = async () => {
    const AOS = (await import('aos')).default;
    const NProgress = (await import('nprogress')).default;

    AOS.init();
    NProgress.start();

    setTimeout(() => NProgress.done(), 100);
  };

  useEffect(() => {
    loadLibs();

    return () => {
      NProgress.done();
    };
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
