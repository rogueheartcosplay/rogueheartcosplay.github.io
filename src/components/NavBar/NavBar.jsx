import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    Rogue Heart Cosplay
                </a>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/costumes">Costumes</Link>
                    </li>
                    <li>
                        <Link to="/awards">Awards</Link>
                        
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
  };

export default NavBar;