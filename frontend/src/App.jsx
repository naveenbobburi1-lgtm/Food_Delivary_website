import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {
  return (
    <div class = "App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart"  element = {<Cart/>} />
        <Route path = "/placeorder" element = {<PlaceOrder/>} />
      </Routes>
    </div>
  )
}

export default App

