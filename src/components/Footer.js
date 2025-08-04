import React from 'react';

function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg,rgb(175, 202, 244) 10%,#e9e3f8 100%)',
      color: '#222',
      padding: '2rem 0 1rem 0',
      textAlign: 'center',
      fontWeight: 500,
      letterSpacing: '0.5px',
      boxShadow: '0 -2px 16px rgba(80,112,255,0.07)',
      marginTop: '3rem',
      borderTopLeftRadius: '2rem',
      borderTopRightRadius: '2rem',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
        <h4 style={{ fontWeight: 700, color: '#4f8cff', marginBottom: '0.5rem', letterSpacing: '1px' }}>
          Vision
        </h4>
        <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '1.2rem', lineHeight: 1.7 }}>
          To craft digital experiences that inspire, empower, and connect people. I believe in building web solutions that are not only visually appealing and modern, but also accessible, performant, and meaningful. My vision is to continuously learn, innovate, and contribute to a better digital world—one project at a time.
        </p>
        <div style={{ fontSize: '0.95rem', color: '#888' }}>
          &copy; {new Date().getFullYear()} Akashdeep Dhot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer; 