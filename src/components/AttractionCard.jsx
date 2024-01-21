// AttractionCard.jsx
import React from 'react';

const AttractionCard = ({ attraction, location, image, description }) => {
  return (
    <div className="attraction-card text-left mt-20 w-1/2 mx-auto text-2xl p-10 rounded shadow-md opacity-0 translate-y-4 transition-transform duration-1200 ease-in-out whitespace-pre-line">
      <h2 className="text-3xl font-bold mb-4">{attraction}</h2>
      <p className="text-lg mb-2">{location}</p>
      <img src={image} alt={attraction} className="mb-4 rounded" />
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default AttractionCard;
