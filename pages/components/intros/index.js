import React from 'react';

const Intros = () => {
  return (
    <>
      <section className="o-section t-section">
        <div className="o-section__header-bg t-section__header"></div>
        <div className="o-section__content-bg t-section__content"></div>

        <div className="o-container">
          <div className="o-section__container" data-aos="fade-down" data-aos-delay="0">
            <header className="o-section__header t-section__header a-content">
              <div className="o-content">
                <h2 className="o-section__heading">Intro</h2>
                <div className="o-content__body o-section__description">
                  What I am all about.
                </div>
              </div>
            </header>

            <div className="o-section__content t-section__content">
              <div className="o-content">
                <div className="c-intro">
                  <div className="o-content__body a-content">
                    <p>
                      I am a web developers who lives in Kunciran Indah, Tangerang City.<br/>
                      - Want to Continue Learning dan<br/>
                      - Not easily give up ( No bug No life).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>    
  )
}
      
export default Intros;