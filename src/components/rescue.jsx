import React from "react";
import dogs from "../data/dogs.json";

const Rescue = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Rescue Dogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {dogs.map(dog => (
          <div key={dog.id} className="p-4 border rounded">
            <h3 className="font-bold">{dog.name}</h3>
            <p>{dog.breed}</p>
            <p>{dog.age}</p>
            <p>{dog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rescue;
