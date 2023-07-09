import React from "react";
import { FaHeart } from "react-icons/fa";
import useRecipe from "../../../hooks/useRecipe";

const PopularRecipes = () => {
  const [recipes] = useRecipe();
  // Sort the shops array by price in descending order
  const sortedRecipes = recipes.sort((a, b) => b.likes - a.likes);

  // Slice the sorted array to show only the first 9 items
  const topNineRecipes = sortedRecipes.slice(0, 9);

  return (
    <section className="mb-10 overflow-hidden p-5">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
        Our Premium Recipes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topNineRecipes.map((recipe) => (
          <div key={recipe.id} className="relative ">
            <img
              src={recipe.image}
              alt=""
              className="rounded-2xl h-96 w-full object-cover"
            />
            <p className="badge badge-lg flex justify-center items-center gap-1 border-none shadow-2xl bg-white text-neutral-600 font-medium absolute bottom-3 left-3">
              <FaHeart className="text-lg text-rose-600" /> {recipe.likes}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRecipes;
