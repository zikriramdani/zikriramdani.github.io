'use client';
import React, { Fragment, useState, useEffect } from 'react';
import Headers from '@/layouts/Headers';

import Footers from '@/layouts/Footers';

import Intros from './components/intros';
import Skills from './components/skills';
import Experiences from './components/experiences';
import Certificates from './components/certificates';
import Educations from './components/educations';
import Profiles from './components/profiles';
import Portfolios from './components/portfolios';
import Clients from './components/clients';

import FloatingWhatsApp from 'react-floating-whatsapp';

import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('translation');

  const [showItems, setShowItems] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  const [showButton, setShowButton] = useState(false);

  // Function to check if we should show the button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true); // Show the button if the scroll position is more than 300px
    } else {
      setShowButton(false); // Hide the button if scroll is less than 300px
    }
  };

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const versiWhatsapp = () => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Consider mobile if screen width is <= 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial window size

    return () => window.removeEventListener('resize', handleResize);
  };

  // Set up event listener for scroll
  useEffect(() => {
    versiWhatsapp();
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div
        className="c-main-container  js-main-container"
        data-aos-easing="ease-out-back"
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        <Headers translation={t} />
        <Intros translation={t} />
        <Skills translation={t} />
        <Experiences translation={t} />
        <Certificates translation={t} />
        <Educations translation={t} />
        <Profiles translation={t} />
        <Portfolios translation={t} />
        <Clients translation={t} />
        <Footers translation={t} />

        {/* <div id="Games" style={{ display: 'block' }}>
          {showItems && (
            <div className="Games--box" onMouseLeave={handleClick}>
              <div>
                <a
                  href="https://zikriramdani.github.io/game-pacman/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pacman
                </a>
              </div>
              <div>
                <a
                  href="https://zikriramdani.github.io/game-tictactoe/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tictactoe
                </a>
              </div>
            </div>
          )}
          <div className="Games--btn" onClick={handleClick}>
            Ayo <b>bermain!</b>
          </div>
        </div> */}

        {/* <div id="DownloadPDF" style={{ display: 'block', width: '7.1rem' }}>
          <a
            href="assets/pdf/CVZikriRamdani.pdf"
            target="_blank"
            title="Download CV Zikri Ramdani"
            rel="noreferrer"
          >
            <div className="DownloadPDF--Box">
              <i className="fa fa-2x fa-file-pdf-o" style={{ color: 'black' }}></i>
              <div dangerouslySetInnerHTML={{ __html: t('Download CV') }}></div>
            </div>
          </a>
        </div> */}
      </div>
      <FloatingWhatsApp
        avatar="/assets/images/header/avatar.webp"
        phoneNumber="6281228883616"
        accountName="Zikri Ramdani"
        chatMessage={t('Hello is there anything I can help with')}
        statusMessage="Idza Binafsik | Proses"
        darkMode={true}
        // allowEsc={true}
        // allowClickAway
        // notification
        // notificationDelay={60000} // 1 minute
        // notificationSound
        styles={{ position: 'fixed', bottom: isMobile ? '64px' : '15px', right: '0.9rem' }}
        placeholder={t('Type a message')}
      />

      {showButton && (
        <button
          data-aos="fade-up"
          data-aos-delay="0"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: isMobile ? '132px' : '84px',
            right: '0.9rem',
            backgroundColor: 'rgb(224 168 13)',
            color: '#000',
            border: 'none',
            padding: '10px',
            borderRadius: '100%',
            cursor: 'pointer',
            zIndex: 1,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional: Add a shadow for better visibility
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60px',
            width: '60px'
          }}
          aria-label="Back to Top" // Accessibility improvement
        >
          <i className="fa fa-2x fa-chevron-up bounce-animation" style={{ color: '#000' }}></i>
        </button>
      )}
    </Fragment>
  );
};

export default Home;
