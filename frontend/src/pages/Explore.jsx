import React, { useContext, useState } from 'react'
import { AttractionContext } from '../context/AttractionContext'
import { Heart } from 'lucide-react'

const Explore = () => {
  const { attractions } = useContext(AttractionContext)
  const [activeCategory, setActiveCategory] = useState('All')
  const [favourites, setFavourites] = useState(() => {
    return JSON.parse(localStorage.getItem('favourites')) || []
  })

  // Track which cards are expanded
  const [expandedCards, setExpandedCards] = useState([])

  // Toggle favourites
  const toggelFavourites = (id) => {
    let updatedFavs

    if (favourites.includes(id)) {
      updatedFavs = favourites.filter(favId => favId !== id)
    } else {
      updatedFavs = [...favourites, id]
    }

    setFavourites(updatedFavs)
    localStorage.setItem('favourites', JSON.stringify(updatedFavs))
  }

  // Toggle Read More / Read Less for a card
  const toggleDescription = (id) => {
    if (expandedCards.includes(id)) {
      setExpandedCards(expandedCards.filter(cardId => cardId !== id))
    } else {
      setExpandedCards([...expandedCards, id])
    }
  }

  // Filter attractions
  const filteredAttractions =
    activeCategory === 'All'
      ? attractions
      : attractions.filter(item => item.category === activeCategory)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {['All', 'Beaches', 'Forts', 'Temples'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full cursor-pointer outline-none text-sm font-medium transition
              ${activeCategory === category
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-orange-100'
              }
                w-[45%] sm:w-auto
              `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Attractions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredAttractions.map((item) => {
          const isFav = favourites.includes(item.id)
          const isExpanded = expandedCards.includes(item.id)
          const description = isExpanded
            ? item.description
            : item.description.slice(0, 100) + (item.description.length > 100 ? "..." : "")

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
            >
              {/* Image */}
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col justify-between grow">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {description}{" "}
                    {item.description.length > 100 && (
                      <span
                        onClick={() => toggleDescription(item.id)}
                        className="text-orange-500 cursor-pointer hover:underline text-xs"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </span>
                    )}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t">
                  <span className="cursor-pointer text-xs px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
                    Add to Plan
                  </span>

                  <button
                    className='outline-none cursor-pointer'
                    onClick={() => toggelFavourites(item.id)}
                  >
                    <Heart
                      size={22}
                      className={`transition ${isFav
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400 hover:text-red-400'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Empty State */}
      {filteredAttractions.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No attractions found for this category.
        </p>
      )}
    </div>
  )
}

export default Explore
