import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Favourites = () => {

  const [visitLater, setvisitLater] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const token = localStorage.getItem('token')
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/user/placesToVisit`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        console.log(res.data)
        setvisitLater(res.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPlaces();
  }, []);

  if (loading) {
    return <p className='text-center mt-10'>Loading Your Favourites</p>
  }

  return (
  <>
    <h2 className="text-xl sm:text-2xl md:text-3xl text-center mt-4 font-semibold mb-6 text-slate-700">
      📍 Places To Visit Later
    </h2>

    {/* ✅ Empty State */}
    {visitLater.length === 0 ? (
      <p className="text-center text-gray-500 mt-10 text-lg">
        No places added yet 😔
      </p>
    ) : (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10'>
        {
          visitLater.map((item) => (
            <div key={item._id} className='bg-white shadow-md rounded-xl overflow-hidden'>
              
              <img 
                src={item.image} 
                alt={item.name}
                className='w-full h-40 sm:h-44 md:h-48 object-cover'
              />

              <div className='p-4'>
                <h2 className='text-base sm:text-lg md:text-xl font-bold'>
                  {item.name}
                </h2>

                <p className='text-gray-600 text-xs sm:text-sm mt-1'>
                  📍 {item.location}
                </p>

                <p className='text-xs sm:text-sm mt-2'>
                  When to Go: 
                  <span className='font-medium'> {item.bestTimeToVisit}</span>
                </p>
              </div>

            </div>
          ))
        }
      </div>
    )}
  </>
)
}

export default Favourites