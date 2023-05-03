import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecipesInfoDetail = ({ recipe }) => {
  console.log(recipe);
  const {
    name,
    chefName,
    chefPicture,
    chefDescription,
    ingredients,
    cooking_method,
    image,
    rating,
  } = recipe;
  return (
    <div>
      {/* <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-0">
          <img
            src={chefPicture}
            className="max-w-sm lg:max-w-lg rounded-lg border border-gray-100 shadow-2xl"
          />
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Welcome to <br /> {`${chefName}'s Dine`} 🧆
            </h1>
            <p className="py-6">
              {chefDescription}
            </p>
            <Link
              className="group relative inline-block overflow-hidden border border-warning px-8 py-3 rounded-lg"
              href="/download"
            >
              <span className="absolute inset-y-0 left-0 w-[2px] bg-warning transition-all group-hover:w-full group-active:bg-yellow-400"></span>

              <span className="relative text-sm font-medium text-warning transition-colors group-hover:text-white">
                Learn More
              </span>
            </Link>
          </div>
        </div>
      </div> */}
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
            <button className="bg-none">
              <FaRegHeart className="text-warning text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesInfoDetail;
