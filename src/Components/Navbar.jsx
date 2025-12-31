



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState(false);

  // Scroll handler
  const changeColor = () => {
    if (window.scrollY >= 50) { // scroll threshold
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // Add scroll listener once
  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <header className={color ? "header header-bg" : "header"}>
      <Link to="/" className="logo">
        <h1>Portfolio</h1>
      </Link>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="close-icon" onClick={() => setMenuOpen(false)}>✕</div>

        <ul>
          <li onClick={() => setMenuOpen(false)}><Link to="/">Home</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/project">Projects</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/about">About</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/project">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </header>
  );
};

export default Navbar;
