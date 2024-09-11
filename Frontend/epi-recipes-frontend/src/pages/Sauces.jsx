import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sauces.css'; // Import the CSS file

const Sauces = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/search/?query=sauce')
            .then(response => {
                console.log("Fetched Sauce Recipes:", response.data);
                setRecipes(response.data.results);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const getBackgroundImage = (title) => {
        if (title.toLowerCase().includes('cake')) {
            return 'url(https://www.tasteofhome.com/wp-content/uploads/2017/10/exps21585_THCA153054D10_15_4b-1.jpg)'; // Dessert background image
        }
        return 'url(https://cdn.drweil.com/wp-content/uploads/2016/12/diet-nutrition_recipes_tomato-sauce_2716x1810_000023741142.jpg)'; // Default sauce background image
    };

    return (
        <div className="App">
            <h1>Sauce Recipes</h1>
            <div className="recipe-list">
                {recipes.length > 0 ? (
                    recipes.map((recipe, index) => (
                        <div
                            key={index}
                            className="recipe-segment"
                            style={{ backgroundImage: getBackgroundImage(recipe._source.title) }}
                        >
                            <div className="recipe-info">
                                <h3>{recipe._source.title}</h3>
                                <p><strong>Rating:</strong> {recipe._source.rating || 0}</p>
                                <p><strong>Calories:</strong> {recipe._source.calories || 0}</p>
                                <p><strong>Protein:</strong> {recipe._source.protein || 0}g</p>
                                <p><strong>Fat:</strong> {recipe._source.fat || 0}g</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No recipes found</p>
                )}
            </div>
        </div>
    );
}

export default Sauces;
