import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Vegetarian.css';

const Vegetarian = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/search/?vegetarian=true')
            .then(response => {
                console.log("Fetched Vegetarian Recipes:", response.data);
                setRecipes(response.data.results);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

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
            <h1>Vegetarian Recipes</h1>
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
}

export default Vegetarian;
