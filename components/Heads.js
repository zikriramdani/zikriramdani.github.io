import Head from "next/head";
import Script from "next/script";

const Heads = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="manifest" href="https://zikriramdani.github.io/manifest.json" />

        <title>CV Zikri Ramdani</title>

        <meta content="CV Zikri Ramdani" property="og:title" />
        <meta content="I am a web developers." property="og:description" />
        <meta content="https://zikriramdani.github.io/assets/images/header/avatar-new.jpeg" property="og:image" />
        <meta content="https://zikriramdani.github.io/" property="og:url" />

        {/* <!-- Google Font: Lato --> */}
        {/* <link rel="stylesheet" href="/assets/fonts/Lato/fonts.css"  /> */}
        
        {/* <!-- FontAwesome --> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        {/* <!-- Nivo Lightbox--> */}
        {/* <link rel="stylesheet" href="/assets/plugins/nivo-lightbox/nivo-lightbox.css" />
        <link rel="stylesheet" href="/assets/plugins/nivo-lightbox/themes/default/default.css" /> */}

        {/* <!-- Main CSS --> */}
        {/* <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/style.css" /> */}

        {/* <!-- jQuery --> */}
        {/* <script type="text/javascript" src="/assets/js/jquery.min.js" async /> */}

        {/* <!-- dense.js (Retina plugin) --> */}
        {/* <script type="text/javascript" src="assets/js/dense.js" /> */}

        {/* <!-- Nivo Lightbox --> */}
        {/* <script type="text/javascript" src="assets/plugins/nivo-lightbox/nivo-lightbox.min.js" /> */}

        {/* <!-- ScrollReveal --> */}
        {/* <script type="text/javascript" src="/assets/js/scrollreveal.min.js" async /> */}

        {/* <!-- Main JS --> */}
        {/* <script type="text/javascript" src="/assets/js/main.js" async /> */}

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-72526645-10"></script> */}
        {/* <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-72526645-10');
        </script> */}

        {/* <!-- Floating Whatsapp --> */}
        {/* <link rel="stylesheet" href="/whatsapp/floating-wpp.css" /> */}
        {/* <script type="text/javascript" src="/assets/whatsapp/floating-wpp.js" async /> */}
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-72526645-10"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-72526645-10');
        `}
      </Script>
    </>
  )
}

export default Heads;