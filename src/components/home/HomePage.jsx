import React from 'react'
import Header from '../header/Header'
import Home from './Home'
import Features from '../feature/Features'
import Footer from '../footer/Footer'
import Testimonials from '../testimonial/Testimonilas'

function HomePage() {
  return (
    <div>
        <Header />
        <Home />
        <Features />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default HomePage