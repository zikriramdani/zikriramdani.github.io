import React, { useState, useEffect } from 'react';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { useSelector, useDispatch } from 'react-redux';
import { getListCertificates } from "../../../redux/action/certificates/creator";

const Certificates = () => {
  const certificatesList = useSelector((state) => state.certificates.certificatesList)
  const dispatch = useDispatch();

  const [index, setIndex] = useState(-1);
  const slides = certificatesList.map(({ src, width, height, image }) => ({
    src: image,
    srcSet: certificatesList.map((image) => ({
      src: image.image
    })),
  }));

  const fetchCertificatesList = async () => {
    dispatch(getListCertificates());
  };

  useEffect(() => {
    fetchCertificatesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="o-section t-section">
        <div className="o-section__header-bg t-section__header"></div>
        <div className="o-section__content-bg t-section__content"></div>

        <div className="o-container">
          <div className="o-section__container">
            <header className="o-section__header t-section__header" data-aos="fade-left" data-aos-delay="0">
              <div className="o-content a-content">
                <h2 className="o-section__heading">Certificate</h2>
                <div className="o-content__body o-section__description">
                </div>
              </div>
            </header>

            <div className="o-section__content t-section__content o-section__full-bottom-space">
              <div className="o-grid o-grid--gallery">

                {certificatesList.map((item, i) => (
                  <div className="o-grid__col-sm-6 o-grid__col-xs-12 a-content" key={i} data-aos="flip-right" data-aos-delay={i+1 + "00"}>
                    <a className="c-image-overlay t-image-overlay js-lightbox" 
                    data-lightbox-hidpi="" data-lightbox-gallery="portfolio"
                    title={item.name} onClick={() => setIndex(i)}>
                      <img alt={item.name} src={item.image_thumb} />
                      <div className="c-image-overlay__content">
                        <h3>{item.name}</h3>
                        <hr className="c-image-overlay__deco-line t-image-overlay__deco-line" />
                      </div>
                    </a>
                  </div>
                ))}

                <Lightbox
                  slides={slides}
                  open={index >= 0}
                  index={index}
                  close={() => setIndex(-1)}
                  // enable optional lightbox plugins
                  plugins={[Fullscreen, Thumbnails]}
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>    
  )
}

export default Certificates;