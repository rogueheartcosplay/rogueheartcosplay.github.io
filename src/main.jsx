import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Costumes from './pages/Costumes/Costumes.jsx'
import Awards from './pages/Awards/Awards.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Wavemother from './pages/Costumes/Wavemother/Wavemother.jsx'

createRoot(document.getElementById('root')).render(
    // <App />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="costumes" element={<Costumes />} />
            <Route path="costumes/wavemother" element={<Wavemother />} />
            <Route path="awards" element={<Awards />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
)
