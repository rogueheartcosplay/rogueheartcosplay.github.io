import React from 'react';
import Hero from '../../../components/Hero/Hero';
import Media from '../../../components/Media/Media';
import DSCF0405 from '../../../assets/DSCF0405.jpg';
import DSCF0331 from '../../../assets/DSCF0331.jpg';
import wavemotherReference from '../../../assets/wavemotherReference.jpg';
import './Wavemother.css';

function Wavemother() {

  return (
    <div className="wavemother">
        <Hero/>
        <div className="content">
            <h1>Wavemother's Robe</h1>
            <h2>Build Log: September 2023 - October 2024</h2>
        </div>
        <Media>
          <img src={DSCF0405} alt="Rogue Heart Cosplay standing in the forest wearing the Wavemother's Robe." />
          <img src={wavemotherReference} alt="Screenshot of the Wavemother's Robe front and back view from Baldur's Gate 3." />
          <img src={DSCF0331} alt="Rogue Heart Cosplay standing in the forest wearing the Wavemother's Robe." style={{'object-position': '65% 50%'}}/>
        </Media>
        <div className="content">
            <h3>About the Costume</h3>
            <h3>Planning</h3>
            <h3>Patterning</h3>
              <p>
                I started out by draping & flat drafting a TON of patterns. I went through 3+ mock-ups for the dress itself (and even ended up changing it slightly after the first wear!) 
              </p>
              <p>
                There was a lot to consider: how much leg am I comfortable showing? How much plunge? Do I need a corset/special structure? Where do I put the zipper?
              </p>
              <p>
                The sleeves were by far the most difficult part. Those suckers got 5+ mock-ups before I was happy with the look & range of movement. I tried some really funky adjustments (see bottom right) before landing on a slight puff sleeve (not pictured!)
              </p>
            <h3>Dress Materials</h3>
              <p>
                Amidst the patterning, I ordered a lot of fabric swatches. I spent a good few weeks prowling every corner of the internet for my perfect scale brocade. My main three priorities were: 
                <ol>
                  <li>Be a woven pattern -- no prints or faux leather that could degrade</li>
                  <li>Have 1" wide scales -- proportion is key to matching the reference</li>
                  <li>Be a suitable shade of aqua -- this is the wavemother's robe, after all ;)</li>
                </ol>
              </p>
              <p>
                I ended up finding a lovely upholstery fabric. It's slightly thicker than I wanted and the shade of aqua is a little too dark, but it met my first two priorities so I was willing to compromise. 
              </p>
              <p>
                While on the hunt for materials, I also decided that I would learn to crochet so I could make my own lace trim for the robe. It was cost-effective (lace is expensive!), easy to customize, and wouldn’t require any dyeing to get the right shade.
              </p>
              <p>
                After some experimentation, I ended up modifying this <a href="https://freevintagecrochet.com/edging-patterns/spool56/8081-chippendale-edging-pattern">free vintage pattern</a> (right)
              </p>
              <p>
                The trim was made with size 30 thread and a size 10 hook. There are about 12 yards total in the cosplay! 
              </p>
            <h3>Jewelry</h3>
              <p></p>
            <h3>Cape</h3>
              <p></p>
            <h3>Owlbear Plush</h3>
              <p></p>
            <h3>Staff</h3>
              <p></p>
            <h3>Wig</h3>
              <p></p>
            <h3>Final Stats</h3>
              <p>
                <li>
                  Total Construction Time: 290 hours
                </li>
                <li>
                  Photoshoots: 4
                </li>
                <li>
                  Conventions: 2 (and counting!)
                </li>
                <li>
                  Awards: 1
                </li>
              </p>
        </div>
    </div>
  )
};

export default Wavemother