// pages/Desserts.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Desserts.css'; // Import the CSS file if you have specific styles

const Desserts = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchDesserts = () => {
    const url = 'http://localhost:8000/api/search/?query=cake+muffins';

    axios.get(url)
      .then(response => {
        console.log("Fetched Desserts:", response.data);
        setRecipes(response.data.results);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchDesserts();
  }, []);

  return (
    <div className="Desserts">
      <h1>Desserts</h1>

      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <div key={index} className="recipe-segment" style={{ backgroundImage: `url(${getBackgroundImage(recipe._source.title)})` }}>
              <div className="recipe-info">
                <h3>{recipe._source.title}</h3>
                <p><strong>Rating:</strong> {recipe._source.rating || 0}</p>
                <p><strong>Calories:</strong> {recipe._source.calories || 0}</p>
                <p><strong>Protein:</strong> {recipe._source.protein || 0}g</p>
                <p><strong>Fat:</strong> {recipe._source.fat || 0}g</p>
                <p><strong>Vegetarian:</strong> {recipe._source.tags.vegetarian ? 'Yes' : 'No'}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
};

const getBackgroundImage = (title) => {
  if (title.toLowerCase().includes('cake') || title.toLowerCase().includes('muffins')) {
    return 'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps21585_THCA153054D10_15_4b-1.jpg';
  } else {
    return 'https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Ratatouille-Casserole.png';
  }
};

export default Desserts;
