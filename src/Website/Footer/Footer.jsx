
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-section">
        <div className="footer-box">
          <h2>NIS</h2>
          <p>L B Nagar</p>
          <p>Hyderabad,</p>
          <p>Telangana State.</p>
        </div>
        <div className="footer-box">
          <h3>LINKS</h3>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-box">
          <h3>OUR SERVICES</h3>
          <ul>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Domain and Hosting</li>
            <li>General IT Consultations</li>
          </ul>
        </div>
        <div className="footer-box">
          <h3>SOCIAL MEDIA LINKS.</h3>
          <p>FOLLOW US ON SOCIAL MEDIA.</p>
          <div className="social-icons">
            <i className="fa fa-twitter"></i>
            <i className="fa fa-facebook"></i>
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright © 2024 Nykerthy IT Sol. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
