'use client';
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getListSkills } from '@/redux/action/skills/creator';

const Skills = (props) => {
  const { translation } = props;
  const skillsList = useSelector((state) => state.skills.skillsList);
  const dispatch = useDispatch();

  const fetchSkillsList = async () => {
    dispatch(getListSkills());
  };

  useEffect(() => {
    fetchSkillsList();
  }, []);

  return (
    <section className="o-section  t-section  " id="skills">
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
              <h2 className="o-section__heading">{translation('Skills.Skills')}</h2>
              <div className="o-content__body  o-section__description">
                {translation('Skills.Progress bars anyone')}
              </div>
            </div>
          </header>

          <div className="o-section__content  t-section__content  ">
            <div className="o-grid">
              {skillsList.map((item, i) => (
                <div
                  // className="o-grid__col-xs-6"
                  className={`${
                    (i + 1) % 21 === 0 ? 'o-grid__col-xs-12 o-grid__col-md-6' : 'o-grid__col-xs-6'
                  }`}
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay="0"
                >
                  <div className="o-content a-content">
                    <div className="o-media  o-media--block">
                      <div className="o-media__figure">
                        <div className="c-number  t-primary-color">
                          {item.percents}
                          <small>%</small>
                        </div>
                      </div>
                      <div className="o-media__body text-truncate" title={item.name}>
                        <h3 className="text-truncate">{item.name}</h3>
                      </div>
                    </div>
                    <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                      <div
                        className="a-progress-bar  c-progress-bar__filler  t-primary-bg"
                        style={{ width: item.percents + '%' }}
                      ></div>
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

export default Skills;
