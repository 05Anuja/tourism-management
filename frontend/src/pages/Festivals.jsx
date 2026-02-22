import React, { useContext } from 'react'
import { AttractionContext } from '../context/AttractionContext'
import { festivals } from '../assets/assets'

const Festivals = () => {

  const { Festivals } = useContext(AttractionContext)

  return (
    <div className="px-4 sm:px-[5vw] py-10 text-black">
      
      {/* Page Heading */}
      <h1 className="text-3xl text-slate-900 sm:text-4xl font-semibold text-center mb-10">
        Festivals of <span className="text-orange-500">Ratnagiri</span>
      </h1>

      {/* Festival Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {festivals.map((festival) => (
          <div
            key={festival._id}
            className="bg-slate-100 rounded-xl overflow-hidden shadow-md hover:shadow-orange-500/20 transition duration-300"
          >

            {/* Image */}
            <img
              src={festival.image}
              alt={festival.name}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold text-orange-400">
                {festival.name}
              </h2>

              <p className="text-sm text-slate-800">
                <span className="font-medium text-slate-900">📍 Location:</span>{" "}
                {festival.location}
              </p>

              <p className="text-sm text-slate-800">
                <span className="font-medium text-slate-900">📅 Month:</span>{" "}
                {festival.month}
              </p>

              <p className="text-sm text-slate-500 leading-relaxed">
                {festival.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Festivals
