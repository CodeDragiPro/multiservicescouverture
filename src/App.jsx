import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className='min-h-screen bg-custom-gradient'>
      <Navbar/>
      <div className=''>
        <Hero/>
      </div>
    </div>
  )
}

export default App
