// src/components/NavBar/index.js
import React from 'react';
import './styles.css';
import logo from './logo.svg';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import the CSS


//<Logo className="navbar-logo-image" />

function NavBar({ onAbout, onGuidelines, onContact }) {
  return (
    <nav className="navbar">
      
      
      <div className="navbar-logo">
        <img src={logo} alt="Match Logo" className="navbar-logo-image" />
      </div>

      
      

      {/* Navigation links */}
      <div className="navbar-links">
        <button onClick={onAbout} className="navbar-item">About</button>
        <button onClick={onGuidelines} className="navbar-item">Guidelines</button>
        <button onClick={onContact} className="navbar-item">Contact</button>
        {/* Add more navigation items if needed */}
      </div>

      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.reddit.com" target="_blank" rel="noopener noreferrer" className="social-icon-reddit">
        <i className="fab fa-reddit-alien"></i>
      </a>

      {/* Other elements like login/signup could go here */}
    </nav>
  );
}

export default NavBar;
