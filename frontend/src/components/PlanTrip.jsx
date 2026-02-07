import React, { useContext } from 'react'
import { AttractionContext } from '../context/AttractionContext'

const PlanTrip = () => {
  const { planTrip } = useContext(AttractionContext)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      
      {/* Section Heading */}
      <div className="text-center mb-10">
        <p className="text-2xl text-gray-900 sm:text-3xl font-semibold">
          🧭 Travel Tips – Know Before You Go
        </p>
        <p className="text-gray-600 mt-2">
          Simple tips to help you plan a smooth and enjoyable Ratnagiri trip.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {planTrip.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="text-xl">{item.icon}</span>
              {item.title}
            </h3>

            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
              {item.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlanTrip
