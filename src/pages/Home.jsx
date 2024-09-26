import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import WhatWeOffer from '../components/WhatWeOffer';
import HowWeWork from '../components/HowWeWork';
import WhyChooseUs from '../components/WhyChooseUs';
import OurProjects from '../components/OurProjects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        {/* Meta tags for SEO */}
        <title>Multiservices Couvertures - Couvreur Professionnel | Toiture et Réparation</title>
        <meta 
          name="description" 
          content="Multiservices Couvertures est une entreprise de couverture spécialisée dans l'installation, la réparation et l'entretien de toitures. Contactez-nous pour un devis gratuit." 
        />
        <meta name="keywords" content="couvreur, toiture, réparation, entreprise de couverture, Multiservices Couvertures, entretien de toit, isolation, dépannage toiture" />
        <meta name="author" content="Multiservices Couvertures" />
        
        {/* Open Graph tags for social media */}
        <meta property="og:title" content="Multiservices Couvertures - Experts en Toiture et Réparation" />
        <meta 
          property="og:description" 
          content="Faites confiance à Multiservices Couvertures pour vos projets de toiture. Nous proposons des services d'installation, de réparation et d'entretien de toitures." 
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://www.multiservicescouvertures.com/" /> */}
        
        
      </Helmet>

      <Hero />
      <About />
      <WhatWeOffer />
      <HowWeWork />
      <WhyChooseUs />
      <OurProjects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
