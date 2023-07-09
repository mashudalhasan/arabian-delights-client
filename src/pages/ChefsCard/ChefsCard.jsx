import React, { useEffect, useState } from "react";
import ChefsCardDetail from "../ChefsCardDetail/ChefsCardDetail";
import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../Home/Banner/Banner";
import ArabianDelights from "../Home/ArabianDelights/ArabianDelights";
import NewsLetter from "../Home/NewsLetter/NewsLetter";
import PopularRecipes from "../Home/PopularRecipes/PopularRecipes";
import MeetChefs from "../Home/MeetChefs/MeetChefs";
import Testimonials from "../Home/Testimonials/Testimonials";
import Stats from "../Home/Stats/Stats";

const ChefsCard = () => {
  const { id } = useParams();
  const chefsCard = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="mt-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-center border-b border-gray-100 pb-6">
          World Class Arabian Chef's 👨🏻‍🍳
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {chefsCard.map((card) => (
            <ChefsCardDetail key={card.id} card={card}></ChefsCardDetail>
          ))}
        </div>
      </div>
      <ArabianDelights className="mt-5"></ArabianDelights>
      <PopularRecipes className="mt-5"></PopularRecipes>
      <MeetChefs className="mt-5"></MeetChefs>
      <Stats className="mt-5"></Stats>
      <Testimonials className="mt-5"></Testimonials>
      <NewsLetter className="mt-5"></NewsLetter>
    </div>
  );
};

export default ChefsCard;
