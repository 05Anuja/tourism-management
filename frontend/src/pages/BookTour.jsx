import React, { useEffect, useState } from "react";
import TourCard from "../components/TourCard";

const BookTour = () => {

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/tour-package`);

        if (!response.ok) {
          throw new Error("Failed to fetch tours");
        }

        const data = await response.json();
        setTours(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading tours...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Book Your Ratnagiri Tour
      </h1>

      <p className="text-center text-gray-500 mt-2">
        Choose from our curated tour packages
      </p>

      <div className="grid gap-6 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour._id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default BookTour;
