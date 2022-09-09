import React, { useState, useEffect, FunctionComponent } from "react";
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';

import '../styles/plugins/nivo-lightbox/nivo-lightbox.css';
import '../styles/plugins/nivo-lightbox/themes/default/default.css';
import "../styles/css/main.css";
import "../styles/css/style.css";
import "../styles/fonts/Lato/fonts.css";

import "../styles/whatsapp/floating-wpp.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import dynamic from 'next/dynamic';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

const withNoSSR = (Component) => dynamic(
  () => Promise.resolve(Component),
  { ssr: false },
);

// initialize store and wrapper store
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(withNoSSR(MyApp));
