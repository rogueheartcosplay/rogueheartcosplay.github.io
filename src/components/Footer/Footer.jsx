import React from 'react';
import './Footer.css';
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import tumblr from '../../assets/tumblr.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
  return (
    <nav className="footer">
      <div className="footer-left"/>
      <div className="footer-center">
        <ul className="nav-links">
          <li>
            <a href="https://www.instagram.com/rogueheartcosplay/" target="_blank">
              <img src={instagram} alt="Instagram"/>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@rogueheartcosplay" target="_blank">
              <img src={youtube} alt="Youtube"/>
            </a>
          </li>
          <li>
            <a href="https://rogueheartcosplay.tumblr.com" target="_blank">
              <img src={tumblr} alt="Tumblr"/>
            </a>
          </li>
          <li>
          <a href="https://x.com/rogueheartcos" target="_blank">
            <img src={twitter} alt="Twitter"/>
          </a>
          </li>
          <li>
            {/* <a href="/contact">Contact</a> */}
          </li>
        </ul>
      </div>
      <div className="footer-right"/>
    </nav>
  );
};

export default Footer;