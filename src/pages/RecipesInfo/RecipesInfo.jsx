import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipesInfoDetail from "../RecipesInfoDetail/RecipesInfoDetail";
import RecipeBanner from "../RecipeBanner/RecipeBanner";

const RecipesInfo = () => {
  const recipes = useLoaderData();
  // console.log(recipes);
  const chef = recipes[1];
  console.log(chef);
  return (
    <div className="px-8 lg:w-4/5 mx-auto my-10">
      <RecipeBanner key={chef.id} chef={chef}></RecipeBanner>
      <div className="mt-5 lg:mt-10">
        {recipes.map((recipe) => (
          <RecipesInfoDetail
            key={recipe.id}
            recipe={recipe}
          ></RecipesInfoDetail>
        ))}
      </div>
    </div>
  );
};

export default RecipesInfo;
