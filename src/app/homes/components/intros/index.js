import React from 'react';

const Intros = (props) => {
  const { translation } = props;

  return (
    <section className="o-section t-section" id="intro">
      <div className="o-section__header-bg t-section__header"></div>
      <div className="o-section__content-bg t-section__content"></div>

      <div className="o-container">
        <div className="o-section__container" data-aos="fade-down" data-aos-delay="0">
          <header className="o-section__header t-section__header a-content">
            <div className="o-content">
              <h2 className="o-section__heading">{translation('Intro.Intro')}</h2>
              <div className="o-content__body o-section__description">
                {translation('Intro.What I am all about')}
              </div>
            </div>
          </header>

          <div className="o-section__content t-section__content">
            <div className="o-content">
              <div className="c-intro">
                <div
                  className="o-content__body a-content"
                  dangerouslySetInnerHTML={{ __html: translation('Intro.Zikri Ramdani') }}
                >
                  {/* <p>
                      👋 I am a Web developers who lives in Kunciran Indah, Tangerang City
                      <br />
                      🌱 Want to Continue Learning <b>Web Development</b>
                      <br />
                      💞️ Not easily give up
                      <br/>
                      - 📝 I sometimes write articles on [https://zikriramdani.blogspot.com)
                    </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intros;
