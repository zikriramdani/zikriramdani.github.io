'use client';
import React, { useState, useEffect, useRef } from 'react';

const Index = (props) => {
  const { translation } = props;
  const [activeButton, setActiveButton] = useState('top');
  const desktopNavRef = useRef(null); // Reference to the desktop navigation container

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

    // Scroll the desktop navigation vertically to match the active button
    if (desktopNavRef.current) {
      const activeButtonElement = document.querySelector(`.btn-nav-desktop.${active}`);
      if (activeButtonElement) {
        const offsetTop = activeButtonElement.offsetTop;
        const containerHeight = desktopNavRef.current.offsetHeight;
        const elementHeight = activeButtonElement.offsetHeight;

        // Scroll the active button into view, centering it vertically
        desktopNavRef.current.scrollTop = offsetTop - containerHeight / 1 + elementHeight / 3;
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
    <div className="desktop-navigation" data-aos="fade-up" data-aos-offset="0">
      <div className="desktop-nav" ref={desktopNavRef}>
        <button
          className={`btn-nav-desktop top d-flex justify-content-center ${activeButton === 'top' ? 'active' : ''}`}
          onClick={() => handleScroll('top')}
          title={translation('Top')}
        >
          <i className={`fa fa-home ${activeButton === 'top' ? 'active' : ''}`}></i>
        </button>
        <button
          className={`btn-nav-desktop intro d-flex justify-content-center  ${activeButton === 'intro' ? 'active' : ''}`}
          onClick={() => handleScroll('intro')}
          title={translation('Intro.Intro')}
        >
          <i className={`fa fa-info-circle ${activeButton === 'intro' ? 'active' : ''}`}></i>
        </button>
        <button
          className={`btn-nav-desktop skills d-flex justify-content-center  ${activeButton === 'skills' ? 'active' : ''}`}
          onClick={() => handleScroll('skills')}
          title={translation('Skills.Skills')}
        >
          <i className={`fa fa-wrench ${activeButton === 'skills' ? 'active' : ''}`}></i>
        </button>
        <button
          className={`btn-nav-desktop experience d-flex justify-content-center  ${activeButton === 'experience' ? 'active' : ''}`}
          onClick={() => handleScroll('experience')}
          title={translation('Experience.Experience')}
        >
          <i className={`fa fa-briefcase ${activeButton === 'experience' ? 'active' : ''}`}></i>
        </button>
        <button
          className={`btn-nav-desktop certificate d-flex justify-content-center  ${activeButton === 'certificate' ? 'active' : ''}`}
          onClick={() => handleScroll('certificate')}
          title={translation('Certificate.Certificate')}
        >
          <i className={`fa fa-certificate ${activeButton === 'certificate' ? 'active' : ''}`}></i>
        </button>
        <button
          className={`btn-nav-desktop education d-flex justify-content-center  ${activeButton === 'education' ? 'active' : ''}`}
          onClick={() => handleScroll('education')}
          title={translation('Education.Education')}
        >
          <i className={`fa fa-graduation-cap ${activeButton === 'education' ? 'active' : ''}`}></i>
        </button>
        <button
          className={`btn-nav-desktop profiles d-flex justify-content-center  ${activeButton === 'profiles' ? 'active' : ''}`}
          onClick={() => handleScroll('profiles')}
          title={translation('Profiles.Profiles')}
        >
          <i className={`fa fa-id-badge ${activeButton === 'profiles' ? 'active' : ''}`}></i>
        </button>
        <button
          className={`btn-nav-desktop portfolio d-flex justify-content-center  ${activeButton === 'portfolio' ? 'active' : ''}`}
          onClick={() => handleScroll('portfolio')}
          title={translation('Portfolio.Portfolio')}
        >
          <i className={`fa fa-folder-open ${activeButton === 'portfolio' ? 'active' : ''}`}></i>
        </button>
        <button
          className={`btn-nav-desktop repositories d-flex justify-content-center  ${activeButton === 'repositories' ? 'active' : ''}`}
          onClick={() => handleScroll('repositories')}
          title={translation('Repositories.Repositories')}
        >
          <i className={`fa fa-code ${activeButton === 'repositories' ? 'active' : ''}`}></i>
        </button>
        <button
          className={`btn-nav-desktop contact d-flex justify-content-center  ${activeButton === 'contact' ? 'active' : ''}`}
          onClick={() => handleScroll('contact')}
          title={translation('Footers.Contact')}
        >
          <i className={`fa fa-envelope ${activeButton === 'contact' ? 'active' : ''}`}></i>
        </button>
      </div>
    </div>
  );
};

export default Index;
