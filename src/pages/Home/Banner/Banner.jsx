import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-0">
        <img
          src="https://img.freepik.com/premium-photo/saudi-arabian-kabsa-spiced-chicken-quarter-rice-roasted-almonds-raisins-garlic-black-plate_268847-1077.jpg?w=2000"
          className="max-w-sm lg:max-w-lg h-auto rounded-lg border border-gray-100 shadow-2xl"
        />
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Welcome to <br /> Arabian Delights 🧆
          </h1>
          <p className="py-6">
            Roaming the world's best Arabian chef's recipes, showcasing the
            finest and most authentic flavors of Arabian cuisine.
          </p>
          <Link
            className="group relative inline-block overflow-hidden border border-warning px-8 py-3 rounded-lg"
            to="/login"
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

export default Banner;
