import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      <section className="about-us-content">
        <div className="about-us-text">
          <p>
            Welcome to EpiRecipes, your go-to destination for discovering and sharing the best recipes from around the world. Our mission is to provide a platform where food enthusiasts can find, share, and explore an extensive collection of delicious recipes that cater to all tastes and dietary preferences.
          </p>
          <p>
            Founded in 2024, EpiRecipes started with a simple idea: to make cooking enjoyable and accessible for everyone. Whether you are a seasoned chef or a beginner, our platform offers a diverse range of recipes, tips, and inspiration to help you create memorable meals for yourself and your loved ones.
          </p>
          <p>
            Our team is passionate about food and dedicated to bringing you high-quality recipes that are tested and curated for their flavor and ease of preparation. We believe in the power of food to bring people together, and we are committed to fostering a community of home cooks who love to share their culinary creations.
          </p>
          <p>
            Thank you for visiting EpiRecipes. We hope you find our site useful and inspiring. If you have any questions, feedback, or suggestions, please feel free to <a href="/contact">contact us</a>. Happy cooking!
          </p>
        </div>
        <div className="about-us-image">
          <img src="https://i.pinimg.com/originals/27/55/55/275555350464b8cfeadf559f476d7ec4.jpg" alt="About Us" />
        </div>
      </section>
    </div>
  );
   
}

export default About;
