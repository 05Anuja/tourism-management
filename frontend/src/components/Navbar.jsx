import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { User } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const isLoggedIn = false

  const navLinks = [
    { path: '/', label: 'home' },
    { path: '/explore', label: 'explore' },
    { path: '/festivals', label: 'festivals' },
    { path: '/about', label: 'about' },
  ]

  return (
    <div className="sticky top-0 z-50 bg-slate-900 text-white backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between py-2 font-medium relative px-3 sm:px-[5vw]">

        {/* Logo */}
        <Link to="/">
          <p className="text-3xl">
            <span className="text-orange-500">R</span>atnagiri
            <span className="text-orange-500 ml-1">T</span>ourism
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-6 text-lg">

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

          {/* Profile Dropdown - Desktop */}
          <div className="relative group">
            <NavLink
              to="/login"
              className="p-2 rounded-full hover:text-orange-500  transition"
            >
              <User size={22} />
            </NavLink>

            {/* Dropdown */}
            <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg  
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                            transition-all duration-200">
              <ul className="flex flex-col py-2 text-sm">
                <Link to="/favourites" className="px-4 py-2 hover:bg-slate-700 hover:text-orange-500">
                  Favourites
                </Link>
                <Link to="/mytrips" className="px-4 py-2 hover:bg-slate-700 hover:text-orange-500">
                  My Trip Plan
                </Link>
                <Link to="/booktour" className="px-4 py-2 hover:bg-slate-700 hover:text-orange-500">
                  Book Tour
                </Link>
                <button className="text-left outline-none px-4 py-2 hover:bg-slate-700 hover:text-red-400">
                  Logout
                </button>
              </ul>
            </div>
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden outline-none cursor-pointer text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-slate-900 shadow-md 
                         sm:hidden flex flex-col items-center gap-5 py-6 text-white">

            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `capitalize text-sm ${
                    isActive ? 'text-orange-600 font-semibold' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Mobile Profile Options */}
            {/* Mobile Profile Options */}
<div className="flex flex-col items-center gap-3 text-sm border-t 
                border-slate-700 pt-4 w-full">

  {isLoggedIn ? (
    <>
      <Link
        to="/mytrips"
        onClick={() => setMenuOpen(false)}
        className="hover:text-orange-500"
      >
        My Trip Plan
      </Link>

      <Link
        to="/favourites"
        onClick={() => setMenuOpen(false)}
        className="hover:text-orange-500"
      >
        Favourites
      </Link>

      <Link
        to="/booktour"
        onClick={() => setMenuOpen(false)}
        className="hover:text-orange-500"
      >
        Book Tour
      </Link>

      <button className="hover:text-red-400">
        Logout
      </button>
    </>
  ) : (
    <Link
      to="/login"
      onClick={() => setMenuOpen(false)}
      className="hover:text-orange-500"
    >
      Login
    </Link>
  )}
</div>

          </ul>
        )}

      </div>
    </div>
  )
}

export default Navbar
