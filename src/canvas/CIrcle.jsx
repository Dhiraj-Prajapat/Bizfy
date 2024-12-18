import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Circle.css'

const CIrcle = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.to(circleRef.current, {
      background: "radial-gradient(circle,#0E62A6 0%, rgba(0,0,0,0) 70%)",
      duration: 2,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return <div ref={circleRef} className="animated-circle"></div>;
};

export default CIrcle;

