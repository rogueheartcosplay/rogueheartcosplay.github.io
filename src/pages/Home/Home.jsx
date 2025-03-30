import Hero from '../../components/Hero/Hero.jsx'
import Copy from '../../components/Copy/Copy.jsx'
import './Home.css'

function Home() {

  return (
    <div className="home">
      <Hero/>
      <div className="content">
        <h1>Welcome!</h1>
        <h2>This site is a work in progress (just like my costumes...)</h2>
      </div>
    </div>
  )
};

export default Home