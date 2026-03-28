import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
// import { AttractionContext } from "../context/AttractionContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { user, logout, isAuthenticated } = useContext(AuthContext);
  // const { favourites, visitLater } = useContext(AttractionContext);

  const [favourites, setFavourites] = useState([]);
  const [visitLater, setVisitLater] = useState([]);

  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect (() => {
    if (!isAuthenticated) {
    navigate("/login");
    }
  }, [isAuthenticated, navigate]) 

  useEffect (() => {
    const fetchProfileData = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/user/profile-data`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      setFavourites(res.data.favourites);
      setVisitLater(res.data.visitLater);
    }

    fetchProfileData();
  },[])
  

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white py-15 px-4 sm:px-10">

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8 text-center text-slate-900">
        My Profile
      </h1>

      {/* User Info Card */}
      <div className="bg-orange-100 shadow-xl rounded-2xl p-6 mb-16 max-w-3xl mx-auto">

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-800">
              {user?.name || "User"}
            </h2>
            <p className="text-gray-500">{user?.email}</p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div className="bg-red-200 p-4 rounded-xl text-center">
            <h3 className="text-lg font-semibold text-orange-600">
              {favourites.length}
            </h3>
            <p className="text-sm text-gray-600">Favourites</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-xl text-center">
            <h3 className="text-lg font-semibold text-blue-600">
              {visitLater.length}
            </h3>
            <p className="text-sm text-gray-600">Visit Later</p>
          </div>

          <div className="bg-green-100 p-4 rounded-xl text-center">
            <h3 className="text-lg font-semibold text-green-600">
              0
            </h3>
            <p className="text-sm text-gray-600">Booked Tours</p>
          </div>

        </div>
      </div>

      {/* Favourites Section */}
      <div className="max-w-5xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-slate-700">
          ❤️ My Favourites
        </h2>

        {favourites.length === 0 ? (
          <p className="text-gray-500">No favourites added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favourites.map((item, index) => (
              <div
                key={item._id || index}
                className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Visit Later Section */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-slate-700">
          📍 Places to Visit
        </h2>

        {visitLater.length === 0 ? (
          <p className="text-gray-500">No places added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {visitLater.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Profile;
