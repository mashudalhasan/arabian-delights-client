import React from "react";
import { FcShop } from "react-icons/fc";

const ArabianDelights = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-2xl font-bold sm:text-4xl">
              Why Coming to <br /> Arabian Delights ?
            </h2>

            <p className="mt-4 text-gray-500 text-sm">
              Discover the essence of Arabian cuisine at Arabian Delights. With
              our skilled chefs, we offer an array of authentic dishes, using
              high-quality ingredients. Experience the warmth and inviting
              ambiance that sets us apart. Choose Arabian Delights for an
              unforgettable Arabian dining experience.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded-lg border border-warning bg-warning px-12 py-3 text-sm font-medium transition hover:bg-transparent hover:text-warning focus:outline-none"
            >
              Get Started Today
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a
              className="block rounded-xl border border-yellow-100 p-4 shadow-sm hover:border-yellow-200 hover:ring-1 hover:ring-yellow-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-slate-50 p-3">
                <FcShop className="h-7 w-7" />
              </span>

              <h2 className="mt-2 font-bold">Authentic</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
                Arabian cuisine with rich flavors and spices.
              </p>
            </a>

            <a
              className="block rounded-xl border border-yellow-100 p-4 shadow-sm hover:border-yellow-200 hover:ring-1 hover:ring-yellow-200 focus:outline-none"
              href="#"
            >
              <span className="inline-block rounded-lg bg-slate-50 p-3">
                <FcShop className="h-7 w-7" />
              </span>

              <h2 className="mt-2 font-bold">Skilled</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
                Skilled chefs crafting traditional dishes with precision.
              </p>
            </a>

            <a
              className="block rounded-xl border border-yellow-100 p-4 shadow-sm hover:border-yellow-200 hover:ring-1 hover:ring-yellow-200 focus:outline-none"
              href="#"
            >
              <span className="inline-block rounded-lg bg-slate-50 p-3">
                <FcShop className="h-7 w-7" />
              </span>

              <h2 className="mt-2 font-bold">Wide</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
                Wide variety of flavorful options to cater to diverse tastes.
              </p>
            </a>

            <a
              className="block rounded-xl border border-yellow-100 p-4 shadow-sm hover:border-yellow-200 hover:ring-1 hover:ring-yellow-200 focus:outline-none"
              href="#"
            >
              <span className="inline-block rounded-lg bg-slate-50 p-3">
                <FcShop className="h-7 w-7" />
              </span>

              <h2 className="mt-2 font-bold">Fresh</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
                Fresh and high-quality ingredients for an exceptional dining
                experience.
              </p>
            </a>

            <a
              className="block rounded-xl border border-yellow-100 p-4 shadow-sm hover:border-yellow-200 hover:ring-1 hover:ring-yellow-200 focus:outline-none"
              href="#"
            >
              <span className="inline-block rounded-lg bg-slate-50 p-3">
                <FcShop className="h-7 w-7" />
              </span>

              <h2 className="mt-2 font-bold">Warm</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
                Warm and inviting ambiance that immerses you in Arabian culture.
              </p>
            </a>

            <a
              className="block rounded-xl border border-yellow-100 p-4 shadow-sm hover:border-yellow-200 hover:ring-1 hover:ring-yellow-200 focus:outline-none"
              href="#"
            >
              <span className="inline-block rounded-lg bg-slate-50 p-3">
                <FcShop className="h-7 w-7" />
              </span>

              <h2 className="mt-2 font-bold">Unforgettable</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
                Unforgettable culinary journey showcasing the best of Arabian
                cuisine.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArabianDelights;
