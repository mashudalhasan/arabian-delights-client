import React, { useEffect, useState } from "react";
import ChefsCardDetail from "../ChefsCardDetail/ChefsCardDetail";

const ChefsCard = () => {
  const [chefsCard, setChefsCard] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefsInfo")
      .then((res) => res.json())
      .then((data) => setChefsCard(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="text-xl lg:text-3xl font-bold text-center border-b border-gray-100 pb-6">World Class Arabian Chef's 👨🏻‍🍳</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {chefsCard.map((card) => (
          <ChefsCardDetail key={card.id} card={card}></ChefsCardDetail>
        ))}
      </div>
    </div>
  );
};

export default ChefsCard;
