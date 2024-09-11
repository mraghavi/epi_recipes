import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Soups.css'; // Import the CSS file

const Soups = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/search/?query=soup')
            .then(response => {
                console.log("Fetched Soup Recipes:", response.data);
                setRecipes(response.data.results);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const getBackgroundImage = (title) => {
        return 'url(https://comfortablefood.com/wp-content/uploads/2022/08/Chicken-Vegetable-Soup-featured.jpg)';
    };

    return (
        <div className="App">
            <h1>Soup Recipes</h1>
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

export default Soups;
