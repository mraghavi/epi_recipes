import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero-section">
        <h1>Welcome to EpiRecipes</h1>
        <p>Your go-to place for delicious and healthy recipes!</p>
      </header>
      <div className="sections">
        <div className="section-item top-picks">
          <h2>Top Picks</h2>
          <p>Check out our top recipes!</p>
          <Link to="/top-picks" className="section-link">Explore</Link>
        </div>
        <div className="section-item desserts">
          <h2>Desserts</h2>
          <p>Discover our delicious desserts!</p>
          <Link to="/desserts" className="section-link">Explore</Link>
        </div>
        <div className="section-item vegetarian">
          <h2>Vegetarian</h2>
          <p>Find healthy vegetarian recipes!</p>
          <Link to="/vegetarian" className="section-link">Explore</Link>
        </div>
      </div>
      <div className="additional-sections">
        <div className="section-item salads">
          <h2>Salads</h2>
          <p>Fresh and healthy salads!</p>
          <Link to="/salads" className="section-link">Explore</Link>
        </div>
        <div className="section-item soups">
          <h2>Soups</h2>
          <p>Warm and comforting soups!</p>
          <Link to="/soups" className="section-link">Explore</Link>
        </div>
        <div className="section-item sauces">
          <h2>Sauces</h2>
          <p>Delicious sauces to complement your meals!</p>
          <Link to="/sauces" className="section-link">Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
