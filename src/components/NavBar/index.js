// src/components/NavBar/index.js
import React from 'react';
import './styles.css';

function NavBar({ onAbout, onGuidelines, onContact }) {
  return (
    <nav className="navbar">
      {/* Assuming you have some kind of logo or title */}
      <div className="navbar-logo">
        {/* Insert your logo or title here */}
      </div>

      {/* Navigation links */}
      <div className="navbar-links">
        <button onClick={onAbout} className="navbar-item">About</button>
        <button onClick={onGuidelines} className="navbar-item">Guidelines</button>
        <button onClick={onContact} className="navbar-item">Contact</button>
        {/* Add more navigation items if needed */}
      </div>

      {/* Other elements like login/signup could go here */}
    </nav>
  );
}

export default NavBar;
