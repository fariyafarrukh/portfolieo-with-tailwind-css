import React from 'react';
import Navbar from './Navbar';
import './Hero.css'; // Import the custom CSS file

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <Navbar />
      <div className="container grid">
        <div className="lg-hidden"></div>
        <div className="hero-text">
          <div>
            <p data-aos="zoom-in-up">I</p>
            <p data-aos="zoom-in-up">am</p>
            <p data-aos="zoom-in-up">Fariya</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

