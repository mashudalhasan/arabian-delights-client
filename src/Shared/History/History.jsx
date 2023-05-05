import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="w-3/4 mx-auto my-10">
      <h2 className="text-2xl lg:text-4xl text-center mb-4 font-bold">
        Our History
      </h2>
      <hr />
      <div className="mt-5">
        <p className="text-base text-gray-500">
          Arabian Delights is a culinary destination dedicated to showcasing the
          rich flavors and cultural heritage of Arabian cuisine. With a passion
          for authenticity, our skilled chefs meticulously craft a diverse menu
          of delectable dishes, taking you on a tantalizing journey through the
          vibrant flavors of the Middle East. From aromatic spices to succulent
          grilled meats, each bite at Arabian Delights is an immersive
          experience that transports you to the heart of Arabia. Come and
          indulge your senses as we delight you with our warm hospitality,
          inviting ambiance, and unforgettable culinary creations.
        </p>
      </div>
      <div className="mt-10 text-center">
        <Link to="/register">
          <button className="inline-flex items-center gap-2 rounded-lg bg-warning px-8 py-3 transition hover:scale-110 hover:shadow-xl active:bg-yellow-400">
            <FaLongArrowAltLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Go back to Register</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default History;
