import { useState } from 'react'
import './App.css'
import WaveyvigTechNavbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Careers from './pages/Careers'
import Classes from './pages/Classes'
import Services from './pages/Services'
import Training from './pages/Training'
import Footer from './components/Footer'
import About from './pages/About'
import WhatsAppButton from './components/WhatsAppButton'

function App() {


  return (
    <>
    <WaveyvigTechNavbar/>
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/training' element={<Training/>}/>
      <Route path='/classes' element={<Classes/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/about' element={<About/>} />
      
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
    <Footer/>
    <WhatsAppButton />

    </>
  )
}

export default App
