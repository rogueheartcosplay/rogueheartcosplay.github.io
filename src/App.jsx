import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Hero from './components/Hero/Hero.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Footer/>
    </div>
  )
};

export default App
