import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import AboutUsPage from './pages/AboutUsPage'
import ContactUsPage from './pages/ContactUsPage'
import HomePage from './pages/HomePage'
import Project from './pages/Project'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/project" element={<Project />} />
    </Routes>
    </>
  )
}

export default App
