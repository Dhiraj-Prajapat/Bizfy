import { useState } from 'react';
import './ContactPage.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';  // Import uuid library

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear errors as user types
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validation function for contact number
  const validateContact = (contact) => {
    const contactRegex = /^[0-9]{10}$/; // Exactly 10 numeric digits
    if (!contact) {
      return "Contact number is required";
    } else if (!contactRegex.test(contact)) {
      return "Enter a valid 10-digit contact number";
    }
    return "";
  };

  // Validation function for email
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      return "Email is required";
    } else if (!emailRegex.test(email)) {
      return "Enter a valid email address";
    }
    return "";
  };

  const proxyUrl = "https://thingproxy.freeboard.io/fetch/";
  const googleScriptUrl = "https://script.google.com/macros/s/AKfycbwMf4mAI89GofLo6-c-Ad2wT9GAA1MznVjAMGYxwsXR3B3OvZ9QEuj14tmglM5hj33uaw/exec";

  const checkDuplicateData = async () => {
    try {
      // Send GET request to check if email or phone number already exists
      const response = await axios.get(`${proxyUrl}${googleScriptUrl}?email=${formData.email}&contact=${formData.contact}`);
      
      // Check if email or contact exists in the response
      if (response.data.duplicate) {
        return response.data.message; // This message could be something like "Email or phone number already exists"
      }
      
      return null; // No duplicates found
    } catch (error) {
      console.error("Error checking duplicates:", error);
      return "Error checking for duplicates.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate contact and email
    const contactError = validateContact(formData.contact);
    const emailError = validateEmail(formData.email);

    if (contactError && emailError) {
      setErrors({ ...errors, contact: contactError, email: emailError });
      return;
    }

    // Check for duplicate email or contact
    const duplicateError = await checkDuplicateData();
    if (duplicateError) {
      setErrors({ ...errors, duplicate: duplicateError });
      return;
    }

    // Generate a unique ID using uuid to prevent duplicate data
    const uniqueID = uuidv4();

    // Prepare data to send to Google Sheets (include unique ID)
    const formDataWithID = { ...formData, uniqueID };

    try {
      const response = await axios.post(
        `${proxyUrl}${googleScriptUrl}`,
        formDataWithID,
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
      alert("This mail id or phone number has been used, try again with different mail or phone number.");
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      message: "",
    })

      
    
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
              {/* Display email validation error */}
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="1234567890"
              />
              {/* Display contact validation error */}
              {errors.contact && <p style={{ color: "red" }}>{errors.contact}</p>}
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

          {/* Display duplicate error */}
          {errors.duplicate && <p style={{ color: "red" }}>{errors.duplicate}</p>}

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
