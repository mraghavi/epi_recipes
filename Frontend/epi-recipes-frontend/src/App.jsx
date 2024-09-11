import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'; // Import NavBar
import Home from './pages/Home'; // Create Home.jsx in the pages folder
import About from './pages/About'; // Create About.jsx in the pages folder
import Recipes from './pages/Recipes'; // Create Recipes.jsx in the pages folder
import Contact from './pages/Contact'; // Create Contact.jsx in the pages folder
import Footer from './components/Footer'; // Import Footer
import TopPicks from './pages/TopPicks'; // Create TopPicks.jsx in the pages folder
import Desserts from './pages/Desserts'; // Create Desserts.jsx in the pages folder
import Vegetarian from './pages/Vegetarian'; // Create Vegetarian.jsx in the pages folder
import Salads from './pages/Salads'; // Create Salads.jsx in the pages folder
import Soups from './pages/Soups'; // Create Soups.jsx in the pages folder
import Sauces from './pages/Sauces'; // Create Sauces.jsx in the pages folder
import './App.css'; // App-level styling

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navigation bar appears on all pages */}
        <NavBar />
        
        {/* Main content section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/top-picks" element={<TopPicks />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/vegetarian" element={<Vegetarian />} />
          <Route path="/salads" element={<Salads />} />
          <Route path="/soups" element={<Soups />} />
          <Route path="/sauces" element={<Sauces />} />
        </Routes>
        
        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
