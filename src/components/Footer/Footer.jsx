import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <nav className="footer">
            <div className="footer-left">
                <a href="/" className="logo">
                    Rogue Heart Cosplay
                </a>
            </div>
            <div className="footer-right">
                <ul className="nav-links">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
  };

export default Footer;