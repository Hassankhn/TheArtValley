import React from 'react'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Contactus from './components/Contactus'
import Aboutus from './components/Aboutus'
import Home from './components/Home'
import "./App.css"
import Trending from './components/Trending'

function App() {
  return (
    <div className="myapp">
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exat path="/contact" element={<Contactus />} />
        <Route exact path="/about" element={<Aboutus />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
