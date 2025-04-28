'use client';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveListSkills } from '@/redux/action/skills/creator';

import { useTranslation } from 'react-i18next';

const Skills = (props) => {
  const { translation } = props;
  const { t } = useTranslation('data-skills');

  const dispatch = useDispatch();
  const skillsList = useSelector((state) => state.skills.skillsList);

  const fetchSkillsList = async () => {
    const localizedSkills = t('skills', { returnObjects: true });
    dispatch(saveListSkills(localizedSkills));
  };

  useEffect(() => {
    fetchSkillsList();
  }, [t, dispatch]);

  console.log('skillsList', skillsList);

  return (
    <section className="o-section t-section" id="skills">
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
              <h2 className="o-section__heading">{translation('Skills.Skills')}</h2>
              <div className="o-content__body o-section__description">
                {translation('Skills.Progress bars anyone')}
              </div>
            </div>
          </header>

          <div className="o-section__content t-section__content">
            <div className="o-grid">
              {skillsList?.map((category, index) => (
                <div
                  className="o-grid__col-xs-12 o-grid__col-md-12"
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay="0"
                >
                  <div className="o-content a-content pb-0" style={{ marginBottom: '1.5rem' }}>
                    <div className="flex items-center">
                      <h3 className="text-xl font-semibold mb-0">{category.category}</h3>
                    </div>
                    {category?.skills.map((skills) => (
                      <ul className="mb-0 ml-3" key={skills}>
                        <li>{skills}</li>
                      </ul>
                    ))}
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
