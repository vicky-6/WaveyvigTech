import { useState } from 'react'
import './App.css'
import WaveyvigTechNavbar from './components/Navbar'
import { Routes, Route, Navigate} from 'react-router-dom'
import Footer from './components/Footer'
import About from './pages/About/About'
import WhatsAppButton from './components/WhatsAppButton'
import ChatBot from './components/Chatbot'
import CareersMain from './pages/Careers/CareersMain'
import HomeMain from './pages/Home/HomeMain'
import TrainingMain from './pages/Training/TrainingMain'
import Servicesmain from './pages/Service/Servicesmain'
import Fullstack from './pages/LiveBootCamp/FullStack'

function App() {


  return (
    <>
    <WaveyvigTechNavbar/>
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path='/home' element={<HomeMain />}/>
      <Route path='/careers' element={<CareersMain />}/>
      <Route path='/training' element={<TrainingMain/>}/>
      {/* <Route path='/classes' element={<Classes/>} /> */}
      <Route path='/services' element={<Servicesmain />} />
      <Route path='/about' element={<About />} />
      
      <Route path="*" element={<h2>Page Not Found</h2>} />
      <Route path="/fullstack-course" element={<Fullstack />} />
    </Routes>
    
    <Footer/>
    <WhatsAppButton />
    <ChatBot />

    </>
  )
}

export default App
