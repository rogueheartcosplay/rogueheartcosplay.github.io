import React from 'react';
import Hero from '../../components/Hero/Hero.jsx'
import { Link } from 'react-router-dom';
import './Costumes.css'

function Costumes() {

  return (
    <div className="costumes">
      <Hero/>
      <h1>Costumes</h1>
      <h2>
          <Link to="/costumes/wavemother">Wavemother's Robe</Link>
      </h2>
    </div>
  )
};

export default Costumes