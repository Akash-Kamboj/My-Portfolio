import React from 'react'
import Ghost3D from './Ghost3D';

function Home() {
  return (
    <>
      <Ghost3D />

      
      <section
        id="home"
        className="home-hero-section d-flex align-items-center min-vh-100 justify-content-center position-relative overflow-hidden"
      >
        <div className="container home-hero-content d-flex flex-row align-items-center justify-content-between position-relative">
          {/* Left Side: Text Content */}
          <div className="home-hero-left text-start">
            <h2 className="home-hero-subtitle">WEB DEVELOPER</h2>
            <h3 className="home-hero-title animated-flicker">Hi<br />It's Akash</h3>
            <p className="lead mb-3" style={{ fontSize: '1.5rem', color: '#818cf8' }}>Web Developer | Problem Solver | Tech Enthusiast</p>
            <p className="home-hero-desc">
              I'm a passionate web developer with a strong foundation in frontend technologies. With hands-on experience in modern frameworks and tools, I specialize in building responsive and user-friendly web applications.
            </p>
            <div className="home-hero-btns d-flex align-items-center mt-4">
              <a
                href="/My Resume.pdf"
                className="cv-btn d-flex align-items-center justify-content-center me-3"
                download
                aria-label="Download CV"
              >
                <span className="cv-icon"><i className="fa-solid fa-download"></i></span>
                <span className="cv-text">CV</span>
              </a>
            </div>
          </div>

          {/* Right Side: Profile Image & Socials */}
          <div className="home-hero-right position-relative d-flex flex-column align-items-center">
            {/* Circular Gradient BG */}
            <div className="profile-gradient-bg position-absolute"></div>
            {/* Profile Image */}
            <img
              src="/img 2.jpg"
              alt="Akashdeep Dhot"
              className="profile-img-main position-relative animated-flicker"
            />
            {/* Social Icons */}
            <div className="social-icons-vertical d-flex flex-row align-items-center position-absolute">
              <a href="https://github.com/Akash-Kamboj" className="social-icon" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/akash-kamboj/" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#contact" className="social-icon" aria-label="Telegram"><i className="fab fa-telegram"></i></a>
              <a href="#contact" className="social-icon" aria-label="Gmail"><i className="fa fa-envelope" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>

        <div className="cube-container animated-flicker">
          <div className="box-card">
            <div className="face front"><img src="/skills-icons/Java.png" alt="Java" style={{ height: '60px', margin: 'auto' }} /></div>
            <div className="face back"><img src="/skills-icons/Tailwind CSS.png" alt="Tailwind Css" style={{ height: '60px', margin: 'auto' }} /></div>
            <div className="face right"><img src="/skills-icons/JavaScript.png" alt="JavaScript" style={{ height: '60px', margin: 'auto' }} /></div>
            <div className="face left"><img src="/skills-icons/React.png" alt="React" style={{ height: '60px', margin: 'auto' }} /></div>
            <div className="face top"><img src="/skills-icons/HTML5.png" alt="HTML" style={{ height: '60px', margin: 'auto' }} /></div>
            <div className="face bottom"><img src="/skills-icons/CSS3.png" alt="CSS3" style={{ height: '60px', margin: 'auto' }} /></div>
          </div>
        </div>

      
      </section>
      {/* Styles for the new hero section */}
      <style>{`
        /* Global smooth transitions for responsive design */
        * {
          transition: width 0.3s ease-in-out, height 0.3s ease-in-out, 
                      transform 0.3s ease-in-out, position 0.3s ease-in-out,
                      font-size 0.3s ease-in-out, margin 0.3s ease-in-out,
                      padding 0.3s ease-in-out, border-width 0.3s ease-in-out;
        }
        
        .home-hero-section {
          background: linear-gradient(120deg, #181824 0%, #2d225a 100%);
          border-radius: 2rem;
          box-shadow: 0 4px 32px rgba(80,112,255,0.10);
          min-height: 100vh;
          padding-top: 2rem;
          transition: all 0.3s ease-in-out;
        }
        .home-hero-content {
          max-width: 1200px;
          width: 100%;
          padding: 3rem 2rem;
          z-index: 2;
          transition: all 0.3s ease-in-out;
        }
        .home-hero-left {
          flex: 1 1 50%;
          min-width: 320px;
          transition: all 0.3s ease-in-out;
        }
        .home-hero-subtitle {
          font-size: 1.2rem;
          letter-spacing: 2px;
          color: #bdbdfc;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        .home-hero-title {
          font-size: 4rem;
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease-in-out;
        }
        .home-hero-desc {
          font-size: 1.2rem;
          color: #bdbdfc;
          max-width: 400px;
          margin-bottom: 2rem;
          transition: all 0.3s ease-in-out;
        }
        .cv-btn {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a78bfa 0%, #f472b6 100%);
          color: #fff;
          font-size: 1.5rem;
          font-weight: 700;
          box-shadow: 0 2px 16px rgba(80,112,255,0.15);
          border: none;
          transition: transform 0.2s, box-shadow 0.2s;
          position: relative;
          text-decoration: none;
        }
        .cv-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 4px 32px rgba(80,112,255,0.25);
        }
        .cv-icon {
          font-size: 2rem;
          margin-right: 0.2em;
        }
        .cv-text {
          font-size: 1.1rem;
          font-weight: 600;
        }
        .home-hero-right {
          flex: 1 1 50%;
          min-width: 320px;
          justify-content: center;
          align-items: center;
          position: relative;
          transition: all 0.3s ease-in-out;
        }
        .profile-gradient-bg {
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle at 60% 40%, #a78bfa 0%, #f472b6 60%, #181824 100%);
          filter: blur(8px);
          z-index: 1;
          top: 0;
          left: 0;
          transition: all 0.3s ease-in-out;
        }
        .profile-img-main {
          width: 22vw;
          max-width: 300px;
          min-width: 90px;
          height: auto;
          aspect-ratio: 1/1;
          object-fit: cover;
          border-radius: 50%;
          border: 5px solid #fff;
          box-shadow: 0 2px 16px rgb(135, 121, 255);
          z-index: 2;
          position: relative;
          display: block;
          margin: 0 auto;
          left: 0;
          left:150px;
          top: -110px;
          transform: none;
          transition: all 0.3s ease-in-out;
        }
        @media (max-width: 900px) {
          .profile-img-main {
            width: 30vw;
            min-width: 250px;
            max-width: 180px;
            left: 70px;
            right: 0;
            margin: 0 auto;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }

         @media (max-width: 768px) {
          .profile-img-main {
            width: 30vw;
            min-width: 250px;
            max-width: 180px;
            left: 15rem;
            top: -510px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }

        @media (max-width: 600px) {
          .profile-img-main {
            width: 40vw;
            max-width: 200px;
            min-width: 60px;
            border-width: 3px;
            left: 0;
            margin-right: 1rem;
            margin-top : 10rem;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
        @media (max-width: 400px) {
          .profile-img-main {
            width: 50vw;
            max-width: 100px;
            min-width: 40px;
            left: 0;
            margin-right: 2px !important;
            margin: 0 auto;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
        .social-icons-vertical {
          right: 8px;
          gap: 20px;
          top: 230px;
          z-index: 3;
          transition: all 0.3s ease-in-out;
        }
        .social-icon {
          color: #fff;
          background: rgba(80,112,255,0.10);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          transition: all 0.3s ease-in-out;
          text-decoration: none;
          animation: floatIcon 2s ease-in-out infinite;
        }
        .social-icon:nth-child(1) { animation-delay: 0s; }
        .social-icon:nth-child(2) { animation-delay: 0.2s; }
        .social-icon:nth-child(3) { animation-delay: 0.4s; }
        .social-icon:nth-child(4) { animation-delay: 0.7s; }
        .social-icon:nth-child(5) { animation-delay: 1s; }
        .social-icon:hover {
          background: linear-gradient(135deg, #a78bfa 0%, #f472b6 100%);
          color: #fff;
        }
        @keyframes floatIcon {
          0% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
          100% { transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .home-hero-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            // padding: 2rem 1rem;
          }
          .home-hero-left, .home-hero-right {
            min-width: 0;
            width: 100%;
            justify-content: center;
            align-items: center;
          }
          .social-icons-vertical {
            position: static;
            flex-direction: row;
            margin-top: 11rem;
            right: 1.5rem;
            top: 0;
            gap: 5px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .social-icon {
            margin: 0 0.5rem 0 0.5rem;
          }
          .cube-container {
            position: static;
            // margin: 2rem auto 0 auto;
            margin-left: -18rem;
            left: 0;
            top: 0;
            display: flex;
            justify-content: center;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
        @media (max-width: 600px)
        {
            
          .home-hero-title {
           font-size: 2rem;
          }
          .home-hero-subtitle {
            font-size: 1rem;
          }
          .home-hero-desc {
            font-size: 1rem;
            max-width: 90vw;
          }
          .profile-gradient-bg, .profile-img-main {
            width: 150px;
            height: 150px;
            margin-top: 8rem !important;
          }
          .profile-img-main {
            border-width: 3px;
          }
          .cube-container {
            // position: static !important;
            width: 80vw !important;
            margin: 2rem auto 0 auto !important;
            left: 5rem !important;
            margin-top: 20rem !important;
            display: flex !important;
            justify-content: center !important;
            z-index: 10 !important;
            min-height: 100px !important;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .box-card {
            width: 50px;
            height: 50px;
          }
          .face img {
            height: 40px !important;
          }

          .social-icons-vertical {
            position: static;
            flex-direction: column !important;
            margin-top: -4rem !important;
            margin-right: -20px !important;
            gap: 5px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
        @media (max-width: 431px) {
          .home-hero-title {
            font-size: 1.2rem;
          }
          .profile-gradient-bg, .profile-img-main {
            width: 70px;
            height: 70px;
          }

          .profile-img-main  
          {
          margin-top: 5rem !important;
          height: 100px !important;
          width: 100px !important;
          margin-right: -15px;
          }

          .social-icons-vertical
          {
          margin-right: -50px !important;
          }
          .cube-container
          {
          margin-top: 25rem !important;
          margin-left: -2rem !important;
          }
       
          .box-card {
            width: 60px !important;
            height: 60px !important;
          }
          .face img {
            height: 45px !important;
          }
        }
        @media (max-width: 768px) 
        {
          .home-hero-section {
            max-height: 110vh;
            align-items: flex-start !important;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .home-hero-content {
            flex-direction: column !important;
            align-items: flex-start !important;
            // padding: 1.5rem 1rem;
          }

          .social-icons-vertical {
            position: static;
            flex-direction: row;
            margin-top: -3rem;
            margin-right: 20rem;
            gap: 5px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .box-card { width: 100px; height: 100px; }
          .front { transform: translateZ(50px); }
          .back { transform: translateZ(-50px) rotateY(180deg); }
          .right { transform: translateX(50px) rotateY(90deg); }
          .left { transform: translateX(-50px) rotateY(-90deg); }
          .top { transform: translateY(-50px) rotateX(90deg); }
          .bottom { transform: translateY(50px) rotateX(-90deg); }
          .cube-container { 
            margin-top: 23rem; 
            margin-left: -10rem; 
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
        .cube-container {
          position: absolute;
          top: 8rem;
          left: 45rem;
          z-index: 10;perspective: 1000px;
          transition: all 0.3s ease-in-out;
        }
        .box-card {
          width: 70px;
          height: 70px;
          position: relative;
          transform-style: preserve-3d;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
        }
        .box-card{
          animation: rotate3d 6s infinite linear;
        }
        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.2rem;
          font-weight: bold;
          backface-visibility: visible;
          border-radius: 16px;
          border: 2px solid #fff;
          color: #fff;
          box-shadow: 0 2px 16px rgba(80,112,255,0.10);
          transition: all 0.3s ease-in-out;
        }
        .front {
          transform: translateZ(80px);
          background: linear-gradient(135deg,rgb(247, 80, 202) 0%,rgb(96, 65, 233) 100%);
        }
        back {
          transform: translateZ(-80px) rotateY(180deg);
          background: linear-gradient(135deg,rgb(96, 72, 229) 0%,rgb(111, 204, 142) 100%);
        }
        .right {
          transform: translateX(80px) rotateY(90deg);
          background: linear-gradient(135deg, rgb(96, 72, 229) 0%, #ffd1ff 100%);
        }
        .left {
          transform: translateX(-80px) rotateY(-90deg);
          background: linear-gradient(135deg,rgb(199, 70, 156) 0%,rgb(92, 164, 192) 100%);
        }
        .top {
          transform: translateY(-80px) rotateX(90deg);
          background: linear-gradient(135deg, #a1c4fd 0%,rgb(30, 3, 129) 100%);
        }
        .bottom {
          transform: translateY(80px) rotateX(-90deg);
          background: linear-gradient(135deg, #fbc2eb 0%,rgb(39, 160, 185) 100%);
        }
        @keyframes rotate3d {
          0% { transform: rotateX(0) rotateY(0); }
          25% { transform: rotateX(90deg) rotateY(90deg); }
          50% { transform: rotateX(180deg) rotateY(180deg); }
          75% { transform: rotateX(270deg) rotateY(270deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        .animated-flicker {
          animation: bubbleScale 1s ease-in-out forwards;
        }
        @keyframes bubbleScale {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

export default Home;