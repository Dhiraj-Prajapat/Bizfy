
import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title"  data-aos="fade-right">
        Get in <span className="highlight">touch</span>
      </h1>

      <div className="contact-grid">
        {/* Contact Information */}
        <div className="contact-info">
          <div className="info-item">
            <p className="info-label">Office</p>
            <p>Keizersgracht 520, 1017EK</p>
            <p>Amsterdam</p>
            <p>The Netherlands</p>
          </div>

          <div className="info-item">
            <p className="info-label">Email</p>
            <a href="mailto:mail@nebula.com" className="info-link">
              mail@nebula.com <span className="arrow">↗</span>
            </a>
          </div>

          <div className="info-item">
            <p className="info-label">Phone</p>
            <a href="tel:+31202439223" className="info-link">
              +31 (0) 20 343 9223 <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="+31 (0) 20 343 9223" />
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="4" placeholder="Your message here..."></textarea>
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
