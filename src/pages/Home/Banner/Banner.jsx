import React from "react";
import bannerImage from "../../../assets/images/saudi-arabian-kabsa-spiced-chicken-quarter-rice-roasted-almonds-raisins-garlic-black-plate_268847-11.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      {/* <div className="flex flex-col lg:flex-row lg:items-center h-screen">
        <div className="lg:w-1/2">
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Arabian Delights
            </h1>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              malesuada varius magna, vel eleifend elit ultrices non.
            </p>
            <a
              className="group relative inline-block overflow-hidden border border-warning px-8 py-3 focus:outline-none focus:ring rounded-lg"
              href="/download"
            >
              <span className="absolute inset-y-0 left-0 w-[2px] bg-warning transition-all group-hover:w-full group-active:bg-yellow-400"></span>

              <span className="relative text-sm font-medium text-warning transition-colors group-hover:text-white">
                Learn More
              </span>
            </a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src={bannerImage}
            alt="Hero Image"
            className="object-cover h-full w-3/4 mx-auto rounded-lg"
          />
        </div>
      </div> */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImage}
            className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold">
              Welcome to <br /> Arabian Delights 🧆
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
    </div>
  );
};

export default Banner;
