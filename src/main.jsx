import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Costumes from './pages/Costumes/Costumes.jsx'
import Awards from './pages/Awards/Awards.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Wavemother from './pages/Blog/Wavemother/Wavemother.jsx'
import Sorbet from './pages/Blog/Sorbet/Sorbet.jsx';
import Blog from './pages/Blog/Blog.jsx'

createRoot(document.getElementById('root')).render(
    // <App />
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="costumes" element={<Costumes />} />
            <Route path="blog/wavemother" element={<Wavemother />} />
            <Route path="blog/sorbet" element={<Sorbet />} />
            <Route path="awards" element={<Awards />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </HashRouter>
)
