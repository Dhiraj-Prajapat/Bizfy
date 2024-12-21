import { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./NAvbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Menu Function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <span className={`logo-dot ${isMenuOpen ? "large-logo" : ""}`}>
          <img src="/white logo-02.png" className="logo_image" alt="Logo" />
        </span>
      </div>

      {/* Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "bar-active" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "bar-active" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "bar-active" : ""}`}></div>
      </div>

      {/* Navlinks */}
      <div className={`navbar-links ${isMenuOpen ? "show-links" : ""}`}>
        <Link to="hero" smooth={true} duration={800} onClick={toggleMenu}>Home</Link>
        <Link to="agency" smooth={true} duration={800} onClick={toggleMenu}>Agency</Link>
        <Link to="process" smooth={true} duration={800} onClick={toggleMenu}>Process</Link>
        <Link to="services" smooth={true} duration={800} onClick={toggleMenu}>Section</Link>
        <Link to="testimonials" smooth={true} duration={800} onClick={toggleMenu}>Testimonial</Link>
        <Link to="contact" smooth={true} duration={800} onClick={toggleMenu}>Contact</Link>
      </div>

      {/* Button */}
      <div className="navbar-button">
        <button>Buy this template</button>
      </div>
    </nav>
  );
};

export default Navbar;

