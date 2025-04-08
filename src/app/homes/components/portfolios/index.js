'use client';
import React, { useState, useEffect } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { useSelector, useDispatch } from 'react-redux';
import { getListPortfolios } from '@/redux/action/portfolios/creator';

const Portfolios = (props) => {
  const { translation } = props;
  const portfoliosList = useSelector((state) => state.portfolios.portfoliosList);
  const dispatch = useDispatch();

  const [index, setIndex] = useState(-1);
  const slides = portfoliosList.map(({ src, width, height, image }) => ({
    src: image,
    srcSet: portfoliosList.map((image) => ({
      src: image.image
    }))
  }));

  const fetchPortfoliosList = async () => {
    dispatch(getListPortfolios());
  };

  useEffect(() => {
    fetchPortfoliosList();
  }, []);

  return (
    <section className="o-section t-section" id="portfolio">
      <div className="o-section__header-bg t-section__header"></div>
      <div className="o-section__content-bg t-section__content"></div>

      <div className="o-container">
        <div className="o-section__container">
          <header
            className="o-section__header t-section__header"
            data-aos="fade-left"
            data-aos-delay="0"
          >
            <div className="o-content a-content">
              <h2 className="o-section__heading">{translation('Portfolio.Portfolio')}</h2>
              <div className="o-content__body o-section__description">
                {translation('Portfolio.Here it gets interesting')}
              </div>
            </div>
          </header>

          <div className="o-section__content t-section__content o-section__full-bottom-space">
            <div className="o-grid o-grid--gallery">
              {portfoliosList.map((item, i) => (
                <div
                  className="o-grid__col-sm-6 o-grid__col-xs-6 a-content"
                  key={i}
                  data-aos="flip-right"
                  data-aos-delay="0"
                >
                  <a
                    className="c-image-overlay t-image-overlay js-lightbox"
                    data-lightbox-gallery="portfolio"
                    data-lightbox-hidpi=""
                    title={item.name}
                    onClick={() => setIndex(i)}
                    rel="nofollow"
                    href="#portfolio"
                  >
                    <img alt="" src={item.image_thumb} />
                    <div className="c-image-overlay__content">
                      <h3 dangerouslySetInnerHTML={{ __html: item.name }}></h3>
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
  );
};

export default Portfolios;
