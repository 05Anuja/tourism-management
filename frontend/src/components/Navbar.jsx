import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { path: '/', label: 'home' },
    { path: '/explore', label: 'explore' },
    { path: '/about', label: 'about' },
    { path: '/festivals', label: 'festivals' },
    { path: '/login', label: 'profile' },
  ]

  return (
    <div className="sticky top-0 z-50 bg-slate-900 text-white backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between py-3 font-medium relative px-4 sm:px-[5vw]">
        
        {/* Logo */}
        <Link to="/">
          <p className="text-3xl">
            <span className="text-orange-500">R</span>atnagiri
            <span className="text-orange-500 ml-1">T</span>ourism
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden text-white sm:flex gap-6 text-lg">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `capitalize hover:text-orange-500 transition ${
                  isActive ? 'text-orange-600 font-semibold' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-slate-900 backdrop-blur-md shadow-md sm:hidden flex flex-col items-center gap-4 py-6 text-white">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `capitalize text-sm  ${
                    isActive ? 'text-orange-600 font-semibold' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Navbar
