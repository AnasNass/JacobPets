import React, { useState } from "react";
import dogs from "../../data/dogs.json";

const DogAccordion = () => {
  const [openSection, setOpenSection] = useState(0);

  return (
    <div className="w-full space-y-2">
      <h2 className="text-3xl font-bold text-primary mb-6">Meet Our Dogs</h2>
      {dogs.map((dog, index) => (
        <div key={dog.id} className="border border-primary/20 rounded-lg overflow-hidden">
          <button
            className="w-full p-4 flex justify-between items-center bg-primary/5 hover:bg-primary/10"
            onClick={() => setOpenSection(openSection === index ? -1 : index)}
          >
            <span className="font-semibold text-primary">{dog.name}</span>
            <span className="transform transition-transform duration-200 text-primary">
              {openSection === index ? '−' : '+'}
            </span>
          </button>
          {openSection === index && (
            <div className="p-4 bg-white">
              <div className="flex flex-col md:flex-row gap-4">
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full md:w-1/3 h-48 object-cover rounded-lg"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-gray-700">{dog.description}</p>
                  <div className="text-sm text-gray-600">
                    <p>Breed: {dog.breed}</p>
                    <p>Age: {dog.age} {dog.age === 1 ? 'year' : 'years'}</p>
                    <p className="capitalize">Status: {dog.status}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DogAccordion;