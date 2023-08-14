import React from 'react'
import Header from '../header/Header'
import Home from './Home'
import Features from '../feature/Features'
import Footer from '../footer/Footer'
import Testimonials from '../testimonial/Testimonilas'
import Project from '../project/Project'
import Resume from '../resume/Resume'

function HomePage() {
  return (
    <div>
        <Header />
        <Home />
        <Features />
        <Project />
        <Resume />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default HomePage