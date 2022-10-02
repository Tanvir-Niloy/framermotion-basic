import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Container } from 'react-bootstrap'
import {Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Services from './pages/Services'

const App = () => {

  const location = useLocation();
  return (
   
    <>
   <Header/>
    <Container>
     <AnimatePresence>
     <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
       </Routes>
     </AnimatePresence>
    </Container>
    </>
  )
}

export default App