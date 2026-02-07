import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-24 border-t border-gray-800">

      {/* Top Footer */}
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-wrap justify-between gap-y-12">

        {/* Brand / About */}
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Ratnagiri Tourism
          </h3>
          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            Discover beautiful beaches, historic forts, local food, and authentic
            Konkan culture in Ratnagiri.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h4 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-white hover:border-b transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/explore" className="hover:text-white hover:border-b transition">
                Attractions
              </Link>
            </li>
            {/* <li>
              <Link to="/things-to-do" className="hover:text-white transition">
                Things To Do
              </Link>
            </li> */}
            <li>
              <Link to="/festivals" className="hover:text-white hover:border-b transition">
                Festivals
              </Link>
            </li>
            {/* <li>
              <Link to="/travel-tips" className="hover:text-white transition">
                Travel Tips
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              📍 <span>Ratnagiri, Maharashtra</span>
            </li>
            <li className="flex items-center gap-2">
              ✉️ <span>info@ratnagiriexplore.com</span>
            </li>
            <li className="text-xs text-gray-500 mt-4">
              *This is a demo project for learning purposes.*
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-5 text-sm text-gray-400">
        © {new Date().getFullYear()} Ratnagiri Tourism | Developed by{' '}
        <span className="text-white font-medium">Pooja & Anuja</span>
      </div>

    </footer>
  )
}

export default Footer
