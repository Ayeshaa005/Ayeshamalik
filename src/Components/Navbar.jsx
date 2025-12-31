



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    setColor(window.scrollY >= 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  return (
    <header className={color ? 'header header-bg' : 'header'}>
      <Link to="/" className="logo">
        <h1>Portfolio</h1>
      </Link>

      <div className="hamburger" onClick={() => setMenuOpen(true)}>
        <span />
        <span />
        <span />
      </div>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="close-icon" onClick={() => setMenuOpen(false)}>✕</div>
        <ul>
          <li onClick={() => setMenuOpen(false)}><Link to="/">Home</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/project">Projects</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/about">About</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

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
