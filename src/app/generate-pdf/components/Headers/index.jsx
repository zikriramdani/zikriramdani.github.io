'use client';
import React from 'react';

const Index = (props) => {
  const { translation } = props;

  return (
    <section className="o-section t-section" id="intro">
      <div className="o-section__header-bg t-section__header"></div>
      <div className="o-section__content-bg t-section__content"></div>

      <div className="o-container">
        <div className="o-section__container">
          <header className="o-section__header t-section__header a-content">
            <div className="o-content">
            <img
              alt="zikriramdani"
              className="c-avatar__img"
              src="/assets/images/header/avatar.webp"
              style={{width: '100px'}}
            />
            </div>
          </header>

          <div className="t-section__content"
          style={{
            padding: '1.75rem 1.75rem 0'
          }}>
            <div className="o-content">
              <div className="c-intro mb-3">
                <div
                  className="o-content__body a-content"
                  // dangerouslySetInnerHTML={{ __html: translation('Intro.Zikri Ramdani') }}
                >
                  <h1 className='mb-0'>Zikri Ramdani</h1>
                  <h2 className="a-header c-brand__sub-title t-sub-title ml-0">
                    <span className="c-brand__sizer">
                      {translation('Headers.Web Developer')}
                    </span>
                  </h2>
                </div>
              </div>

              <div className="">
                  <hr className="mb-3" />
                  <div className="o-grid">
                    <div
                      className="o-grid__col-md-3 o-grid__col-sm-6"
                    >
                      <div className="a-header">
                        <div className="o-content__body">
                          <h4>{translation('Headers.Location')}</h4>
                          <address>{translation('Kunciran Indah Tangerang City')}</address>
                        </div>
                      </div>
                    </div>

                    <div
                      className="o-grid__col-md-3 o-grid__col-sm-6"
                    >
                      <div className="a-header">
                        <div className="o-content__body">
                          <h4>{translation('Headers.Phone')}</h4>
                          <p>
                            <a
                              href="tel:+6281228883616"
                            >
                              0812-2888-3616
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="o-grid__col-md-3 o-grid__col-sm-6"
                    >
                      <div className="a-header">
                        <div className="o-content__body">
                          <h4>{translation('Headers.Web')}</h4>

                          <p>
                            <a
                              className="t-link-container"
                              href="https://zikriramdani.github.io"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="t-link-container__item--blended">
                                zikriramdani.github.io
                              </span>
                            </a>{' '}
                            <a
                              className="t-link-container"
                              href="http://zikriramdani.blogspot.com"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="t-link-container__item--blended">
                                zikriramdani.blogspot.com
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="o-grid__col-md-3 o-grid__col-sm-6"
                    >
                      <div className="a-header">
                        <div className="o-content__body">
                          <a
                            className="t-link-container"
                            href="mailto:zikriramdani13@yahoo.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <h4>{translation('Headers.Email')}</h4>
                            <p>
                              <span className="t-link-container__item--blended">
                                zikriramdani13@yahoo.com
                              </span>
                            </p>
                          </a>
                          <a
                            href="mailto:zikriramdani.developer@gmail.com"
                            target="_blank"
                            className="t-link-container"
                            rel="noreferrer"
                          >
                            <p>
                              <span className="t-link-container__item--blended">
                                zikriramdani.developer@gmail.com
                              </span>
                            </p>
                          </a>
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

export default Index;
