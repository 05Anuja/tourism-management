import React, { useContext, useState } from "react";
import { AttractionContext } from "../context/AttractionContext";
import { Heart, X } from "lucide-react";

const Explore = () => {
  const {
    attractions,
    favourites,
    toggleFavourite,
    toggleVisitLater
  } = useContext(AttractionContext);

  const [activeCategory, setActiveCategory] = useState("All");
  const [flippedCards, setFlippedCards] = useState([]);

  const toggleFlip = (id) => {
    setFlippedCards((prev) =>
      prev.includes(id)
        ? prev.filter((cardId) => cardId !== id)
        : [...prev, id]
    );
  };

  const filteredAttractions =
    activeCategory === "All"
      ? attractions
      : attractions.filter(
          (item) => item.category === activeCategory
        );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {["All", "Beaches", "Forts", "Temples"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 outline-none cursor-pointer rounded-full text-sm font-medium transition
              ${
                activeCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-orange-100"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredAttractions.map((item) => {
          const isFav = favourites.some(
            (fav) => fav.id === item.id
          );
          const isFlipped = flippedCards.includes(item.id);

          return (
            <div key={item.id} className="perspective">
              <div
                className={`relative w-full h-105 transition-transform duration-700 transform-style-preserve-3d
                ${isFlipped ? "rotate-y-180" : ""}`}
              >
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-5 flex flex-col justify-between grow">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description.slice(0, 100)}...
                        <span
                          onClick={() => toggleFlip(item.id)}
                          className="text-orange-500 cursor-pointer ml-1 text-xs"
                        >
                          Read More
                        </span>
                      </p>
                    </div>

                    <div
                      className="flex items-center justify-between mt-4 cursor-pointer  pt-3 border-t">
                      <span
                      onClick={() => toggleVisitLater(item)}
                      className="text-xs px-3 py-1 bg-gray-100 rounded">
                        Visit Later
                      </span>

                      <button
                        className="outline-none cursor-pointer"
                        onClick={() => toggleFavourite(item)}
                      >
                        <Heart
                          size={22}
                          className={`${
                            isFav
                              ? "fill-red-500 text-red-500"
                              : "text-gray-400 hover:text-red-400"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-xl shadow-md p-5">
                  <button
                    onClick={() => toggleFlip(item.id)}
                    className="absolute top-3 right-3 outline-none cursor-pointer text-gray-500 hover:text-gray-800"
                  >
                    <X size={20} />
                  </button>

                  <h3 className="text-lg font-semibold mb-3">
                    {item.name}
                  </h3>

                  <div className="text-sm space-y-2">
                    <p>📍Location: {item.location}</p>
                    <p>🕒Best Time to Visit: {item.bestTimeToVisit}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CSS */}
      <style>
        {`
          .perspective { perspective: 1000px; }
          .transform-style-preserve-3d { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
          .rotate-y-180 { transform: rotateY(180deg); }
        `}
      </style>
    </div>
  );
};

export default Explore;
