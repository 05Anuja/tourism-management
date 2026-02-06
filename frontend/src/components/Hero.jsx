import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='relative h-[90vh] w-full'>
      {/* Background Image */}
      <img 
      src={assets.heroImg} 
      alt="Ratangiri Hero Image" 
      className='absolute inset-0 w-full h-full object-cover'
      />

      {/* Text Overlay */}
      <div className='absolute inset-0 bg-slate-900/60'></div>

      {/* content */}
      <div className='relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-[5vw] text-white max-w-3xl'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight'>
            Discover <span className='text-orange-400'>Ratnagiri</span>
        </h1>

        <p className='mt-4 text-base sm:text-lg text-slate-200'>
            Where serene beaches, historic forts, and rich konkan culture come together.
        </p>

        <div className='mt-6 flex gap-4'>
            <button className='bg-orange-500 hover:bg-orange-600 cursor-pointer outline-none transition px-6 py-3 rounded-md text-sm sm:text-base font-semibold'>
                Explore Places
            </button>

            <button className='border border-white/70 hover:bg-white/10 cursor-pointer outline-none transition px-6 py-3 rounded-md text-sm sm:text-base'>
                View Festivals
            </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
