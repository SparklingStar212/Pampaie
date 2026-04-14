import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './Pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App