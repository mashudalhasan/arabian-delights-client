import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";

const RecipesInfoDetail = ({ recipe }) => {
  const [favourite, setFavourite] = useState(false);

  const { name, ingredients, cooking_method, image, rating } = recipe;

  const handleFavourite = () => {
    if (!favourite) {
      // Display a success toast
      toast.success("Added to favorites!");
    } else {
      // Display a warning toast
      toast.warn("Already in favorites!");
    }

    setFavourite(!favourite);
  };

  return (
    <div className="card bg-base-100 shadow-xl mb-10">
      <div>
        <figure className="h-96">
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
        <div className="card-actions justify-end items-center mt-4 gap-5">
          <span class="rounded-full bg-yellow-100 px-3 py-1.5 text-xs font-medium text-yellow-600">
            {rating}
          </span>
          <button
            className={`bg-none ${favourite ? "opacity-50" : ""}`}
            disabled={favourite}
          >
            <FaHeart
              onClick={handleFavourite}
              className="text-warning text-2xl"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipesInfoDetail;
