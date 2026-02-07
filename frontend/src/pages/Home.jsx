import React from 'react'
import Hero from '../components/Hero'
import MostlyVisitedPlaces from '../components/MostlyVisitedPlaces'
import ThingsToDo from '../components/ThingsToDo'
import PlanTrip from '../components/PlanTrip'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div>
      <Hero />
      <MostlyVisitedPlaces />
      <ThingsToDo />
      <PlanTrip />
      <CTA />
    </div>
  )
}

export default Home
