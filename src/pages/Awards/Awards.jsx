import Hero from '../../components/Hero/Hero.jsx'
import './Awards.css'

function Awards() {

  return (
    <div className="awards">
      <Hero/>
      <div className="content">
        <h1>Awards and Contests</h1>
        <h2>2024</h2>
        <p><strong>Best Journeyman Craftsmanship</strong> - C3 ExtraLife Cosplay Contest </p>
        <h2>2023</h2>
        <p><strong>Best Masters Craftsmanship</strong> - Fan Expo Chicago Craftsmanship Cup</p>
        <p><strong>Juried Participant</strong> - C2E2 Crown Championships of Cosplay (Chicago Qualifier)</p>
        <p><strong>Best in Show</strong> - Uchi Con Cosplay Contest</p>
      </div>
    </div>
  )
};

export default Awards