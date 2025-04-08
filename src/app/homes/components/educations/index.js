'use client';
import React from 'react';

const Education = (props) => {
  const { translation } = props;
  return (
    <section className="o-section t-section" id="education">
      <div className="o-section__header-bg t-section__header"></div>
      <div className="o-section__content-bg t-section__content"></div>

      <div className="o-container">
        <div className="o-section__container" data-aos="fade-up" data-aos-delay="0">
          <header className="o-section__header t-section__header">
            <div className="o-content a-content">
              <h2 className="o-section__heading">{translation('Education.Education')}</h2>
              <div className="o-content__body o-section__description">
                {translation('Education.Lazy isnt in my vocabulary')}
              </div>
            </div>
          </header>

          <div className="o-section__content t-section__content u-pt-0">
            <div className="o-content">
              <div className="a-education-timeline c-timeline t-border-color o-section__full-top-space a-content">
                <div className="c-timeline__end t-border-color"></div>

                <div className="c-timeline__item">
                  <div className="c-timeline__point t-timeline__point t-primary-bg a-content"></div>

                  <div className="o-content">
                    <div className="o-grid a-content">
                      <div className="o-grid__col-md-5">
                        <div className="c-work__timeframe">2012 &ndash; 2016</div>
                        <h3 className="c-work__heading">STMIK PGRI TANGERANG</h3>
                        <h4 className="c-work__title">
                          {translation('Education.Sarjana Komputer')}
                        </h4>
                        <div className="c-work__location">Tangerang</div>
                      </div>

                      <div
                        className="o-grid__col-md-7"
                        dangerouslySetInnerHTML={{
                          __html: translation('Education.STMIK PGRI TANGERANG')
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
