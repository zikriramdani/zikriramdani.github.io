import React from 'react';

// import Github from '../assets/images/clients/github.png';
// import Google from '../assets/images/clients/google.png';
// import Html5 from '../assets/images/clients/html5.png';
// import Youtube from '../assets/images/clients/youtube.png';

const Clients = (props) => {
  const { translation } = props;
  return (
    <section className="o-section t-section" id="repositories">
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
              <h2 className="o-section__heading">{translation('Repositories.Repositories')}</h2>
              <div className="o-content__body o-section__description">
                {translation('Repositories.Example Source Code')}
              </div>
            </div>
          </header>

          <div className="o-section__content t-section__content">
            <div className="o-grid">
              <div
                className="o-grid__col-xl-4 o-grid__col-xs-6"
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
                        <h3 className="t-link-container__item">CRUD (React.js)</h3>
                      </div>
                    </div>
                  </a>
                  <div>
                    {translation('Repositories.Demo')}
                    <a
                      href="https://aplikasisederhanareact.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p>{translation('Repositories.CLICK HERE')}</p>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="o-grid__col-xl-4 o-grid__col-xs-6"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                <div className="o-content a-content">
                  <a
                    className="t-link-container"
                    href="https://github.com/zrdevelopers/berkah-ramadhan"
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
                        <h3 className="t-link-container__item">E-Commerce (Next.js)</h3>
                      </div>
                    </div>
                  </a>
                  <div>
                    {translation('Repositories.Demo')}
                    <a
                      href="https://zrdevelopers.github.io/berkah-ramadhan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p>{translation('Repositories.CLICK HERE')}</p>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="o-grid__col-xl-4 o-grid__col-xs-6"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                <div className="o-content a-content">
                  <a
                    className="t-link-container"
                    href="https://github.com/zrdevelopers/cara-mudah-wujudkan-semua-kebutuhan"
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
                        <h3 className="t-link-container__item">SolusiDana (Next.js)</h3>
                      </div>
                    </div>
                  </a>
                  <div>
                    {translation('Repositories.Demo')}
                    <a
                      href="https://zrdevelopers.github.io/cara-mudah-wujudkan-semua-kebutuhan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p>{translation('Repositories.CLICK HERE')}</p>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="o-grid__col-xl-4 o-grid__col-xs-6"
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
                    {translation('Repositories.Demo')}
                    <a
                      href="https://employee-management.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p>{translation('Repositories.CLICK HERE')}</p>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="o-grid__col-xl-4 o-grid__col-xs-6"
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
                className="o-grid__col-xl-4 o-grid__col-xs-6"
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
                        <h3 className="t-link-container__item">
                          {translation('Repositories.See All')}
                        </h3>
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
  );
};

export default Clients;
