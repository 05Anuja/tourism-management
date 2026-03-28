import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Explore2 from './pages/Explore2'
import Login from './pages/Login'
import Festivals from './pages/Festivals'
import Attractions from './pages/Attractions'
import {ToastContainer} from 'react-toastify'
import BookTour from './pages/BookTour'
import Favourites from './pages/Favourites'
import PlacesToVisit from './pages/PlacesToVisit'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'

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
            <Route path='/explore' element={<Explore2 />} />
            <Route path='/festivals' element={<Festivals />} />
            <Route path='/attraction/:attractionId' element={<Attractions />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/placesToVisit' element={<PlacesToVisit />} />
            <Route path='/booktour' element={<BookTour />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
