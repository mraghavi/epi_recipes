import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Create a separate CSS file for styling

const NavBar = () => {
  return (
    <nav className="top-nav">
      <div className="logo">
        <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/2c/01/0d/2c010d54-c96b-1955-83c1-1170e421c209/source/1200x630bb.jpg" alt="EpiRecipes Logo" /> {/* Replace with your logo path */}
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
