import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  // Function to close the hamburger menu
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      // Remove the 'show' class to close the menu
      navbarCollapse.classList.remove('show');
      // Also update the aria-expanded attribute on the toggle button
      const toggleButton = document.querySelector('[data-bs-toggle="collapse"]');
      if (toggleButton) {
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    }
  };

  // Handle navigation link click
  const handleNavLinkClick = (sectionId) => {
    closeNavbar();
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80; // Offset for navbar height
      let currentSection = 'home';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} fixed-top`}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">Akashdeep Dhot</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {sections.map(section => (
                <li className="nav-item" key={section.id}>
                  <a
                    className={`nav-link${activeSection === section.id ? ' active' : ''}`}
                    href={`#${section.id}`}
                    onClick={() => handleNavLinkClick(section.id)}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-3">
                <button
                  className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'}`}
                  onClick={() => setDarkMode(dm => !dm)}
                  aria-label="Toggle dark mode"
                >
                  <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style>{`
      .navbar-brand {
      font-family: 'Poppins', Arial, sans-serif;
      font-weight: 700;
      letter-spacing: -1px;
      }
      `}
      </style>

    </>
  );
}

export default Navbar; 