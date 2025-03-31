import Hero from '../../components/Hero/Hero.jsx'
import Media from '../../components/Media/Media.jsx'
import tobe from '../../assets/tobe.jpg'
import DSCF0405 from '../../assets/DSCF0405.jpg'
import aloy from '../../assets/aloy.jpg'
import './Home.css'

function Home() {

  return (
    <div className="home">
      <Hero/>
      <div className="content">
        <h1>Rogue Heart Cosplay</h1>
        <h2>Crafter, Cosplayer, Gamer</h2>
        <p>Hi there! I'm Heather, a Chicago-based cosplay maker with a passion for video games. By day I'm a software developer, and by night I spent my time sewing, 3D modeling, and foamsmithing. I love to focus on craftsmanship and enjoy researching new techniques. I've made costumes from games such as Baldur's Gate 3, Horizon Forbidden West, and  Nier: Automata. For my most recent work, find me on <a href="https://www.instagram.com/rogueheartcosplay/" target="_blank">Instagram</a> — and thanks for visiting!</p>
        <Media>
          <img src={DSCF0405} alt="Rogue Heart Cosplay standing in the forest wearing the Wavemother's Robe." />
          <img src={aloy} alt="Rogue Heart Cosplay standing in the sand dressed as Aloy from Horizon Forbidden West."/>
          <img src={tobe} alt="Rogue Heart Cosplay standing on a rock dressed as 2B from Nier: Automata."/>
        </Media>
        <h2>Just like my costumes, this site is a work-in-progress</h2>
      </div>
    </div>
  )
};

export default Home