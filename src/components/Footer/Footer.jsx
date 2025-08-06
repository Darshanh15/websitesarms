

import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube , FaWhatsapp} from "react-icons/fa";
import { Link } from 'react-router-dom';

import './Footer.scss'
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="logo" />
          <p>FARM2BIZZ</p>
        </div>

        <div className="footer-links">
          <h4>Address Links</h4>
          <ul>
            <li>22/255A - Hidayath Nagar,</li>
            <li>Kalamassery,</li>
            <li>Ernakulam - </li>
            {/* <li><a href="/privacy">Privacy Policy</a></li> */}
          </ul>
        </div>

<div className="footer-links">
  <h4>Quick Links</h4>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
</div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="/"><FaFacebookF /></a>
            <a href="/"><FaInstagram /></a>
            <a href="/"><FaYoutube /></a>
            <a href="/"> <FaWhatsapp /> </a>
            
          </div>
        </div>
      </div>
      

      <div className="footer-bottom">
        © {new Date().getFullYear()} FARM2BIZZ All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
