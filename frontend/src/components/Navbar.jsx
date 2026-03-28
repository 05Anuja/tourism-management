import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { User, Menu, X } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout, isAuthenticated } = useContext(AuthContext);

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/explore", label: "EXPLORE" },
    { path: "/festivals", label: "FESTIVALS" },
    { path: "/about", label: "ABOUT" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-slate-900 text-white">
      <div className="flex items-center justify-between py-3 px-6">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold">
            <span className="text-orange-500">R</span>atnagiri
            <span className="text-orange-500 ml-1">T</span>ourism
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-400"
              }
            >
              {item.label}
            </NavLink>
          ))}

          {!isAuthenticated ? (
            <Link
              to="/login"
              className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600"
            >
              Login
            </Link>
          ) : (
            <div className="relative group cursor-pointer">
              <Link to="/profile">
                <User size={24} />
              </Link>

              <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg  
                              opacity-0 invisible group-hover:opacity-100 
                              group-hover:visible transition">

                <ul className="flex flex-col py-2 text-sm">
                  <Link to="/favourites" className="px-4 py-2 hover:bg-slate-700">
                    Favourites
                  </Link>
                  <Link to="/placesToVisit" className="px-4 py-2 hover:bg-slate-700">
                    Visit Later
                  </Link>
                  <Link to="/booktour" className="px-4 py-2 hover:bg-slate-700">
                    Book Tour
                  </Link>
                  <button
                    onClick={logout}
                    className="text-left px-4 py-2 text-red-400 hover:bg-slate-700"
                  >
                    Logout
                  </button>
                </ul>
              </div>
            </div>
          )}
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button className="outline-none cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 px-6 py-4 space-y-4">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-orange-400"
            >
              {item.label}
            </NavLink>
          ))}

          {/* Profile Section */}
          {!isAuthenticated ? (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block bg-orange-500 px-4 py-2 rounded-lg text-center"
            >
              Login
            </Link>
          ) : (
            <Link
              to='/profile'
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 hover:text-orange-400"
            >
              <User size={20}/>
              Profile
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
