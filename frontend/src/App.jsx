import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Explore from './pages/Explore'
import Login from './pages/Login'
import Festivals from './pages/Festivals'

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
            <Route path='/login' element={<Login />} />
          </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
