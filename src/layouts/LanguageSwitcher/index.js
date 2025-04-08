import React, { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

const Index = (props) => {
  const { translation } = props;
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const [showPopover, setShowPopover] = useState(false);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage); // Update the language state
    setShowPopover(!showPopover);
  };

  useEffect(() => {
    setLanguage(i18n.language); // Ensure language is updated on initial load
  }, [i18n.language]);

  return (
    <div className="multi--language" data-aos="fade-left" data-aos-delay="0">
      <button
        onClick={togglePopover}
        className="btn btn-secondary btn-popover d-flex item-center justify-content-center"
      >
        {language === 'en' ? (
          <Fragment>
            <img className="mr-03" src="/assets/images/EN.webp" alt="English" width="20" />
            EN
          </Fragment>
        ) : (
          <Fragment>
            <img className="mr-03" src="/assets/images/ID.webp" alt="Bahasa" width="20" />
            ID
          </Fragment>
        )}
      </button>

      {showPopover && (
        <div className="popover" role="popover">
          <div className="popover-header">{translation('Select Language')}</div>
          <div className="popover-body">
            <div className="d-flex">
              <input
                type="radio"
                id="english"
                name="language"
                value="en"
                checked={language === 'en'}
                onChange={changeLanguage}
              />
              <label htmlFor="english">English</label>
            </div>
            <div className="d-flex">
              <input
                type="radio"
                id="bahasa"
                name="language"
                value="id"
                checked={language === 'id'}
                onChange={changeLanguage}
              />
              <label htmlFor="bahasa">Indonesia</label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
