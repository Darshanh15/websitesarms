import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-left">
        <p className="contact-subtitle">GET IN TOUCH</p>
        <h2 className="contact-title">Please Contact Us</h2>

        <div className="contact-box">
          <div className="contact-item">
            <div className="icon-box"><FaMapMarkerAlt /></div>
            <div>
              <h4>Address</h4>
              <p>22/255A - Hidayath Nagar, Kalamassery,<br />Ernakulam</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon-box"><FaPhoneAlt /></div>
            <div>
              <h4>Phone</h4>
              <p>91 9778617263</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon-box"><FaEnvelope /></div>
            <div>
              <h4>Email</h4>
              <p>queries@Farm2bizz.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Phone Number" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Company" />
          </div>
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
