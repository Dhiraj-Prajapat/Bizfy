import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            {/* Header Section */}
            <header className="footer-header">
                <h1 className="footer-heading" data-aos="fade-right">Let&apos;s talk.</h1>
                <a href="mailto:mail@nebula.com" className="footer-email" data-aos="fade-left">
                    mail<span className="email-highlight">@</span>bizfy.com
                </a>
            </header>

            {/* Footer Section */}
            <footer className="footer-content">
                <div className="footer-grid">
                    {/* Contact Info Column */}
                    <div className="footer-column">
                        <p className="footer-year">© 2024</p>
                        <a href="mailto:mail@nebula.com" className="footer-link">
                            mail@bizfy.com
                        </a>
                        <a href="tel:+31202439223" className="footer-link">
                            +31 (0) 20 343 9223
                        </a>
                        <p className="footer-local-time">Local time: 12:36:00 (CET)</p>
                    </div>

                    {/* Navigation Column */}
                    <div className="footer-column" >
                        <a href="#process" className="footer-link">Process</a>
                        <a href="#services" className="footer-link">Services</a>
                        <a href="#work" className="footer-link">Work</a>
                        <a href="#plans" className="footer-link">Plans</a>
                        <a href="#team" className="footer-link">Team</a>
                        <a href="#contact" className="footer-link">
                            Contact <span className="link-arrow">↗</span>
                        </a>
                        <a href="#404" className="footer-link">404</a>
                    </div>

                    {/* Social Links Column */}
                    <div className="footer-column socialLink">
                        <a href="#linkedin" className="footer-link">LinkedIn</a>
                        <a href="#twitter" className="footer-link">Twitter</a>
                        <a href="#instagram" className="footer-link">Instagram</a>
                        <a href="#dribbble" className="footer-link">Dribbble</a>
                    </div>

                    {/* Credits Column */}
                    <div className="footer-column footer-credit">
                        <p>Template by</p>
                        <p>Tibor Bregman</p>
                        <p>BlueStar Supply</p>
                    </div>
                </div>
                <div className="footer_img_container">
                    <div className="footer_img">
                        <img src='/white logo-02.png' alt="Brand-logo" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
