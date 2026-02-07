import React, { useContext } from 'react'
import { AttractionContext } from '../context/AttractionContext'
// import { useNavigate } from 'react-router-dom'

const CTA = () => {

//   const navigate = useNavigate()

const {navigate} = useContext(AttractionContext);

  return (
    <div className="mt-16 px-4 mb-8">
      <div className="max-w-6xl mx-auto bg-linear-to-r from-orange-500 to-pink-500 rounded-2xl p-8 sm:p-12 text-white shadow-lg">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Plan Your Ratnagiri Trip Today 🌴
            </h2>
            <p className="text-white/90 max-w-lg">
              Explore beautiful beaches, historic forts, local food, and unforgettable Konkan experiences.
            </p>
          </div>

          {/* Button */}
          <div className='flex flex-col sm:flex-row w-full sm:w-auto gap-4'>

          <button
            onClick={() => navigate('/explore')}
            className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition cursor-pointer outline-none"
            >
            Explore Attractions
          </button>

          <button
            onClick={() => navigate('/festivals')}
            className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition cursor-pointer outline-none"
            >
            Explore Festivals
          </button>

              </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
