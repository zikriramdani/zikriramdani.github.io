import React from 'react';

// import Github from '../assets/images/clients/github.png';
// import Google from '../assets/images/clients/google.png';
// import Html5 from '../assets/images/clients/html5.png';
// import Youtube from '../assets/images/clients/youtube.png';

const Clients = () => {
  return (
    <>
      <section className="o-section t-section">
        <div className="o-section__header-bg t-section__header">
        </div>
        <div className="o-section__content-bg t-section__content">
        </div>

        <div className="o-container">
          <div className="o-section__container">
            <header className="o-section__header t-section__header" data-aos="fade-left" data-aos-delay="0">
              <div className="o-content a-content">
                <h2 className="o-section__heading">Clients</h2>
                <div className="o-content__body o-section__description">
                  Happy people.
                </div>
              </div>
            </header>

            <div className="o-section__content t-section__content">
              <ul className="c-clients o-content">
                <li className="a-content" data-aos="fade-down" data-aos-delay="200">
                  <a href="https://github.com/zikriramdani" target="_blank" rel="noreferrer"><img alt="" src="/assets/images/clients/github.png" /></a>
                </li>

                <li className="a-content" data-aos="fade-down" data-aos-delay="400">
                  <a href="#" target="_blank" rel="noreferrer"><img alt="" src="/assets/images/clients/google.png" /></a>
                </li>


                <li className="a-content" data-aos="fade-down" data-aos-delay="600">
                  <a href="#" target="_blank" rel="noreferrer"><img alt="" src="/assets/images/clients/html5.png" /></a>
                </li>

                <li className="a-content" data-aos="fade-down" data-aos-delay="800">
                  <a href="#" target="_blank" rel="noreferrer"><img alt="" src="/assets/images/clients/youtube.png" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Clients;