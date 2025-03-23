import React from 'react';
import './Hero.css';
import banner from '../../assets/banner.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <img src={banner} alt="Rogue Heart Cosplay standing in the forest wearing the Wavemother's Robe." />
    </div>
  );
};

export default Hero;