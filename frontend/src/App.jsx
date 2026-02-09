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
import {ToastContainer} from 'react-toastify'
import BookTour from './pages/BookTour'
import Favourites from './pages/Favourites'
import MyPlanTrip from './pages/MyPlanTrip'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <div>
        <ToastContainer
        position='top-center'
        autoClose= {2000}
        newestOnTop= {true}
        />
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/festivals' element={<Festivals />} />
            <Route path='/attraction/:attractionId' element={<Attractions />} />
            <Route path='/favourites' element={<Favourites />} />
            {/* <Route path='/mytrips' element={<MyPlanTrip />} /> */}
            <Route path='/booktour' element={<BookTour />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
