import React from 'react';

// import Github from '../assets/images/clients/github.png';
// import Google from '../assets/images/clients/google.png';
// import Html5 from '../assets/images/clients/html5.png';
// import Youtube from '../assets/images/clients/youtube.png';

const Clients = () => {
  return (
    <>
      <section className="o-section t-section">
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
                <h2 className="o-section__heading">Repositories</h2>
                <div className="o-content__body o-section__description">Example Source Code</div>
              </div>
            </header>

            <div className="o-section__content t-section__content">
              <div className="o-grid">
                <div
                  className="o-grid__col-xl-4 o-grid__col-sm-6"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <div className="o-content a-content">
                    <a
                      className="t-link-container"
                      href="https://github.com/zikriramdani/aplikasi-sederhana-reactjs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="o-media o-media--block">
                        {/* <div className="o-media__figure">
                          <div className="c-profile__icon">
                            <i className="fa fa-lg fa-envira"></i>
                          </div>
                        </div> */}
                        <div className="o-media__body o-content__body">
                          <h3 className="t-link-container__item">aplikasi-sederhana-reactjs</h3>
                        </div>
                      </div>
                    </a>
                    <div>
                      Demo:
                      <a
                        href="https://aplikasisederhanareact.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>KLIK DISINI!</p>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="o-grid__col-xl-4 o-grid__col-sm-6"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <div className="o-content a-content">
                    <a
                      className="t-link-container"
                      href="https://github.com/zikriramdani/app-vending-machine"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="o-media o-media--block">
                        {/* <div className="o-media__figure">
                          <div className="c-profile__icon">
                            <i className="fa fa-lg fa-envira"></i>
                          </div>
                        </div> */}
                        <div className="o-media__body o-content__body">
                          <h3 className="t-link-container__item">aplikasi-sederhana-nextjs</h3>
                        </div>
                      </div>
                    </a>
                    <div>
                      Demo:
                      <a
                        href="https://zikriramdani.github.io/app-vending-machine/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>KLIK DISINI!</p>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="o-grid__col-xl-4 o-grid__col-sm-6"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <div className="o-content a-content">
                    <a
                      className="t-link-container"
                      href="https://github.com/zikriramdani/employee-managament"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="o-media o-media--block">
                        {/* <div className="o-media__figure">
                          <div className="c-profile__icon">
                            <i className="fa fa-lg fa-envira"></i>
                          </div>
                        </div> */}
                        <div className="o-media__body o-content__body">
                          <h3 className="t-link-container__item">aplikasi-sederhana-angular</h3>
                        </div>
                      </div>
                    </a>
                    <div>
                      Demo:
                      <a
                        href="https://employee-management.netlify.app"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>KLIK DISINI!</p>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="o-grid__col-xl-4 o-grid__col-sm-6"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <div className="o-content a-content">
                    <a
                      className="t-link-container"
                      href="https://github.com/zikriramdani/vuejs2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="o-media o-media--block">
                        {/* <div className="o-media__figure">
                          <div className="c-profile__icon">
                            <i className="fa fa-lg fa-envira"></i>
                          </div>
                        </div> */}
                        <div className="o-media__body o-content__body">
                          <h3 className="t-link-container__item">aplikasi-sederhana-vuejs</h3>
                        </div>
                      </div>
                    </a>
                    <div>
                      Demo:
                      <a href="https://vuejs2.netlify.app/" target="_blank" rel="noreferrer">
                        <p>KLIK DISINI!</p>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="o-grid__col-xl-4 o-grid__col-sm-6"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <div className="o-content a-content">
                    <a
                      className="t-link-container"
                      href="https://github.com/zikriramdani/laravel2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="o-media o-media--block">
                        {/* <div className="o-media__figure">
                          <div className="c-profile__icon">
                            <i className="fa fa-lg fa-envira"></i>
                          </div>
                        </div> */}
                        <div className="o-media__body o-content__body">
                          <h3 className="t-link-container__item">aplikasi-sederhana-laravel</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div
                  className="o-grid__col-xl-4 o-grid__col-sm-6"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <div className="o-content a-content">
                    <a
                      className="t-link-container"
                      href="https://github.com/zikriramdani?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="o-media o-media--block">
                        <div className="o-media__body o-content__body">
                          <h3 className="t-link-container__item">See All</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
