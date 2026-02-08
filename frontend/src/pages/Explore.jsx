import React, { useContext, useState } from 'react'
import { AttractionContext } from '../context/AttractionContext'
import { Heart, X } from 'lucide-react'
import { toast } from 'react-toastify'

const Explore = () => {
  const { attractions } = useContext(AttractionContext)

  const [activeCategory, setActiveCategory] = useState('All')
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem('favourites')) || []
  )

  // Track flipped cards
  const [flippedCards, setFlippedCards] = useState([])

  const toggleFavourites = (id) => {
    let updatedFavs

    if (favourites.includes(id)) {
      updatedFavs = favourites.filter(favId => favId !== id)
      toast.info('Removed from Favourites')
    } else {
      updatedFavs = [...favourites, id]
      toast.success('Added to Favourites!')
    }

    setFavourites(updatedFavs)
    localStorage.setItem('favourites', JSON.stringify(updatedFavs))
  }

  const toggleFlip = (id) => {
    if (flippedCards.includes(id)) {
      setFlippedCards(flippedCards.filter(cardId => cardId !== id))
    } else {
      setFlippedCards([...flippedCards, id])
    }
  }

  const filteredAttractions =
    activeCategory === 'All'
      ? attractions
      : attractions.filter(item => item.category === activeCategory)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {['All', 'Beaches', 'Forts', 'Temples'].map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 outline-none cursor-pointer rounded-full text-sm font-medium transition
              ${activeCategory === category
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-orange-100'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredAttractions.map(item => {
          const isFav = favourites.includes(item.id)
          const isFlipped = flippedCards.includes(item.id)

          return (
            <div key={item.id} className="perspective">
              <div
                className={`relative w-full h-[420px] transition-transform duration-700 transform-style-preserve-3d
                ${isFlipped ? 'rotate-y-180' : ''}`}
              >

                {/* FRONT SIDE */}
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
                          className="text-orange-500 cursor-pointer ml-1 hover:underline text-xs"
                        >
                          Read More
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t">
                      <span className="text-xs px-3 py-1 bg-gray-100 rounded">
                        Add to Plan
                      </span>

                      <button onClick={() => toggleFavourites(item.id)}>
                        <Heart
                          size={22}
                          className={`${isFav
                            ? 'fill-red-500 text-red-500'
                            : 'text-gray-400 hover:text-red-400'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-xl shadow-md p-5 flex flex-col">
                  {/* Close Button */}
                  <button
                    onClick={() => toggleFlip(item.id)}
                    className="absolute top-3 right-3 text-gray-500 outline-none cursor-pointer hover:text-black"
                  >
                    <X size={20} />
                  </button>

                  <h3 className="text-lg font-semibold mb-3">
                    {item.name}
                  </h3>

                  <div className="text-sm text-gray-700 space-y-2 overflow-y-auto pr-1">
                    <p>
                      <span className="font-medium">📍 Location:</span> {item.location}
                    </p>

                    <p>
                      <span className="font-medium">🕒 Best Time:</span> {item.bestTimeToVisit}
                    </p>

                    <p>
                      <span className="font-medium">ℹ️ About:</span> {item.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )
        })}
      </div>

      {filteredAttractions.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No attractions found for this category.
        </p>
      )}

      {/* CUSTOM CSS */}
      <style>
        {`
          .perspective {
            perspective: 1000px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}
      </style>

    </div>
  )
}

export default Explore
