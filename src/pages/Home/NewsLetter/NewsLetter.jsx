import React, { useContext } from "react";
import toast from "react-hot-toast";

const NewsLetter = () => {
  const handleSubscribe = () => {
    toast.success("Subscription successful");
  };

  return (
    <section>
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-xl font-bold text-gray-900 md:text-3xl">
            Join the Arabian Delights Newsletter for Exclusive Updates and
            Delightful Offers!
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Stay in the loop with Arabian Delights by subscribing to our
            newsletter. Get exclusive updates on special events, mouthwatering
            culinary creations, and irresistible offers. Join our community for
            a delightful journey filled with Arabian flavors and experiences!
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>

            <button
              onClick={handleSubscribe}
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-warning px-5 py-3 transition focus:outline-none sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium"> Subscribe </span>

              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
