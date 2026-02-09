// import React, { useContext } from "react";
import React from 'react'
import { assets } from "../assets/assets";
import { AttractionContext } from "../context/AttractionContext";

const About = () => {

  // const {navigate} = useContext(AttractionContext)

  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Ratnagiri
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ratnagiri, located along the scenic Konkan coast of Maharashtra,
              is known for its pristine beaches, ancient forts, spiritual temples,
              vibrant festivals, and rich cultural heritage.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our platform is built to help travelers discover both popular and
              hidden gems of Ratnagiri while celebrating its traditions,
              festivals, and local life.
            </p>
          </div>

          {/* Image */}
          <div className="relative bg-gray-100 h-64 sm:h-72 rounded-xl overflow-hidden">
            <img
              src={assets.img}
              alt="Ratnagiri"
              className="w-full h-full object-cover"
            />
            <div className='absolute inset-0 bg-black/20 flex items-center justify-center'>
            <span className='text-white text-lg font-semibold'>
              Konkan Coast
            </span>
            </div>
          </div>

        </div>
      </section>

      {/* OUR MISSION */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-8 rounded-full"></div>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission is to provide travelers with clear and reliable information about Ratnagiri’s beaches, forts, temples, and festivals. We aim to promote responsible tourism, preserve local culture, and help visitors experience the true beauty of the Konkan region.
          </p>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Vision
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-10 rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                🌍 Promote Tourism
              </h3>
              <p className="text-gray-600 text-sm">
                Showcase Ratnagiri’s beauty and inspire travelers from all over India.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                🌱 Sustainable Travel
              </h3>
              <p className="text-gray-600 text-sm">
                Encourage eco-friendly tourism that preserves nature and heritage.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                ❤️ Support Local Culture
              </h3>
              <p className="text-gray-600 text-sm">
                Promote festivals, traditions, and local communities of Konkan.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      {/* <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-4 text-gray-600">
              <li>✔ Detailed information about beaches, forts & temples</li>
              <li>✔ Festival-wise travel guidance</li>
              <li>✔ Clean & user-friendly design</li>
              <li>✔ Mobile-responsive experience</li>
            </ul>

            <ul className="space-y-4 text-gray-600">
              <li>✔ Focus on local culture & heritage</li>
              <li>✔ Ideal for first-time visitors</li>
              <li>✔ Built using modern web technologies</li>
              <li>✔ Continuously improving content</li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      {/* <section className="py-16 bg-orange-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Explore Ratnagiri With Us
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Discover beaches, forts, temples, and festivals that make Ratnagiri truly special.
        </p>
        <button onClick={() => navigate('/explore')} className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Start Exploring
        </button>
      </section> */}

    </div>
  );
};

export default About;
