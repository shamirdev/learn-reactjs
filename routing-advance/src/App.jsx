import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import Header from './components/Header'
import EmailContact from './pages/EmailContact'
import PhoneNumber from './pages/PhoneNumber'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/contact' element={<Contact />} >
          <Route path='email' element={<EmailContact />} />
          <Route path='phone' element={<PhoneNumber />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
