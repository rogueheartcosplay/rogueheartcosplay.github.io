import React from 'react';
import Hero from '../../../components/Hero/Hero';
import Media from '../../../components/Media/Media';
import DSCF0405 from '../../../assets/DSCF0405.jpg';
import DSCF0496 from '../../../assets/DSCF0496.jpg';
import DSCF0308 from '../../../assets/DSCF0308.jpg';
import DSCF0331 from '../../../assets/DSCF0331.jpg';
import './Wavemother.css';

function Wavemother() {

  return (
    <div className="wavemother">
        <Hero/>
        <div className="content">
            <h1>Wavemother's Robe</h1>
            <h2>September 2023 - October 2024</h2>
        </div>
        <Media>
          <img src={DSCF0405} alt="Rogue Heart Cosplay standing in the forest wearing the Wavemother's Robe." />
          <img src={DSCF0308} alt="Rogue Heart Cosplay standing in the forest wearing the Wavemother's Robe." />
          <img src={DSCF0331} alt="Rogue Heart Cosplay standing in the forest wearing the Wavemother's Robe." style={{'object-position': '65% 50%'}}/>
        </Media>
        <div className="content">
            <h3>About the Costume</h3>
            <h3>Planning</h3>
            <h3>Patterning</h3>
            <h3>Dress</h3>
            <h3>Jewelry</h3>
            <h3>Cape</h3>
            <h3>Staff</h3>
            <h3>Wig</h3>
        </div>
    </div>
  )
};

export default Wavemother