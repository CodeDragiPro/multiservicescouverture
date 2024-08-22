import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhatWeOffer from './components/WhatWeOffer'
import HowWeWork from './components/HowWeWork'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <div className='font-sans text-sans'>
      <Navbar/>
      <div className=''>
        <Hero/>
        <About/>
        <WhatWeOffer/>
        <HowWeWork/>
        <WhyChooseUs/>
      </div>
    </div>
  )
}

export default App
