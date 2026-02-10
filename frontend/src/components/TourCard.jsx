import React from "react"

const TourCard = ({ tour }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-800">
        {tour.name}
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        Duration: {tour.duration}
      </p>

      <ul className="mt-3 space-y-1 text-gray-600 text-sm">
        {tour.highlights.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-semibold text-green-600">
          {tour.price}
        </span>

        <button className="px-4 py-2 text-sm outline-none cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default TourCard
