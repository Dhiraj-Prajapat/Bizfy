// import React, { useEffect } from 'react';
// import './AgencyHero.css';
// import { gsap } from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import SplitType from 'split-type';

// gsap.registerPlugin(ScrollTrigger);

// const AgencyHero = () => {
//   useEffect(() => {
//     const agencyText = document.querySelector('.agency-hero-heading');
//     const text = new SplitType(agencyText, { types: 'chars' }); // Split text into individual characters

//     gsap.fromTo(
//       text.chars,
//       {
//         opacity: 0,
//         y: 30,
//       },
//       {
//         opacity: 1,
//         delay:0.2,
//         y: 0,
//         duration: 1,
//         stagger: 0.05,
//         scrollTrigger: {
//           trigger: agencyText,
//           start: 'top 80%',
//           end: 'top 50%',
//           scrub: true,
//           markers: false,
//         },
//       }
//     );
//   }, []);

//   return (
//     <div className="agency-hero">
//       <div className="agency-hero-container">
//         <div className="agency-hero-content">
//           <h1 className="agency-hero-heading">
//             We're a <span className="service">full-service</span> AI Automation <br /> Agency
//             <span className="emoji">👋</span>
//             <span>We turn businesses into AI-</span>
//             <br />
//             <span className="highlight1">driven</span>
//             <span className="emoji">✨</span>
//             <span>industry leaders.</span>
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AgencyHero;



import React, { useEffect } from 'react';
import './AgencyHero.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const AgencyHero = () => {
  useEffect(() => {
    // Check if screen width is greater than 480px
    if (window.innerWidth > 480) {
      const agencyText = document.querySelector('.agency-hero-heading');
      const text = new SplitType(agencyText, { types: 'chars' }); // Split text into individual characters

      gsap.fromTo(
        text.chars,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          delay: 0.2,
          y: 0,
          duration: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: agencyText,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
            markers: false,
          },
        }
      );
    }
  }, []);

  return (
    <div className="agency-hero">
      <div className="agency-hero-container">
        <div className="agency-hero-content">
          <h1 className="agency-hero-heading">
            We're a <span className="service">full-service</span> AI Automation <br /> Agency
            <span className="emoji">👋</span>
            <span>We turn businesses into AI-</span>
            <br />
            <span className="highlight1">driven</span>
            <span className="emoji">✨</span>
            <span>industry leaders.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AgencyHero;
