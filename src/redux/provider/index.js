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

  useEffect(() => {
    AOS.init(); // Inisialisasi animasi AOS (animate on scroll)
    
    NProgress.start(); // Memulai progress bar saat komponen dimuat

    // Menghentikan progress bar setelah jeda (agar terlihat)
    const timer = setTimeout(() => {
      NProgress.done(); // Mengakhiri progress bar
    }, 100); // Delay 500ms (bisa disesuaikan)

    // Membersihkan timer jika komponen unmount
    return () => {
      clearTimeout(timer); // Hentikan timer jika tidak diperlukan
      NProgress.done(); // Pastikan progress bar dihentikan
    };
  }, []); // Hanya dijalankan sekali saat komponen pertama kali dimuat

  return (
    <Provider store={storeRef.current}>
      {children}
    </Provider>
  );
}
