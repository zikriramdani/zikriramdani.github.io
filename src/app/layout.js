'use client';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';

import '../../i18n';
import { appWithTranslation } from 'next-i18next';

import '@/styles/css/main.css';
import '@/styles/css/style.css';
import '@/styles/fonts/Lato/fonts.css';
import '@/styles/whatsapp/floating-wpp.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import 'font-awesome/css/font-awesome.min.css';

function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Provider store={store}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
}

export default appWithTranslation(RootLayout);
