import { useState } from 'react';
import './ContactPage.css';
import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const proxyUrl = "https://thingproxy.freeboard.io/fetch/"; // Proxy URL
  const googleScriptUrl = "https://script.google.com/macros/s/AKfycbwMf4mAI89GofLo6-c-Ad2wT9GAA1MznVjAMGYxwsXR3B3OvZ9QEuj14tmglM5hj33uaw/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        ` ${proxyUrl}${googleScriptUrl}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Form Submitted Successfully");
      if (response.data.success) {
        setFormData({ firstName: "", lastName: "", email: "", contact: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting the form.");
    }

    // for reset the form

    setFormData({
      lastName: '',
      firstName: '',
      email: '',
      contact: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title" data-aos="fade-right">
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
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="+31 (0) 20 343 9223"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="4"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
            ></textarea>
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;