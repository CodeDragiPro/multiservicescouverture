import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <div className=''>
      <Navbar/>
      <div className=''>
        <Hero/>
        <About/>
      </div>
    </div>
  )
}

export default App
