import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when an anchor tag is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div id="navbar">
      <div className="heading">
        <h1>NS</h1>
        <h2>Nykerthy IT Solution</h2>
      </div>

      <div className={`anchorTags ${isMenuOpen ? "active" : ""}`}>
        <a href="#Introduction" onClick={closeMenu}>About</a>
        <a href="#Services" onClick={closeMenu}>Services</a>
        <a href="#Careers" onClick={closeMenu}>Careers</a>
        <a href="#Contacts" onClick={closeMenu}>Contact Us</a>
        <div className="btn">
          <button>Apply Jobs</button>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="menuIcon" onClick={toggleMenu}>
        <i className="bi bi-list" id="boosIcon"></i>
      </div>
    </div>
  );
}

export default NavBar;
