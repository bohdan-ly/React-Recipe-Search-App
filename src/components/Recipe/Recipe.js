import React from 'react';
import style from './Recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div className={style.recipe}>
			<h1>{title}</h1>
			<ol>
				{ingredients.map((ingredient) => {
					return <li key={ingredient.id}>{ingredient.text}</li>;
				})}
			</ol>
			<p>{Math.round(calories)} kkal</p>
			<img className={style.image} src={image} alt="Dish" />
		</div>
	);
};

export default Recipe;
