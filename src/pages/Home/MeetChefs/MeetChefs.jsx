import React from "react";
import useChef from "../../../hooks/useChef";
import './MeetChefs.css';

const MeetChefs = () => {
  const [chefs] = useChef();

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Meet the Chefs
          </h2>
          <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Indulge in a gastronomic adventure as you meet our extraordinary
            chefs, masters of culinary artistry.
          </p>
        </div>

        <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-3 gap-x-0">
          <div>
            <img
              className="object-cover object-top mx-auto rounded-lg w-28 h-28 animate-float transition-transform duration-1000 ease-in-out"
              src="https://imgy.pro/foodtoday/640x740/editor/Image1_3202221163019459959300.jpg"
              alt=""
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              Bader Najeeb
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">
              15 Years of Experience
            </p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <img
              className="object-cover mx-auto rounded-lg w-28 h-28 animate-float transition-transform duration-1000 ease-in-out"
              src="https://www.tasteofhome.com/wp-content/uploads/2021/11/sami-tamimi-via-instagram-e1637008056865.jpg?resize=700,700"
              alt=""
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              Sami Tamimi
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">
              10 Years of Experience
            </p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <img
              className="object-cover mx-auto rounded-lg w-28 h-28 animate-float transition-transform duration-1000 ease-in-out"
              src="https://www.whatawonderfulworld.guide/wp-content/uploads/2020/08/CHEF-IZU-ANI.jpg"
              alt=""
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              IZU ANI
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">
              30 Years of Experience
            </p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <img
              className="object-cover mx-auto rounded-lg w-28 h-28 animate-float transition-transform duration-1000 ease-in-out"
              src="https://lh5.googleusercontent.com/XTHuyNmSvGGKOckjbv9x7i6qizMrX0yDC-8GQnD156pyp2-0iwH8TvPSRupsBq-hRV65hs06vqaZ72C6ivwXgTO33fzLbNKzVRqtqM6Y1uZ4SZz-qFMbYXiMyhvpdM8mgZLPYiVE"
              alt=""
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              Nusret Gökçe
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">
              23 Years of Experience
            </p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <img
              className="object-cover mx-auto rounded-lg w-28 h-28 animate-float transition-transform duration-1000 ease-in-out"
              src="https://lh3.googleusercontent.com/lfNPl7ZKHGu6hNMYSOqXizjdrZss_10XPJ3tvQXq4lK74Zc-PLTwRey4rORs9vOUFgADwdiIttgGJLoT7ZJdpwSfap6lYSdDochpATbCSpmYh1CNc6vxQIab8pccKAlcVkS5kg9u"
              alt=""
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              Burak Özdemir
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">
              12 Years of Experience
            </p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <img
              className="object-cover mx-auto rounded-lg w-28 h-28 animate-float transition-transform duration-1000 ease-in-out"
              src="https://www.tasteofhome.com/wp-content/uploads/2021/11/shahor-massoud-via-instagram.jpg?resize=700,700"
              alt=""
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              Shahir Massoud
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">
              8 Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetChefs;
