import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getListExperiences } from '../../../redux/action/experiences/creator';

const Experiences = () => {
  const experiencesList = useSelector((state) => state.experiences.experiencesList);
  const dispatch = useDispatch();

  const fetchExperiencesList = async () => {
    dispatch(getListExperiences());
  };

  useEffect(() => {
    fetchExperiencesList();
  }, []);

  return (
    <section className="o-section  t-section  ">
      <div className="o-section__header-bg  t-section__header"></div>
      <div className="o-section__content-bg  t-section__content"></div>

      <div className="o-container">
        <div className="o-section__container">
          <header
            className="o-section__header  t-section__header"
            data-aos="fade-left"
            data-aos-delay="0"
          >
            <div className="o-content">
              <h2 className="o-section__heading">Experience</h2>
              <div className="o-content__body  o-section__description">
                Yes. I&#39;ve been around.
              </div>
            </div>
          </header>

          <div className="o-section__content  t-section__content  u-pb-0">
            <div className="a-experience-timeline  c-timeline  t-border-color">
              {experiencesList.map((item, i) => (
                <div className="c-timeline__item" key={i} data-aos="fade-up" data-aos-delay="0">
                  <div className="c-timeline__point  t-timeline__point  t-primary-bg"></div>
                  <div className="o-content">
                    <div className="o-grid">
                      <div className="o-grid__col-md-5">
                        <div className="c-work__timeframe">
                          {item.start_date} &ndash; {item.end_date}
                        </div>
                        <h3 className="c-work__heading">{item.name_pt}</h3>
                        <h4 className="c-work__title">
                          {item.jenis_pekerjaan} - {item.position}
                        </h4>
                        <div className="c-work__location">{item.location}</div>
                      </div>
                      <div className="o-grid__col-md-7">
                        <h4>Job Desc:</h4>
                        <div dangerouslySetInnerHTML={{ __html: item.job_desc }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
