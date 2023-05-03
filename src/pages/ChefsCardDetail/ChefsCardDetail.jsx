import React from "react";
import { FaCertificate, FaHeart, FaPizzaSlice } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefsCardDetail = ({ card }) => {
  const {
    chefPicture,
    chefName,
    chefDescription,
    yearsOfExperience,
    numberOfRecipes,
    likes,
  } = card;

  return (
    <div className="my-10">
      <a href="#" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <img
          alt="Chef"
          src={chefPicture}
          class="h-96 w-full rounded-md object-cover"
        />

        <div class="mt-2">
          <dl>
            <div>
              <dt class="sr-only">Name</dt>

              <dd class="font-medium">{chefName}</dd>
            </div>
          </dl>

          <div class="mt-6 flex items-center gap-8 text-xs">
            <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <FaCertificate className="h-4 w-4 text-warning" />
              <div class="mt-1.5 sm:mt-0">
                <p class="text-gray-500">Experiences</p>

                <p class="font-medium">{yearsOfExperience}</p>
              </div>
            </div>

            <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <FaPizzaSlice className="h-4 w-4 text-warning rotate-180" />
              <div class="mt-1.5 sm:mt-0">
                <p class="text-gray-500">Number of Recipes</p>

                <p class="font-medium">{numberOfRecipes}</p>
              </div>
            </div>

            <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <FaHeart className="h-4 w-4 text-warning" />

              <div class="mt-1.5 sm:mt-0">
                <p class="text-gray-500">Likes</p>

                <p class="font-medium">{likes}</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link><button className="rounded-lg bg-warning px-8 py-3 transition hover:shadow-md active:bg-yellow-400 text-sm font-medium w-full mx-auto text-center">View Details</button></Link>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ChefsCardDetail;
