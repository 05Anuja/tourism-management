import React, { useContext } from 'react';
import { AttractionContext } from '../context/AttractionContext';
import AttractionItem from './AttractionItem';

const MostlyVisitedPlaces = () => {
  const { attractions } = useContext(AttractionContext);

  const mostlyVisitedPlace = attractions.filter(
    (item) => item.mostlyVisited === true
  );

  return (
    <section className="max-w-7xl mx-auto px-4 my-14">
      <div className="text-center mb-10">
        <h2 className="text-2xl text-gray-800 sm:text-3xl font-semibold">
          Popular Tourist Attractions
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Experience the charm of Ratnagiri through its most iconic and frequently visited places
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
        {mostlyVisitedPlace.map((item) => (
          <AttractionItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default MostlyVisitedPlaces;
