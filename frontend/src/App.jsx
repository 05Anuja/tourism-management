import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Explore from './pages/Explore'
import Login from './pages/Login'
import Festivals from './pages/Festivals'
import Attractions from './pages/Attractions'
import ThingsToDo from './components/ThingsToDo'
import PlanTrip from './components/PlanTrip'

const App = () => {
  return (
    <>
      <div>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/festivals' element={<Festivals />} />
            <Route path='/attraction/:attractionId' element={<Attractions />} />
            <Route path='/things-to-do' element={<ThingsToDo />} />
            <Route path='/travel-tips' element={<PlanTrip />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
