import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';
import PropTypes from 'prop-types';

// import '../styles/plugins/nivo-lightbox/nivo-lightbox.css';
// import '../styles/plugins/nivo-lightbox/themes/default/default.css';
import '../styles/css/main.css';
import '../styles/css/style.css';
import '../styles/fonts/Lato/fonts.css';
import '../styles/whatsapp/floating-wpp.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

// initialize store and wrapper store
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
};

export default wrapper.withRedux(MyApp);
