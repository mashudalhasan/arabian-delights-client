import React from "react";
import { FaCertificate, FaHeart, FaPizzaSlice } from "react-icons/fa";

const RecipeBanner = ({ chef }) => {
  const {
    chefPicture,
    chefName,
    chefDescription,
    id,
    yearsOfExperience,
    numberOfRecipes,
    likes,
  } = chef;

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-10">
        <img
          src={chefPicture}
          className="w-full lg:max-w-lg rounded-lg border border-gray-100 shadow-2xl"
        />
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Welcome to <br /> {`${chefName}'s World`} 🧆
          </h1>
          <p className="py-6 text-gray-500">{chefDescription}</p>
          <div className="mt-6 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <FaCertificate className="h-4 w-4 text-warning" />
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Experiences</p>

                <p className="font-medium">{yearsOfExperience}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <FaPizzaSlice className="h-4 w-4 text-warning rotate-180" />
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Number of Recipes</p>

                <p className="font-medium">{numberOfRecipes}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <FaHeart className="h-4 w-4 text-warning" />

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Likes</p>

                <p className="font-medium">{likes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeBanner;
