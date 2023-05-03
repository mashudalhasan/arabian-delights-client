import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipesInfoDetail from "../RecipesInfoDetail/RecipesInfoDetail";

const RecipesInfo = () => {
  const recipes = useLoaderData();
  console.log(recipes);
  return (
    <div className="px-8 lg:w-4/5 mx-auto my-10">
      {recipes.map((recipe) => (
        <RecipesInfoDetail key={recipe.id} recipe={recipe}></RecipesInfoDetail>
      ))}
    </div>
  );
};

export default RecipesInfo;
