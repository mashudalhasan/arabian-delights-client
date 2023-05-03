import React from "react";
import { Link } from "react-router-dom";

const RecipeBanner = ({ card }) => {
  const {
    chefPicture,
    chefName,
    chefDescription,
    id,
    yearsOfExperience,
    numberOfRecipes,
    likes,
  } = card;

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-0">
        <img
          src={chefPicture}
          className="max-w-sm lg:max-w-lg rounded-lg border border-gray-100 shadow-2xl"
        />
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Welcome to <br /> {`${chefName}'s World`} 🧆
          </h1>
          <p className="py-6">
            Roaming the world's best Arabian chef's recipes, showcasing the
            finest and most authentic flavors of Arabian cuisine.
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
    </div>
  );
};

export default RecipeBanner;
