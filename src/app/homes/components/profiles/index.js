import React from 'react';

const Profiles = (props) => {
  const { translation } = props;
  return (
    <section className="o-section t-section" id="profiles">
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
              <h2 className="o-section__heading">{translation('Profiles.Profiles')}</h2>
              <div className="o-content__body o-section__description">
                {translation('Profiles.Busy as usual')}
              </div>
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
                    href="https://www.linkedin.com/in/zikri-ramdani"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="o-media o-media--block">
                      <div className="o-media__figure">
                        <div className="c-profile__icon">
                          <i className="fa fa-lg fa-envira"></i>
                        </div>
                      </div>
                      <div className="o-media__body o-content__body">
                        <h3 className="t-link-container__item">LinkedIn</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div
                className="o-grid__col-xl-4 o-grid__col-sm-6"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div className="o-content a-content">
                  <a
                    className="t-link-container"
                    href="https://github.com/zikriramdani/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="o-media o-media--block">
                      <div className="o-media__figure">
                        <div className="c-profile__icon">
                          <i className="fa fa-lg fa-github-alt"></i>
                        </div>
                      </div>
                      <div className="o-media__body o-content__body">
                        <h3 className="t-link-container__item">GitHub</h3>
                        <p>{translation('Profiles.All my open source projects for you analyze')}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div
                className="o-grid__col-xl-4 o-grid__col-sm-6"
                data-aos="fade-down"
                data-aos-delay="600"
              >
                <div className="o-content a-content">
                  <a
                    className="t-link-container"
                    href="https://www.hackerrank.com/profile/zikriramdani_de1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="o-media o-media--block">
                      <div className="o-media__figure">
                        <div className="c-profile__icon">
                          <i className="fa fa-lg fa-medium"></i>
                        </div>
                      </div>
                      <div className="o-media__body o-content__body">
                        <h3 className="t-link-container__item">HackerRank</h3>
                        {/* <p>
                          {translation(
                            'Profiles.Yes Im also a blogger and here you find my writings'
                          )}
                        </p> */}
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

export default Profiles;
