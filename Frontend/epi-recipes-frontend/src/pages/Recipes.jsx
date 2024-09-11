import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Menu, MenuItem, TextField } from '@mui/material';
import './Recipes.css'; // Import the CSS file

const Recipes = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [vegetarian, setVegetarian] = useState(false);
  const [ratingFilter, setRatingFilter] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const fetchRecipes = () => {
    const url = `http://localhost:8000/api/search/?query=${query}&vegetarian=${vegetarian}&rating_max=${ratingFilter}`;

    axios.get(url)
      .then(response => {
        console.log("Fetched Recipes:", response.data);
        setRecipes(response.data.results);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchRecipes();
  }, [query, vegetarian, ratingFilter]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  const handleSoupClick = () => {
    setQuery('soup');
  };

  const handleSaladClick = () => {
    setQuery('salad');
  };

  const handleSauceClick = () => {
    setQuery('sauce');
  };

  const handleDessertsClick = () => {
    setQuery('cake muffins');
  };

  const handleAllClick = () => {
    setQuery('');
  };

  const handleVegetarianClick = () => {
    setVegetarian(!vegetarian);
  };

  const handleRatingMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRatingMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRatingSelect = (rating) => {
    setRatingFilter(rating);
    handleRatingMenuClose();
  };

  const getBackgroundImage = (title) => {
    if (title.toLowerCase().includes('cake') || title.toLowerCase().includes('muffins')) {
      return 'url(https://www.tasteofhome.com/wp-content/uploads/2017/10/exps21585_THCA153054D10_15_4b-1.jpg)';
    } else if (title.toLowerCase().includes('salad')) {
      return 'url(https://jz-eats.com/wp-content/uploads/2019/01/Easy-Green-Salad-Recipe-With-Blood-Orange-Dressing.jpg)';
    } else if (title.toLowerCase().includes('soup')) {
      return 'url(https://comfortablefood.com/wp-content/uploads/2022/08/Chicken-Vegetable-Soup-featured.jpg)';
    } else if (title.toLowerCase().includes('sauce')) {
      return 'url(https://cdn.drweil.com/wp-content/uploads/2016/12/diet-nutrition_recipes_tomato-sauce_2716x1810_000023741142.jpg)';
    } else {
      return 'url(https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Ratatouille-Casserole.png)';
    }
  };

  return (
    <div className="App">
      <h1>Recipe Search</h1>

      <div className="button-container">
        <Button variant="contained" onClick={handleAllClick}>All Recipes</Button>
        <Button variant="contained" onClick={handleSoupClick}>Soup</Button>
        <Button variant="contained" onClick={handleSaladClick}>Salad</Button>
        <Button variant="contained" onClick={handleSauceClick}>Sauce</Button>
        <Button variant="contained" onClick={handleDessertsClick}>Desserts</Button>
        <Button
          variant="contained"
          onClick={handleVegetarianClick}
          style={{
            backgroundColor: vegetarian ? 'green' : '#FF6347', // Turn green when active
            color: 'white',
          }}
        >
          {vegetarian ? 'Vegetarian ' : 'Vegetarian '}
        </Button>
        <Button variant="contained" onClick={handleRatingMenuClick}>Ratings</Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleRatingMenuClose}
          className="rating-menu"
        >
          {[1, 2, 3, 4, 5].map(rating => (
            <MenuItem
              key={rating}
              onClick={() => handleRatingSelect(rating)}
              className="rating-item"
            >
              {rating}
            </MenuItem>
          ))}
        </Menu>
      </div>

      <form onSubmit={handleSearch}>
        <TextField 
          label="Search Recipes" 
          value={query} 
          onChange={handleQueryChange} 
          fullWidth 
          margin="normal"
        />
      </form>

      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <div key={index} className="recipe-segment" style={{ backgroundImage: getBackgroundImage(recipe._source.title) }}>
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

export default Recipes;
