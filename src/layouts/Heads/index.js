'use client';

import Head from 'next/head';
import Script from 'next/script';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const MetaHead = ({
  title,
  description,
  author,
  keywords,
  themeColor,
  manifest,
  url,
  image,
  stylesheet
}) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'UA-72526645-10'; // ganti dengan ID-mu

  return (
    <Fragment>
      <Head>
        {/* Title & Viewport */}
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        {/* SEO & Theming */}
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="keywords" content={keywords} />
        <meta name="theme-color" content={themeColor} />
        <link rel="manifest" href={manifest} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="16x16" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={title} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content={title} />

        {/* Optional custom styles */}
        {stylesheet}
      </Head>

      {/* Google Analytics (GA4) */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="lazyOnload"
          />
          <Script id="gtag-init" strategy="lazyOnload">
            {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname
        });
      `}
          </Script>
        </>
      )}
    </Fragment>
  );
};

MetaHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  themeColor: PropTypes.string,
  manifest: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  stylesheet: PropTypes.node
};

MetaHead.defaultProps = {
  keywords: '',
  themeColor: '#ffffff',
  manifest: '/manifest.json',
  url: '',
  image: '',
  stylesheet: null
};

export default MetaHead;
