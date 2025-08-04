import React, { useState } from 'react';

const allProjects = [
  {
    name: 'Portfolio Website',
    description: 'A personal web app showcasing projects, skills, education, and experience, designed to highlight professional achievements. Includes interactive UI, contact form, and 3D model integrations for an engaging presentation.',
    tech: ['JavaScript', 'TypeScript', 'React', 'ThreeJS', 'Tailwind-CSS'],
    live: '#',
    github: '#',
  },
  {
    name: 'Car Rental System',
    description: 'A web app to manage car bookings with user authentication, vehicle listing, and rental operations including booking, return, and availability tracking.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'Mysql'],
    live: '#',
    github: '#',
  },
  {
    name: 'Gym Training Management System',
    description: 'A web app to manage gym memberships with authentication, member profiles, workout. Includes exercise video tutorials and personalized meal plans with detailed ingredients.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'Mysql'],
    live: '#',
    github: '#',
  },
];



function Projects() {
  const [filter] = useState('All');
  const filteredProjects = filter === 'All' ? allProjects : allProjects.filter(p => p.tech.includes(filter));

  return (
    <>
      <section id="projects" className="py-5 projects-section-bg" data-aos="flip-up">
        <div className="container">
          <h2 className="mb-4 text-center">Projects</h2>
          <div className="row justify-content-center">
            {filteredProjects.map((project, idx) => (
              <div className="col-md-4 mb-3" key={idx}>
                <div
                  className="card h-100 project-card animate-fade-in"
                  style={{ borderRadius: '1.5rem', animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="card-body">
                    <h5 className="card-title fw-bold mb-2" style={{ fontSize: '1.25rem' }}>
                      <span role="img" aria-label="project" className="me-2">💡</span>{project.name}
                    </h5>
                    <p className="card-text text-secondary mb-3" style={{ fontSize: '1rem' }}>{project.description}</p>
                    <p>{project.tech.map(t => <span key={t} className="badge bg-light text-dark border me-1 mb-1 project-badge">{t}</span>)}</p>
                    <a href={project.github} className="btn btn-outline-dark btn-sm project-btn " target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
      .project-card {
      border-radius: 1.25rem;
      box-shadow: 0 2px 16px rgba(0,0,0,0.08), 0 1.5px 6px rgba(0,0,0,0.04);
      transition: transform 0.25s cubic-bezier(.4,2,.3,1), box-shadow 0.25s cubic-bezier(.4,2,.3,1);
      background: linear-gradient(135deg, rgba(245,247,250,0.85) 60%, rgba(230,238,255,0.85) 100%);
      backdrop-filter: blur(6px);
      border: none;
      outline: none;
      padding: 1.5rem 1.25rem 1.25rem 1.25rem;
      }
      .project-card:focus, .project-card:active {
      outline: none;
      box-shadow: 0 2px 16px rgba(0,0,0,0.08), 0 1.5px 6px rgba(0,0,0,0.04);
      }
      .project-card .card-body {
      padding: 0;
      }
      .project-card:hover {
      transform: translateY(-12px) scale(1.05);
      box-shadow: 0 12px 36px rgb(212, 197, 255), 0 4px 16px rgb(130, 93, 251);
      outline: none;
      }
      body.dark-mode .project-card {
      background: #000 !important;
      }
      /* Fade-in Animation */
      .animate-fade-in {
      opacity: 0;
      animation: fadeInUp 0.7s ease forwards;
      }
      @keyframes fadeInUp {
      from {
      opacity: 0;
      transform: translateY(30px);
      }
      to {
      opacity: 1;
      transform: translateY(0);
      }
      }
      /* Sleek Button Styles */
      .project-btn {
      border-radius: 2rem;
      font-weight: 500;
      letter-spacing: 0.02em;
      transition: background 0.2s, color 0.2s, box-shadow 0.2s;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
      }
      .project-btn:hover {
      box-shadow: 0 2px 8px rgba(0,123,255,0.10);
      }
      body.dark-mode .project-btn.btn-outline-dark 
      {
      background: #000000 !important;
      color: #ffffff !important;
      border: 1px solid #fff !important;
      }
      body.dark-mode .project-btn.btn-outline-dark:hover {
      background: #e3e6ea !important;
      color: #181a1b !important;
      border: 1px solid #e3e6ea !important;
      }
      /* Sleek Badge Styles */
      .project-badge {
      border-radius: 1rem;
      font-size: 0.85em;
      padding: 0.4em 0.8em;
      background: #f1f3f6;
      border: 1px solid #e3e6ea;
      color: #333;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
      }
      .card-title {
      margin-bottom: 0.5rem;
      }
      .card-text {
      margin-bottom: 1rem;
      }
      .projects-section-bg {
      background: linear-gradient(135deg, #e9e3f8 40%, #a8c2e7 100%);
      } 
      
      `}</style>
    </>

  );
}

export default Projects; 