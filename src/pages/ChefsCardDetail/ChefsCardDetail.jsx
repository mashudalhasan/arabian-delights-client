import React from "react";
import { FaCertificate, FaHeart, FaPizzaSlice } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefsCardDetail = ({ card }) => {
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
    <div className="my-10">
      <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <img
          alt="Chef"
          src={chefPicture}
          className="h-96 w-full rounded-md object-cover"
        />

        <div className="flex flex-col mt-2">
          <dl>
            <div>
              <dt className="sr-only">Name</dt>

              <dd className="font-medium">{chefName}</dd>
            </div>
            <div>
              <dt className="sr-only">Name</dt>

              <dd className="text-sm text-gray-500">{chefDescription}</dd>
            </div>
          </dl>

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
          <div className="flex-grow mt-8">
            <Link to={`/recipesInfo/${id}`}>
              <button className="rounded-lg bg-warning px-8 py-3 transition hover:shadow-md active:bg-yellow-400 text-sm font-medium w-full mx-auto text-center">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsCardDetail;
