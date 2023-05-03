import React from "react";
import { FaRegHeart } from "react-icons/fa";

const RecipesInfoDetail = ({ recipe }) => {
  console.log(recipe);
  const { name, chefName, ingredients, cooking_method, image, rating } = recipe;
  return (
    <div className="card bg-base-100 shadow-xl mb-10">
      <div>
        <figure>
          <img src={image} alt="Album" />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <p className="font-semibold">
          <small>Ingredients</small>
        </p>
        {ingredients.map((i) => (
          <p>{i}</p>
        ))}
        <p className="font-semibold">
          <small>Cooking Method:</small>
        </p>
        <p>{cooking_method}</p>
        <div className="card-actions justify-end items-center mt-4">
          <span class="rounded-full bg-yellow-100 px-3 py-1.5 text-xs font-medium text-yellow-600">
            {rating}
          </span>
          <button className="px-4 py-2 bg-white shadow-sm rounded-lg"><FaRegHeart className="text-warning w-full h-full" /></button>
        </div>
      </div>
    </div>
  );
};

export default RecipesInfoDetail;
