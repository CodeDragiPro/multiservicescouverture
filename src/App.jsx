import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhatWeOffer from './components/WhatWeOffer'

function App() {
  return (
    <div className='font-sans text-sans'>
      <Navbar/>
      <div className=''>
        <Hero/>
        <About/>
        <WhatWeOffer/>
      </div>
    </div>
  )
}

export default App
