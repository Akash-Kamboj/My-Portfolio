import React from 'react';


// Education-specific styles moved from index.css
const educationStyles = `
.edu-animated-card {
  position: relative;
  overflow: hidden;
  border: 3px solid transparent;
  background-clip: padding-box;
  transition: transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.3s, border 0.3s;
}
.edu-animated-card:before {
  content: '';
  position: absolute;
  inset: -3px;
  z-index: 0;
  border-radius: 1.5rem;
  background: linear-gradient(120deg, #f472b6, #6366f1, #a5b4fc, #f472b6);
  background-size: 200% 200%;
  animation: eduCardBorderAnim 6s linear infinite alternate;
  opacity: 0.7;
}
@keyframes eduCardBorderAnim {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.edu-animated-card .card-body {
  position: relative;
  z-index: 1;
}
.edu-animated-card:hover {
  transform: scale(1.04) rotate(-1deg);
  box-shadow: 0 8px 32px rgba(244, 114, 182, 0.18), 0 4px 32px rgba(80,112,255,0.18);
  border-color: #f472b6;
}

.edu-flip-card {
  background: none;
  width: 100%;
  height: 100%;
  perspective: 1200px;
  min-height: 220px;
}
.edu-flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.7s cubic-bezier(.4,2,.6,1);
  transform-style: preserve-3d;
}
.edu-flip-card:hover .edu-flip-card-inner,
.edu-flip-card:focus-within .edu-flip-card-inner {
  transform: rotateY(180deg);
}
.edu-flip-card-front, .edu-flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0; left: 0;
  border-radius: 1.5rem;
  backface-visibility: hidden;
  box-shadow: 0 2px 16px rgba(80, 112, 255, 0.08);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.edu-flip-card-front {
  z-index: 2;
  background: transparent;
}
.edu-flip-card-back {
  z-index: 3;
  transform: rotateY(180deg);
  color: #fff;
  box-shadow: 0 8px 32px rgba(80, 112, 255, 0.16);
}
`;

function Education() {
  return (
    
    <>
      <style>{educationStyles}</style>
      <section
        id="education"
        className="py-5 position-relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgb(177, 197, 234) 0%, #e0e7ef 60%, #a5b4fc 100%)',
          borderRadius: '2rem',
          boxShadow: '0 4px 32px rgba(80,112,255,0.06)',
          height: 'auto',
        }}
        data-aos="fade-right"
      >
        {/* Animated SVG Blob */}
        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            bottom: '-60px',
            right: '-60px',
            zIndex: 1,
            opacity: 0.4,
          }}
        >
          <defs>
            <linearGradient id="eduBlobGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <path fill="url(#eduBlobGradient)">
            <animate
              attributeName="d"
              dur="7s"
              repeatCount="indefinite"
              values="
                M60,60 Q100,20 160,60 Q200,100 180,160 Q160,220 100,200 Q40,180 60,120 Q80,60 60,60 Z;
                M80,80 Q120,40 180,80 Q220,120 200,180 Q180,220 120,200 Q60,180 80,140 Q100,80 80,80 Z;
                M60,60 Q100,20 160,60 Q200,100 180,160 Q160,220 100,200 Q40,180 60,120 Q80,60 60,60 Z"
            />
          </path>
        </svg>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h2 className="mb-4 text-center animated-gradient-text">Education</h2>
          <div className="row justify-content-center">

            {/* BCA Card */}
            <div className="col-md-6 mb-3">
              <div className="edu-flip-card">
                <div className="edu-flip-card-inner">
                  <div className="edu-flip-card-front edu-animated-card">
                    <div className="card-body" style={{ padding: 15 }}>
                      <h5 className="card-title">
                        <i className="fas fa-graduation-cap me-2" aria-hidden="true"></i>
                        <span className="visually-hidden">Graduation Cap Icon</span>
                        BCA (Bachelor of Computer Applications) – Trinity College, Jalandhar
                      </h5>
                      <p className="card-text">(Graduated: Year-2020 to 2023)</p>
                    </div>
                  </div>
                  <div
                    className="edu-flip-card-back"
                    style={{
                      background: 'linear-gradient(135deg, rgb(171, 133, 233) 0%, rgb(36, 172, 251) 100%)',
                      height: 'auto',
                    }}
                  >
                    <div className="card-body text-white" style={{ padding: 20 }}>
                      <h5 className="card-title">BCA Details</h5>
                      <ul className="mb-0" style={{ listStyle: 'none', padding: 5 }}>
                        <li>Trinity College, Jalandhar</li>
                        <li>2020 - 2023</li>
                        <li>CGPA: 6.8/10</li>
                      </ul>
                      <h6 className="card-title">Core Subjects</h6>
                      <ul className="mb-0" style={{ listStyle: 'none', padding: 5 }}>
                        <li>
                          Programming Languages (C, C++, Java, Python), Computer Fundamentals,
                          Mathematics & Statistics, Database Management, Operating Systems, etc
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MCA Card */}
            <div className="col-md-6 mb-3">
              <div className="edu-flip-card">
                <div className="edu-flip-card-inner">
                  <div className="edu-flip-card-front edu-animated-card">
                    <div className="card-body" style={{ padding: 15 }}>
                      <h5 className="card-title">
                        <i className="fas fa-graduation-cap me-2" aria-hidden="true"></i>
                        <span className="visually-hidden">Graduation Cap Icon</span>
                        MCA (Master of Computer Applications) – Lovely Professional University
                      </h5>
                      <p className="card-text">(Post Graduated: Year-2023 to 2025)</p>
                    </div>
                  </div>
                  <div
                    className="edu-flip-card-back"
                    style={{
                      background: 'linear-gradient(135deg, #34d399 0%, #6366f1 100%)',
                      height: 'auto',
                    }}
                  >
                    <div className="card-body text-white" style={{ padding: 20 }}>
                      <h5 className="card-title">MCA Details</h5>
                      <ul className="mb-0" style={{ listStyle: 'none', padding: 5 }}>
                        <li>Lovely Professional University</li>
                        <li>2023 - 2025</li>
                        <li>CGPA: 7.8/10</li>
                      </ul>
                      <h6 className="card-title">Core Subjects</h6>
                      <ul className="mb-0" style={{ listStyle: 'none', padding: 5 }}>
                        <li>
                          Object-Oriented Programming using C++ / Java, Data Structures and
                          Algorithms, Data Warehousing and Data Mining, Computer Networks, Operating
                          Systems, Software Engineering, etc
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}

export default Education;
