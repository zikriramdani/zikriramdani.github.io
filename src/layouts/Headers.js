import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import MobileBottomNavigation from './MobileBottomNavigation';
import Navigation from './Navigation';

const Header = (props) => {
  const { translation } = props;

  const [copySuccess, setCopySuccess] = useState(translation('Copied!'));

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess(translation('Copied Successfully!'));
    } catch (err) {
      setCopySuccess(translation('Failed to copy!'));
    }
  };

  const mouseOut = async () => {
    setCopySuccess(translation('Copied!'));
  };

  useEffect(() => {
    setCopySuccess(translation('Copied!'));
  }, [translation]);

  return (
    <section className="o-section o-section--header t-section t-section--header" id="top">
      <div className="DownloadPDF" data-aos="fade-left" data-aos-delay="200">
        <a
          href="assets/pdf/CVZikriRamdani.pdf"
          target="_blank"
          title="Download CV Zikri Ramdani"
          rel="noreferrer"
        >
          <div className="DownloadPDF--Box">
            {/* <i className="fa fa-2x fa-file-pdf-o" style={{ color: 'black' }}></i> */}
            <div dangerouslySetInnerHTML={{ __html: translation('Download CV') }}></div>
          </div>
        </a>
      </div>
      <LanguageSwitcher translation={translation} />
      <div className="c-header">
        <div className="o-section__header-bg t-section__header"></div>
        <div className="o-section__content-bg t-section__content"></div>

        <div className="o-container">
          <div className="o-section__container">
            <header className="o-section__header c-header__header t-section__header">
              <div className="c-header__inner-header">
                <div className="c-header__avatar">
                  <div className="a-header c-avatar" data-aos="fade-up" data-aos-delay="0">
                    <img
                      alt="zikriramdani"
                      className="c-avatar__img"
                      src="/assets/images/header/avatar.webp"
                    />
                  </div>
                </div>
              </div>
            </header>

            <div className="o-section__content c-header__content t-section__content">
              <div className="c-header__inner-content">
                <div className="c-header__top">
                  <div className="c-header__brand">
                    <div className="c-brand">
                      <h1 className="c-brand__title t-title">
                        <span className="c-brand__sizer">
                          <span
                            className="a-header c-brand__first-word t-title__first-word"
                            data-aos="fade-up"
                            data-aos-delay="200"
                          >
                            Zikri
                          </span>
                          <span
                            className="a-header c-brand__second-word t-title__second-word"
                            data-aos="fade-up"
                            data-aos-delay="400"
                          >
                            Ramdani
                          </span>
                        </span>
                      </h1>

                      <h2 className="a-header c-brand__sub-title t-sub-title">
                        <span className="c-brand__sizer" data-aos="fade-up" data-aos-delay="600">
                          {translation('Headers.Web Developer')}
                        </span>
                      </h2>
                    </div>
                  </div>

                  <ul
                    className="c-header__social-buttons c-social-buttons"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <li className="a-footer">
                      <a
                        className="c-social-button t-social-button"
                        href="https://zikriramdani.github.io"
                      >
                        <i className="fa fa-lg fa-dribbble"></i>
                      </a>
                    </li>

                    <li className="a-footer">
                      <a
                        className="c-social-button t-social-button"
                        href="http://zikriramdani.blogspot.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa fa-lg fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="c-header__contact">
                  <hr className="a-header c-header__contact-divider" />
                  <div className="o-grid">
                    <div
                      className="o-grid__col-md-3 o-grid__col-sm-6"
                      data-aos="fade-up"
                      data-aos-delay="800"
                    >
                      <div className="a-header o-content">
                        <div className="o-content__body">
                          <h4>{translation('Headers.Location')}</h4>
                          <address>{translation('Kunciran Indah Tangerang City')}</address>
                        </div>
                      </div>
                    </div>

                    <div
                      className="o-grid__col-md-3 o-grid__col-sm-6"
                      data-aos="fade-up"
                      data-aos-delay="1000"
                    >
                      <div className="a-header o-content">
                        <div className="o-content__body">
                          <h4>{translation('Headers.Phone')}</h4>
                          <p>
                            <a
                              href="tel:+6281228883616"
                              onClick={() => copyToClipBoard('081228883616')}
                            >
                              0812-2888-3616
                            </a>
                            <br />
                            <span
                              onClick={() => copyToClipBoard('081228883616')}
                              onMouseOut={mouseOut}
                              style={{ cursor: 'pointer' }}
                            >
                              {copySuccess}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="o-grid__col-md-3 o-grid__col-sm-6"
                      data-aos="fade-up"
                      data-aos-delay="1200"
                    >
                      <div className="a-header o-content">
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
                      data-aos="fade-up"
                      data-aos-delay="1400"
                    >
                      <div className="a-header o-content">
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
      </div>
      <Navigation translation={translation} />
      <MobileBottomNavigation translation={translation} />
    </section>
  );
};

export default Header;