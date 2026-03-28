import React from 'react'
import { Link } from 'react-router-dom'

const AttractionItem = ({  image, name, description }) => {
  return (
    <Link
      to='/explore'
      className="group block text-gray-700"
    >
      {/* Image wrapper */}
      <div className="overflow-hidden rounded-lg bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="pt-2">
        <p className="text-sm leading-tight font-semibold">{name}</p>
        <p className="text-xs text-gray-600 line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  )
}

export default AttractionItem
