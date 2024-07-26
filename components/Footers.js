import React, { useState } from 'react';
import Link from 'next/link';

const Footers = () => {
  const [copySuccess, setCopySuccess] = useState('Copied!');

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied Successfully!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  const mouseOut = async () => {
    setCopySuccess('Copied!');
  };

  return (
    <section className="o-section  t-section  o-section--footer">
      <div className="o-section__header-bg  t-section__header"></div>
      <div className="o-section__content-bg  t-section__content"></div>

      <div className="o-container">
        <div className="o-section__container">
          <header
            className="o-section__header  t-section__header"
            data-aos="fade-left"
            data-aos-delay="0"
          >
            <div className="o-content a-content">
              <h2 className="o-section__heading">Contact</h2>
              <div className="o-content__body  o-section__description">Call me, maybe.</div>
            </div>
          </header>

          <div className="o-section__content  t-section__content  ">
            <div className="c-footer__contact">
              <div className="o-grid">
                <div className="o-grid__col-md-3  o-grid__col-sm-6">
                  <div className="o-content">
                    <div
                      className="o-content__body a-content"
                      data-aos="fade-down"
                      data-aos-delay="200"
                    >
                      <h4>Location</h4>
                      <address>Kunciran Indah, Kota Tangerang</address>
                    </div>
                  </div>
                </div>

                <div className="o-grid__col-md-3  o-grid__col-sm-6">
                  <div className="o-content">
                    <div
                      className="o-content__body a-content"
                      data-aos="fade-down"
                      data-aos-delay="400"
                    >
                      <h4>Phone</h4>
                      <p>
                        <a href="tel:+6281228883616">0812-2888-3616</a>
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

                <div className="o-grid__col-md-3  o-grid__col-sm-6">
                  <div className="o-content">
                    <div
                      className="o-content__body a-content"
                      data-aos="fade-down"
                      data-aos-delay="600"
                    >
                      <h4>Web</h4>
                      <p>
                        <a
                          href="https://zikriramdani.github.io"
                          target="_blank"
                          className="t-link-container"
                          rel="noreferrer"
                        >
                          <span className="t-link-container__item--blended">
                            zikriramdani.github.io
                          </span>
                        </a>
                        <a
                          href="http://zikriramdani.blogspot.com"
                          target="_blank"
                          className="t-link-container"
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

                <div className="o-grid__col-md-3  o-grid__col-sm-6">
                  <div className="o-content">
                    <div
                      className="o-content__body a-content"
                      data-aos="fade-down"
                      data-aos-delay="800"
                    >
                      <a
                        href="mailto:zikriramdani13@yahoo.com"
                        target="_blank"
                        className="t-link-container"
                        rel="noreferrer"
                      >
                        <h4>Email</h4>
                        <p>
                          <span className="t-link-container__item--blended">
                            zikriramdani13@yahoo.com
                          </span>
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="c-footer__contact-divider" />

            <div className="o-content">
              <div className="c-footer__bottom">
                <div className="c-footer__brand">
                  <div className="c-brand">
                    <div className="o-content__body">
                      <h1 className="c-brand__title  t-title">
                        <span className="c-brand__sizer  c-brand__sizer--sm a-content">
                          <span className="a-footer  c-brand__first-word  t-title__first-word">
                            Zikri
                          </span>
                          <span className="a-footer c-brand__second-word t-title__second-word">
                            Ramdani
                          </span>
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>

                <ul className="c-footer__social-buttons  c-social-buttons  o-content__body">
                  <li className="a-footer a-content">
                    <a
                      href="https://zikriramdani.github.io"
                      className="c-social-button  t-social-button"
                    >
                      <i className="fa  fa-lg  fa-dribbble"></i>
                    </a>
                  </li>
                  <li className="a-footer a-content">
                    <a
                      href="http://zikriramdani.blogspot.com"
                      target="_blank"
                      className="c-social-button  t-social-button"
                      rel="noreferrer"
                    >
                      <i className="fa  fa-lg  fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footers;
