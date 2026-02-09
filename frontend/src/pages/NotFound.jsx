import React from 'react'
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-slate-900 text-center px-4">

      <h1 className="text-7xl font-bold text-orange-500">404</h1>

      <h2 className="text-2xl mt-4 font-semibold">
        Page Not Found
      </h2>

      <p className="text-gray-400 mt-2 max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound
