import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import Header from './components/Header'
import EmailContact from './pages/EmailContact'
import PhoneNumber from './pages/PhoneNumber'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        {/* Basic Route */}
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        {/* Nested Route */}
        <Route path='/contact' element={<Contact />} >
          <Route path='email' element={<EmailContact />} />
          <Route path='phone' element={<PhoneNumber />} />
        </Route>
        {/* Dynamic Route */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart/:id' element={<Checkout />} />
        {/* 404 Not Found Route */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
