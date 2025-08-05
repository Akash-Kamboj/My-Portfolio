import React from 'react';

function Skills() {
  return (
    <>
      <style>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        #skills.animated-gradient {
          background: linear-gradient(135deg, rgb(198, 199, 241) 40%, rgba(159, 127, 255, 0.87) 100%);
          background-size: 200% 200%;
          animation: gradientMove 2s ease-in-out infinite;
        }
       
        @keyframes iconRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .skill-icon-animated {
          animation:iconRotate 4s linear infinite;
        }
      `}</style>
      <section id="skills" className="py-5 animated-gradient" data-aos="zoom-in">
        <div className="container">
          <h2 className="mb-4 text-center">Skills</h2>
          <div className="row">
            <div className="col-md-3 mb-3">
              <h5>Programming Languages</h5>
              <span className="badge me-1 mb-1"><img src="/skills/Java.png" alt="Java" className="skill-icon-animated" style={{height:'60px',marginRight:'20px'}}/></span>
              <span className="badge text-dark me-1 mb-1"><img src="/skills/JavaScript.png" alt="JavaScript" className="skill-icon-animated" style={{height:'60px',marginRight:'20px'}}/></span>
            </div>
            <div className="col-md-3 mb-3">
              <h5>Frontend Tools</h5>
              <span className="badge me-1 mb-1"><img src="/skills/HTML5.png" alt="HTML" className="skill-icon-animated" style={{height:'60px',marginRight:'20px'}}/></span>
              <span className="badge text-dark me-1 mb-1"><img src="/skills/CSS3.png" alt="CSS" className="skill-icon-animated" style={{height:'60px',marginRight:'20px'}}/></span>
              <span className="badge text-dark me-1 mb-1"><img src="/skills/Tailwind CSS.png" alt="Tailwind CSS" className="skill-icon-animated" style={{height:'60px',marginRight:'20px'}}/></span>
              <span className="badge me-1 mb-1"><img src="/skills/Bootstrap.png" alt="Bootstrap" className="skill-icon-animated" style={{height:'60px',marginRight:'20px'}}/></span>
              <span className="badge text-dark me-1 mb-1"><img src="/skills/React.png" alt="ReactJS" className="skill-icon-animated" style={{height:'60px',marginRight:'20px'}}/></span>
            </div>
            <div className="col-md-3 mb-3">
              <h5>Backend/Database</h5>
              <span className="badge me-1 mb-1"><img src="/skills/MySQL.png" alt="MySQL" className="skill-icon-animated" style={{height:'60px',marginRight:'20px'}}/></span>
            </div>
            <div className="col-md-3 mb-3">
              <h5>Tools & Version Control</h5>
              <span className="badge me-1 mb-1"><img src="/skills/VS Code.png" alt="VS Code" className="skill-icon-animated" style={{height:'60px',marginRight:'20px'}}/></span>
              <span className="badge me-1 mb-1"><img src="/skills/Git.png" alt="Git" className="skill-icon-animated" style={{height:'60px',marginRight:'20px'}}/></span>
              <span className="badge me-1 mb-1"><img src="/skills/GitHub.png" alt="GitHub" className="skill-icon-animated" style={{height:'60px',marginRight:'20px'}}/></span>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Skills; 