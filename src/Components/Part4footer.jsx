import React from 'react';
import App from "./App.css";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Shopping is cheaper than therapy</h2>
        
       
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul style={{listStyle:"none"}}>
            <li>
              <a href="https://facebook.com" target="_blank" rel="">
                <FontAwesomeIcon icon={faFacebookF} /> facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="">
                <FontAwesomeIcon icon={faTwitter} /> twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;