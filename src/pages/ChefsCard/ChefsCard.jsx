import React, { useEffect, useState } from "react";
import ChefsCardDetail from "../ChefsCardDetail/ChefsCardDetail";
import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../Home/Banner/Banner";
import ArabianDelights from "../Home/ArabianDelights/ArabianDelights";
import NewsLetter from "../Home/NewsLetter/NewsLetter";

const ChefsCard = () => {
  const { id } = useParams();
  const chefsCard = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div>
        <h2 className="text-xl lg:text-3xl font-bold text-center border-b border-gray-100 pb-6">
          World Class Arabian Chef's 👨🏻‍🍳
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          style={{ gridAutoRows: "minmax(0, 1fr)" }}
        >
          {chefsCard.map((card) => (
            <ChefsCardDetail key={card.id} card={card}></ChefsCardDetail>
          ))}
        </div>
      </div>
      <ArabianDelights></ArabianDelights>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default ChefsCard;
