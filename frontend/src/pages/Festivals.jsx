import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Festivals = () => {

  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')

  useEffect (() => {
    const fetchFestivals = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/festivals`)

        if (!response.ok) {
          throw new Error("Failed to fetch festivals")
        }

        const data = await response.json()
        setFestivals(data);

      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchFestivals();
  }, [])

  if (loading) {
    return <p className='text-center mt-10'>Loading Festivals</p>
  }

  if (error) {
    return <p className='text-center mt-10 text-red-500'>{error}</p>
  }

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
