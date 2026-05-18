import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Service from './pages/Service'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Service />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
