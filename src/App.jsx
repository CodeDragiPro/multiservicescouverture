import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhatWeOffer from './components/WhatWeOffer'
import HowWeWork from './components/HowWeWork'
import WhyChooseUs from './components/WhyChooseUs'
import OurProjects from './components/OurProjects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

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
        <OurProjects/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
