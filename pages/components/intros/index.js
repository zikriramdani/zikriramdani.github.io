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
                <div className="o-content__body o-section__description">What I am all about.</div>
              </div>
            </header>

            <div className="o-section__content t-section__content">
              <div className="o-content">
                <div className="c-intro">
                  <div className="o-content__body a-content">
                    <p>
                      Halo! Nama saya Zikri Ramdani, dan saya adalah seorang Web Developer dengan
                      lebih dari 5 tahun pengalaman di bidang pengembangan web. Saya memiliki
                      passion untuk menciptakan solusi web yang inovatif dan user-friendly, serta
                      keahlian dalam teknologi modern untuk membangun aplikasi yang efisien dan
                      berkinerja tinggi.
                      <br />
                      <br />
                      <b>Tujuan:</b>
                      <br />
                      Saya berkomitmen untuk terus belajar dan berkembang dalam teknologi,
                      berinovasi, serta memberikan solusi web kreatif dan efektif. Saya juga
                      berusaha untuk selalu mengikuti tren terbaru di industri dan menerapkan
                      praktik terbaik dalam setiap proyek.
                      <br />
                      <br />
                      Saya sangat antusias untuk membawa keahlian dan pengalaman saya ke tim Anda,
                      dan berharap dapat berkontribusi untuk kesuksesan proyek Anda. Terima kasih
                      atas perhatian Anda!
                    </p>
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
    </>
  );
};

export default Intros;
