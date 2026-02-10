import React, { useContext } from "react"
import TourCard from "../components/TourCard"
import { AttractionContext } from "../context/AttractionContext"

const BookTour = () => {
  const {tours} = useContext(AttractionContext);
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Book Your Ratnagiri Tour
      </h1>

      <p className="text-center text-gray-500 mt-2">
        Choose from our curated tour packages
      </p>

      <div className="grid gap-6 mt-10
                      sm:grid-cols-1
                      md:grid-cols-2
                      lg:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  )
}

export default BookTour
