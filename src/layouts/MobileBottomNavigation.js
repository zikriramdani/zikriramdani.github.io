import React, { useState, useEffect, useRef } from 'react';

const MobileBottomNavigation = (props) => {
  const { translation } = props;
  const [activeButton, setActiveButton] = useState('top');
  const mobileNavRef = useRef(null); // Reference to the mobile navigation container

  const handleScroll = (sectionId) => {
    setActiveButton(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Add scroll event listener to track the active section
  const onScroll = () => {
    const sections = [
      'top',
      'intro',
      'skills',
      'experience',
      'certificate',
      'education',
      'profiles',
      'portfolio',
      'repositories',
      'contact'
    ];
    let active = 'top'; // Default active section
    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
        active = section; // Set active to the section currently visible
      }
    });
    setActiveButton(active);

    // Scroll the mobile navigation horizontally to match the active button
    if (mobileNavRef.current) {
      const activeButtonElement = document.querySelector(`.btn-nav.${active}`);
      if (activeButtonElement) {
        const offsetLeft = activeButtonElement.offsetLeft;
        mobileNavRef.current.scrollLeft = offsetLeft - mobileNavRef.current.offsetWidth / 2;
      }
    }
  };

  useEffect(() => {
    onScroll();
    // Attach scroll event
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll); // Clean up on component unmount
    };
  }, []);

  return (
    <div className="MobileBottomNavigation" data-aos="fade-up" data-aos-offset="0">
      <div className="mobile-nav" ref={mobileNavRef}>
        <button
          className={`btn-nav top ${activeButton === 'top' ? 'active' : ''}`}
          onClick={() => handleScroll('top')}
        >
          <i className={`fa fa-home ${activeButton === 'top' ? 'active' : ''}`}></i>
          {translation('Top')}
        </button>
        <button
          className={`btn-nav intro ${activeButton === 'intro' ? 'active' : ''}`}
          onClick={() => handleScroll('intro')}
        >
          <i className={`fa fa-info-circle ${activeButton === 'intro' ? 'active' : ''}`}></i>
          {translation('Intro.Intro')}
        </button>
        <button
          className={`btn-nav skills ${activeButton === 'skills' ? 'active' : ''}`}
          onClick={() => handleScroll('skills')}
        >
          <i className={`fa fa-wrench ${activeButton === 'skills' ? 'active' : ''}`}></i>
          {translation('Skills.Skills')}
        </button>
        <button
          className={`btn-nav experience ${activeButton === 'experience' ? 'active' : ''}`}
          onClick={() => handleScroll('experience')}
        >
          <i className={`fa fa-briefcase ${activeButton === 'experience' ? 'active' : ''}`}></i>
          {translation('Experience.Experience')}
        </button>
        <button
          className={`btn-nav certificate ${activeButton === 'certificate' ? 'active' : ''}`}
          onClick={() => handleScroll('certificate')}
        >
          <i className={`fa fa-certificate ${activeButton === 'certificate' ? 'active' : ''}`}></i>
          {translation('Certificate.Certificate')}
        </button>
        <button
          className={`btn-nav education ${activeButton === 'education' ? 'active' : ''}`}
          onClick={() => handleScroll('education')}
        >
          <i className={`fa fa-graduation-cap ${activeButton === 'education' ? 'active' : ''}`}></i>
          {translation('Education.Education')}
        </button>
        <button
          className={`btn-nav profiles ${activeButton === 'profiles' ? 'active' : ''}`}
          onClick={() => handleScroll('profiles')}
        >
          <i className={`fa fa-id-badge ${activeButton === 'profiles' ? 'active' : ''}`}></i>
          {translation('Profiles.Profiles')}
        </button>
        <button
          className={`btn-nav portfolio ${activeButton === 'portfolio' ? 'active' : ''}`}
          onClick={() => handleScroll('portfolio')}
        >
          <i className={`fa fa-folder-open ${activeButton === 'portfolio' ? 'active' : ''}`}></i>
          {translation('Portfolio.Portfolio')}
        </button>
        <button
          className={`btn-nav repositories ${activeButton === 'repositories' ? 'active' : ''}`}
          onClick={() => handleScroll('repositories')}
        >
          <i className={`fa fa-code ${activeButton === 'repositories' ? 'active' : ''}`}></i>
          {translation('Repositories.Repositories')}
        </button>
        <button
          className={`btn-nav contact ${activeButton === 'contact' ? 'active' : ''}`}
          onClick={() => handleScroll('contact')}
        >
          <i className={`fa fa-envelope ${activeButton === 'contact' ? 'active' : ''}`}></i>
          {translation('Footers.Contact')}
        </button>
      </div>
    </div>
  );
};

export default MobileBottomNavigation;
