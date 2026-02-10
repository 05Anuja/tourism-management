import React from 'react'
import { useContext } from "react";
import { AttractionContext } from "../context/AttractionContext";

const PlacesToVisit = () => {
  const { visitLater, toggleVisitLater } =
    useContext(AttractionContext);

  if (visitLater.length === 0) {
    return (
      <p className="text-center mt-16 text-gray-500">
        No places added yet 
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {visitLater.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <img
            src={item.image[0]}
            alt={item.name}
            className="w-full h-48 object-cover"
          />

          <div className="p-5">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">
                {item.name}
              </h3>

              <button
                className='outline-none cursor-pointer'
                onClick={() => toggleVisitLater(item)}
              >
                <button className='px-2 py-1 bg-gray-200 rounded outline-none cursor-pointer hover:bg-gray-300'>
                  Remove
                </button>
              </button>
            </div>

            {/* <p className="text-sm text-gray-600 mt-2">
              {item.description.slice(0, 120)}...
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlacesToVisit;
