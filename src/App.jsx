import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
};

export default App
