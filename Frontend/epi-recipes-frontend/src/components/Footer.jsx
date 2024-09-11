import React from 'react';
import './Footer.css'; // No need to modify the CSS, only the content is updated

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><h2>About</h2></li>
        <p>EpiRecipes is your go-to platform for delicious recipes.<br /> Discover, cook, and enjoy meals from around the world!</p>    
      </ul>
      <ul>
        <li><h2>Resources</h2></li>
        <li>Blog</li>
        <li>Recipe Collections</li>
        <li>Cooking Tips</li>
        <li>Newsletter</li>
      </ul>
      <ul>
        <li><h2>Community</h2></li>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Pinterest</li>
      </ul>
      <ul>
        <li><h2>Company</h2></li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Terms of Service</li>    
        <li className="space"><h4>Email</h4></li>    
        <li>support@epirecipes.com</li>
      </ul>
      <ul>
        <li><h2>Copyright</h2></li>   
        <li className="space"><small>@copyright 2024</small></li>    
        <li>All Rights Reserved - EpiRecipes</li>
      </ul>
    </footer>
  );
};

export default Footer;
