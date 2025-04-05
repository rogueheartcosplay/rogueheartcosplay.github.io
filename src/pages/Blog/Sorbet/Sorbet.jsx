import React from 'react';
import Hero from '../../../components/Hero/Hero';
import Media from '../../../components/Media/Media';
import DSCF0405 from '../../../assets/DSCF0405.jpg';
import './Sorbet.css';

function Sorbet() {

  return (
    <div className="sorbet">
        <Hero/>
        <div className="content">
            <h1>Exorcism Sorbet</h1>
            <h2>Cosplay Prop Tutorial</h2>
        </div>
        <Media>
          <img src={DSCF0405} alt="Rogue Heart Cosplay standing in the forest wearing the Wavemother's Robe." />
        </Media>
        <div className="content">
          <div>
            <h3>Tools & Materials</h3>
              <p>I used a combination of materials from my local craft store, the thrift store, and items I already owned. Here's the full "start from scratch" list.</p>
              <p>Tools</p>
              <ol>
                <li>
                Hot glue gun - $15
                </li>
                <li>
                Scissors - $7
                </li>
                <li>
                Paint brush - $2
                </li>
              </ol>
              <p>Materials</p>
              <ol>
                <li>
                Watercolor paint - $5
                </li>
                <li>
                Hot glue sticks - $4
                </li>
                <li>
                Mod podge - $4
                </li>
                <li>
                Craft foam balls - $10
                </li>
                <li>
                Fake coins - $2
                </li>
                <li>
                Costume rings - $2
                </li>
                <li>
                Clear confetti - $2
                </li>
                <li>
                2 Spoons (thrifted) - $2
                </li>
                <li>
                Bowl (thrifted) - $1
                </li>
              </ol>
              <p>Total Cost - $56</p>
              </div>
              <div>
            <h3>Instructions</h3>
            <p>1. Cut styrofoam spheres in half</p>
            <p>2. Glue half-spheres into the bowl with hot glue</p>
            <p>3. Use leftover scraps of foam to fill in large gaps</p>
            <p>4. Carve the next layer of spheres to fit snugly above the first layer</p>
            <p>5. Glue the next layer in place</p>
            <p>6. Once again, fill in any large gaps with scrap foam</p>
            <p>7. Add some “melted sorbet" to the edges and small gaps with hot glue and confetti</p>
            <p>8. After waiting for the hot glue to dry, pour off any excess confetti</p>
            <p>9. Prepare your “treasure bugs” (coins and gems) to add to the sorbet</p>
            <p>10. Glue the coins and gems to the foam spheres</p>
            <p>11. Score lines into the foam spheres to mimic the look of real sorbet</p>
            <p>12. Use watercolor paints to color the foam spheres</p>
            <p>13. Let the spheres dry for at least a few hours</p>
            <p>14. Cover a small section of foam in a thick layer of mod podge</p>
            <p>15. Cover the mod podge in confetti, similar to the hot glue method</p>
            <p>16. After waiting a couple minutes, pour off any excess confetti</p>
            <p>17. Repeat steps 14-16 until all foam surfaces are covered in confetti</p>
            <p>18. Let the sorbet dry over night</p>
            <p>19. Voila! Enjoy a nutritious bowl of Exorcism Sorbet</p>
            <p>20. Optional: Repeat this process with a spoon instead of a bowl to look like a scoop of sorbet</p>
            </div>
        </div>
    </div>
  )
};

export default Sorbet