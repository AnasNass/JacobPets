import React from "react";

const DogCard = ({ dog }) => {
  return (
    <div className="bg-white border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={dog.image}
        alt={dog.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-secondary">{dog.name}</h3>
        <p className="text-accent mb-2">{dog.breed}</p>
        <p className="text-accent mb-2">{dog.age} {dog.age === 1 ? 'year' : 'years'} old</p>
        <p className="text-accent">{dog.description}</p>
      </div>
    </div>
  );
};

export default DogCard;