import React, { useEffect } from "react";
import Heads from "../components/Heads";
import Preloaders from "../components/Preloaders";
import Headers from "../components/Headers";
import Footers from "../components/Footers";

import Intros from './components/intros'
import Skills from './components/skills';
import Experiences from './components/experiences';
import Certificates from './components/Certificates'
import Educations from './components/educations';
import Profiles from './components/profiles';
import Portfolios from './components/portfolios';
import Clients from './components/clients';

import FloatingWhatsApp from 'react-floating-whatsapp';

const Home = () => {  
  return (
    <>
      <Heads />
      <Preloaders />
      <div className="c-main-container  js-main-container" 
        data-aos-easing="ease-out-back" data-aos-duration="1000" data-aos-delay="0">
        <Headers />
        <Intros />
        <Skills />
        <Experiences />
        <Certificates />
        <Educations />
        <Profiles />
        <Portfolios />
        <Clients/>
        <Footers />

        <div id="DownloadPDF" style={{display: "block"}}>
          <a href="assets/pdf/CVZikriRamdani.pdf" target="_blank" title="Download CV Zikri Ramdani" rel="noreferrer">
            <div className="DownloadPDF--Box">
                <i className="fa fa-2x fa-file-pdf-o" style={{ color: "black" }}></i>
                <div>
                    <b>Download <small>CV</small></b>
                </div>
            </div>
          </a>
        </div>

        {/* <div id="WAButton"></div> */}

      </div>
      <FloatingWhatsApp 
        avatar="/assets/images/header/avatar-new.jpeg"
        phoneNumber="6281228883616"
        accountName="Zikri Ramdani"
        chatMessage="Hallo, ada yang bisa dibantu?"
        statusMessage=""
        darkMode={true}
        allowEsc={true}
        allowClickAway 
        notification
        notificationDelay={60000} // 1 minute
        notificationSound
        styles={{position: "fixed", bottom: "15px"}} />
    </>    
  )
}

export default Home;