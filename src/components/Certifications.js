import React from 'react';

function Certifications() {


  return (
    <section id="certifications" className="py-5 certifications-section" data-aos="fade-left">
      <style>{`
        .certifications-section {
          background: linear-gradient(135deg,rgb(186, 202, 241) 0%, #dfe5f4 50%, #f4f6fb 100%);
        }
        .certification-card {
          // min-width: 320px;
          // max-width: 420px;
          min-height: 220px;
          border-radius: 2rem;
          box-shadow: 0 8px 32px rgba(80, 112, 255, 0.12);
          border: 2px solid #e5e7eb;
          background: #fff;
          transition: box-shadow 0.3s, transform 0.5s cubic-bezier(.4,2,.6,1), border 0.3s;
          overflow: visible;
          position: relative;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          perspective: 1200px;
          background-clip: padding-box;
        }
        .flip-card {
          background: none;
          width: 100%;
          height: 100%;
          perspective: 1200px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(.4,2,.6,1);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 2rem;
          overflow: hidden;
          top: 0;
          left: 0;
        }
        .flip-card-back {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          color: #3730a3;
          transform: rotateY(180deg);
          box-shadow: 0 8px 32px rgba(80, 112, 255, 0.12);
          padding: 2rem 1.5rem;
          z-index: 2;
        }
        .flip-card-front {
          z-index: 3;
        }
        .cert-back-title {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #3730a3;
        }
        .cert-back-org {
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #6366f1;
        }
        .cert-back-desc {
          font-size: 1rem;
          color: #334155;
          margin-bottom: 0.5rem;
        }
        .cert-back-id {
          font-size: 0.95rem;
          color: #64748b;
        }
        .cert-back-date {
          font-size: 0.95rem;
          color: #64748b;
          margin-bottom: 0.5rem;
        }
        .certification-card.bg-ibm {
          background: #fff url('/Certificate%20images/IBM%20logo.png') no-repeat right bottom;
          background-size: 90px 40px;
          background-blend-mode: lighten;
        }
        .certification-card.bg-Meta logo {
          background: #fff url('/Certificate%20images/Meta logo.png') no-repeat right bottom;
          background-size: 90px 40px;
          background-blend-mode: lighten;
        }
        .certification-card.bg-deloitte {
          background: #fff url('/Certificate%20images/Deloitte%20logo.png') no-repeat right bottom;
          background-size: 90px 40px;
          background-blend-mode: lighten;
        }
        .certification-card:hover {
          box-shadow: 0 16px 48px rgba(80, 112, 255, 0.18), 0 2px 8px rgba(244, 114, 182, 0.10);
          border: 2px solid #6366f1;
          z-index: 2;
        }
        .certification-card .card-title {
          color: #3730a3;
          letter-spacing: 0.5px;
          font-size: 1.5rem;
        }
        .certification-card .card-text {
          color: #64748b;
          font-size: 1.1rem;
        }
        @media (max-width: 769px) {
          .certification-card {
            // min-width: 280px;
            // max-width: 500px;
            min-height: 180px;
            margin: 0 auto 1rem auto;
          }
          .flip-card {
            height: 180px;
          }
          .certification-card .card-title {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
          }
          .certification-card .card-text {
            font-size: 1rem;
          }
          .cert-back-title {
            font-size: 1.1rem;
          }
          .cert-back-org {
            font-size: 1rem;
          }
          .cert-back-desc {
            font-size: 0.9rem;
            text-align: center;
            line-height: 1.4;
          }
          .cert-back-id, .cert-back-date {
            font-size: 0.85rem;
          }
          .cert-bg-img, .cert-bg-img-meta {
            width: 60px;
            right: 12px;
            bottom: 12px;
          }
          .cert-bg-img-meta {
            bottom: 0;
          }
        }
        
        @media (max-width: 480px) {
          .certification-card {
            min-width: 260px;
            max-width: 300px;
            min-height: 160px;
          }
          .flip-card {
            height: 160px;
          }
          .certification-card .card-title {
            font-size: 1.1rem;
          }
          .cert-back-title {
            font-size: 1rem;
          }
          .cert-back-desc {
            font-size: 0.85rem;
            margin-bottom: 0.3rem;
          }
          .cert-bg-img, .cert-bg-img-meta {
            width: 50px;
            right: 10px;
            bottom: 10px;
          }
          .cert-bg-img-meta {
            bottom: 0;
          }
        }
        .cert-bg-img {
          position: absolute;
          right: 18px;
          bottom: 18px;
          width: 80px;
          height: auto;
          opacity: 1;
          pointer-events: none;
          z-index: 1;
        }
         .cert-bg-img-meta{
          position: absolute;
          right: 18px;
          bottom: 2px;
          width: 80px;
          height: auto;
          opacity: 1;
          pointer-events: none;
          z-index: 1;
        }
        .certification-card .card-body {
          position: relative;
          z-index: 2;
        }
        
        /* Mobile touch optimizations */
        @media (max-width: 768px) {
          .flip-card:hover .flip-card-inner {
            transform: ;
          }
          .flip-card:active .flip-card-inner {
            transform: rotateY(180deg);
          }
          .certifications-section {
            padding: 2rem 0;
          }
          
        }
          
        

       
      `}</style>
      <div className="container">
        <h2 className="mb-4 text-center">Certifications</h2>
        <div className="row justify-content-center g-3">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="card h-100 shadow-lg border-0 certification-card position-relative flip-card-front" data-aos="zoom-in-up" data-aos-delay="100">
                  <img src={process.env.PUBLIC_URL + '/Certificate images/IBM logo.png'} alt="IBM Logo" className="cert-bg-img" />
                  <div className="card-body position-relative d-flex flex-column align-items-center justify-content-center" style={{height: '100%'}}>
                    <h5 className="card-title fw-bold">Java Fundamentals</h5>
                    <div className="cert-back-org">From</div>
                    <h6 className="card-title fw-bold">IBM</h6>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="cert-back-title">Java Fundamentals</div>
                  <div className="cert-back-org">IBM</div>
                  <div className="cert-back-desc">Covers core Java programming concepts, OOP, and hands-on coding skills. Recognized by IBM for foundational Java expertise.</div>
                  <div className="cert-back-date">Issued: Feb 2022</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="card h-100 shadow-lg border-0 certification-card position-relative flip-card-front" data-aos="zoom-in-up" data-aos-delay="200">
                  <img src={process.env.PUBLIC_URL + '/Certificate images/Meta logo.png'} alt="Meta logo Logo" className="cert-bg-img-meta" />
                  <div className="card-body position-relative d-flex flex-column align-items-center justify-content-center" style={{height: '100%'}}>
                    <h5 className="card-title fw-bold">Frontend Development</h5>
                    <div className="cert-back-org">From</div>
                    <h6 className="card-title fw-bold">Meta</h6>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="cert-back-title">Frontend Development</div>
                  <div className="cert-back-org">Meta</div>
                  <div className="cert-back-desc">Comprehensive training in HTML, CSS, JavaScript, and React. Focused on building responsive, accessible web interfaces.</div>
                  <div className="cert-back-date">Issued: Jul 2025</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="card h-100 shadow-lg border-0 certification-card position-relative flip-card-front" data-aos="zoom-in-up" data-aos-delay="300">
                  <img src={process.env.PUBLIC_URL + '/Certificate images/Deloitte logo.png'} alt="Deloitte Logo" className="cert-bg-img" />
                  <div className="card-body position-relative d-flex flex-column align-items-center justify-content-center" style={{height: '100%'}}>
                    <h5 className="card-title fw-bold">Technology Job Simulation</h5>
                    <div className="cert-back-org">From</div>
                    <h6 className="card-title fw-bold">Deloitte</h6>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="cert-back-title">Technology Job Simulation</div>
                  <div className="cert-back-org">Deloitte</div>
                  <div className="cert-back-desc">Simulated real-world technology consulting tasks, including client communication, analysis, and solution design.</div>
                  <div className="cert-back-date">Issued: Jun 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications; 