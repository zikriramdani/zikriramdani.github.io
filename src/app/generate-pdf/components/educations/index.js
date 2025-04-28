'use client';
import React, { Fragment } from 'react';

const Education = (props) => {
  const { translation } = props;
  return (
    <section className="o-section t-section" id="education">
      <div className="o-section__header-bg t-section__header"></div>
      <div className="o-section__content-bg t-section__content"></div>

      <div className="o-container">
        <div className="o-section__container">
          <header
            className="o-section__header t-section__header"
            style={{
              padding: '1.75rem 1.75rem 0'
            }}
          >
            <div className="o-content a-content">
              <h2 className="o-section__heading">{translation('Education.Education')}</h2>
              <div className="o-content__body o-section__description">
                {translation('Education.Lazy isnt in my vocabulary')}
              </div>
            </div>
          </header>

          <div
            className="o-section__content t-section__content"
            style={{
              padding: '1.75rem 1.75rem 0'
            }}
          >
            <div className="o-content pb-0">
              <div className="a-education-timeline t-border-color a-content">
                <div className="c-timeline__item">
                  <div className="o-content pb-0">
                    <div className="o-grid a-content">
                      <div className="o-grid__col-md-5">
                        <div className="c-work__timeframe">2012 &ndash; 2016</div>
                        <h3 className="c-work__heading">STMIK PGRI TANGERANG</h3>
                        <h4 className="c-work__title">
                          {translation('Education.Sarjana Komputer')}
                        </h4>
                        <div
                          className="c-work__location"
                          dangerouslySetInnerHTML={{
                            __html: translation('Education.IPK')
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
      </div>
    </section>
  );
};

export default Education;
