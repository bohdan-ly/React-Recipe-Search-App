import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipe/Recipe';
import './App.css';

function App() {
	const APP_ID = '19bc9735';
	const APP_KEY = 'c1bad5c444e0407e48b24632ad6e9bf2';

	const [ recipes, setRecipes ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ query, setQuery ] = useState('sweet');

	useEffect(
		() => {
			getRecipes();
		},
		[ query ]
	);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();
		setRecipes(data.hits);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};

	return (
		<div className="App">
			<form onSubmit={getSearch} className="search-form">
				<input
					type="text"
					className="search-bar"
					value={search}
					onChange={updateSearch}
					placeholder="Search for any dish"
				/>
				<button type="submit" className="search-button">
					Search
				</button>
			</form>
			<div className="recipes">
				{recipes.map((recipe) => (
					<Recipe
						key={recipe.recipe.label}
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
