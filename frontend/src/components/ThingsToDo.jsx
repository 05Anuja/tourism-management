import React, { useContext, useState } from 'react'
import { AttractionContext } from '../context/AttractionContext'

const ThingsToDo = () => {
  const { activities } = useContext(AttractionContext)
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <section className="max-w-7xl mx-auto px-4 my-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Things to Do in <span className="text-orange-500">Ratnagiri</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Discover experiences that make your Ratnagiri trip memorable
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {activities.map((item) => (
          <div
            key={item.id}
            // onClick={() => setSelectedItem(item)}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-28 sm:h-32 object-cover"
            />

            <div className="p-3">
              <p className="text-sm font-semibold text-gray-800">
                {item.name}
              </p>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                {item.description}
              </p>

              <span onClick={() => setSelectedItem(item)} className="text-xs cursor-pointer text-orange-500 font-medium mt-1 inline-block">
                Read more →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          
          {/* Modal Content */}
          <div className="bg-white rounded-lg w-full max-w-lg sm:max-w-xl relative overflow-hidden">

            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 text-black text-2xl cursor-pointer outline-none bg-gray-500 py-1 px-2 rounded"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-52 sm:h-64 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {selectedItem.name}
              </h3>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ThingsToDo
