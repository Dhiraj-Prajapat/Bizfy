import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroContent from "./Components/HeroContent";
import AgencyHero from "./Components/AgencyHero";
import Process from "./Components/Process";
import ServicesSection from "./Components/ServicesSection";
import Testimonials from "./Components/Testimonials";
import ContactPage from "./Components/ContactPage";
import Footer from "./Components/Footer";
import Dot from "./canvas/Dot";
import StarryBackground from "./canvas/StarryBackground";
import CIrcle from "./canvas/CIrcle";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <>
      <Dot />
      <Navbar />
      <div id="hero" style={{ position: "relative", zIndex: 2 ,height:'100vh' }}>
        <StarryBackground />
        <CIrcle />
        <HeroContent />
      </div>
      <div id="agency" style={{ marginTop: "80px" }}>
        <AgencyHero />
      </div>

      <div id="process">
        <Process />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
      <Footer />
    </>
  );
}

export default App;

