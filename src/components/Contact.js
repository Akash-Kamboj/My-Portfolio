import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';


function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("success");
  const [toastMsg, setToastMsg] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsSending(true);
    emailjs
      .sendForm(
        "service_foaf70j", // Replace with your EmailJS service ID
        "template_5oshpw7", // Replace with your EmailJS template ID
        form.current,
        "z38zojbxMGYCMu4DE" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setToastType("success");
          setToastMsg("Message sent successfully!");
          setShowToast(true);
          setStatus("");
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          setToastType("error");
          setToastMsg("Failed to send message. Please try again.");
          setShowToast(true);
          setStatus("");
          setIsSending(false);
        }
      );
  };

  // Auto-hide toast after 3 seconds
  React.useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <section
      id="contact"
      className="py-5 contact-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
      data-aos="fade-up"
    >
      <div className="container">
        <h2 className="mb-4 text-center" style={{ color: '#222', fontWeight: 600, letterSpacing: '1px' }}>Contact</h2>
        <p className="mb-5 text-center" style={{ color: '#6c7a89', fontSize: '1.1rem' }}>
          I'd love to hear from you! Please fill out the form below and I'll get back to you soon.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6">
            <div
              className="card contact-card border-0 shadow-sm p-4"
              style={{
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(34, 42, 68, 0.07)',
                transition: 'background 0.3s, box-shadow 0.3s',
                background: 'rgb(255, 255, 255)'
              }}
            >
              <form ref={form} autoComplete="off" onSubmit={sendEmail} onReset={(e) => { e.target.reset(); }}>
                {/* Hidden fields for recipient info */}
                <input type="hidden" name="to_name" value="Akash Kamboj" />
                <input type="hidden" name="to_email" value="akashkamboj633@gmail.com" />
                <div className="mb-3">
                  <label htmlFor="name" className="form-label" style={{ fontWeight: 500 }}>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    style={{
                      borderRadius: '8px',
                      background: '#f5f7fa',
                      border: '1px solid #e3eafc',
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label" style={{ fontWeight: 500 }}>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    style={{
                      borderRadius: '8px',
                      background: '#f5f7fa',
                      border: '1px solid #e3eafc',
                    }}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label" style={{ fontWeight: 500 }}>Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Enter your message"
                    style={{
                      borderRadius: '8px',
                      background: '#f5f7fa',
                      border: '1px solid #e3eafc',
                    }}
                    required
                  ></textarea>
                </div>
                <div className="d-flex gap-2">
                  <button
                    type="submit"
                    className="btn w-100"
                    style={{
                      background: isSending ? '#a3c2fa' : '#4f8cff',
                      color: '#fff',
                      borderRadius: '8px',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      boxShadow: '0 2px 8px rgba(79,140,255,0.08)',
                      border: 'none',
                      cursor: isSending ? 'not-allowed' : 'pointer',
                      opacity: isSending ? 0.7 : 1,
                    }}
                    disabled={isSending}
                    aria-busy={isSending}
                  >
                    {isSending ? (
                      <span>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </span>
                    ) : (
                      'Send Email'
                    )}
                  </button>
                  <button
                    type="reset"
                    className="btn w-100"
                    style={{
                      background: '#e3eafc',
                      color: '#4f8cff',
                      borderRadius: '8px',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      boxShadow: '0 2px 8px rgba(79,140,255,0.08)',
                      border: 'none',
                    }}
                    disabled={isSending}
                  >
                    Clear
                  </button>
                </div>
                {status && (
                  <div className="mt-3 text-center" style={{ color: '#4f8cff', fontWeight: 500 }}>
                    {status}
                  </div>
                )}
              </form>
              {/* Toast Notification */}
              {showToast && (
                <div
                  className="toast-notification"
                  role="status"
                  aria-live="polite"
                  style={{
                    position: 'fixed',
                    left: '50%',
                    bottom: '40px',
                    transform: 'translateX(-50%)',
                    minWidth: '220px',
                    background: toastType === 'success' ? '#e6f9f0' : '#ffeaea',
                    color: toastType === 'success' ? '#1a7f5a' : '#c0392b',
                    border: `1px solid ${toastType === 'success' ? '#1a7f5a' : '#c0392b'}`,
                    borderRadius: '8px',
                    padding: '14px 24px',
                    boxShadow: '0 2px 12px rgba(34,42,68,0.10)',
                    zIndex: 9999,
                    fontWeight: 500,
                    fontSize: '1rem',
                    textAlign: 'center',
                  }}
                >
                  {toastMsg}
                </div>
              )}
              <div className="mt-4 text-center">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  className="me-3 text-decoration-none"
                  aria-label="Email"
                  style={{ color: '#4f8cff' }}
                >
                  <i className="fas fa-envelope fa-2x" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/akash-kamboj/"
                  className="me-3 text-decoration-none"
                  aria-label="LinkedIn"
                  style={{ color: '#0077b5' }}
                >
                  <i className="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                </a>
                <a
                  href="https://github.com/Akash-Kamboj"
                  className="text-decoration-none"
                  aria-label="GitHub"
                  style={{ color: '#222' }}
                >
                  <i className="fab fa-github fa-2x" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Contact; 