import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <nav className="footer">
      <div className="footer-left"/>
      <div className="footer-center">
        <ul className="nav-links">
          <li>
            <a href="https://www.instagram.com/rogueheartcosplay/" target="_blank">Instagram</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@rogueheartcosplay" target="_blank">Youtube</a>
          </li>
          <li>
            <a href="https://rogueheartcosplay.tumblr.com" target="_blank">Tumblr</a>
          </li>
          <li>
            <a href="https://x.com/rogueheartcos" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-right"/>
    </nav>
  );
};

export default Footer;