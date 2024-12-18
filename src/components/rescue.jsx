import React from "react";
import dogs from "../data/dogs.json";
import PageContainer from "./layout/PageContainer";
import DogCard from "./cards/DogCard";

const Rescue = () => {
  return (
    <PageContainer title="Rescue Dogs">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dogs.map(dog => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
    </PageContainer>
  );
};

export default Rescue;
