import React from 'react'
import { motion } from 'framer-motion'
import Header from '../header/Header'
import Home from './Home'
import Features from '../feature/Features'
import Footer from '../footer/Footer'
import Testimonials from '../testimonial/Testimonilas'
import Project from '../project/Project'
import Resume from '../resume/Resume'

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
}

// Animation variants for each section
const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  }
}

// Hover animation for sections
const hoverVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
}

// Background gradient animation
const backgroundVariants = {
  animate: {
    background: [
      "linear-gradient(45deg, #000000 0%, #1a1a1a 25%, #000000 50%, #2d1b2e 75%, #000000 100%)",
      "linear-gradient(45deg, #1a1a1a 0%, #000000 25%, #2d1b2e 50%, #000000 75%, #1a1a1a 100%)",
      "linear-gradient(45deg, #000000 0%, #2d1b2e 25%, #000000 50%, #1a1a1a 75%, #000000 100%)"
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }
  }
}

function HomePage() {
  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      variants={backgroundVariants}
      animate="animate"
      style={{
        background: "linear-gradient(45deg, #000000 0%, #1a1a1a 25%, #000000 50%, #2d1b2e 75%, #000000 100%)"
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-rose-500 rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Header with entrance animation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <Header />
      </motion.div>

      {/* Main content container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        {/* Home Section */}
        <motion.div
          variants={sectionVariants}
          whileHover="hover"
          className="relative"
        >
          <motion.div
            variants={hoverVariants}
            className="transform-gpu"
          >
            <Home />
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={sectionVariants}
          whileHover="hover"
          className="relative"
        >
          <motion.div
            variants={hoverVariants}
            className="transform-gpu bg-gradient-to-r from-black/50 to-rose-900/20 backdrop-blur-sm rounded-lg mx-4 my-8 p-4 border border-rose-500/20 shadow-2xl shadow-rose-500/10"
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(244, 63, 94, 0.25)",
              borderColor: "rgba(244, 63, 94, 0.5)"
            }}
          >
            <Features />
          </motion.div>
        </motion.div>

        {/* Project Section */}
        <motion.div
          variants={sectionVariants}
          whileHover="hover"
          className="relative"
        >
          <motion.div
            variants={hoverVariants}
            className="transform-gpu bg-gradient-to-l from-black/50 to-rose-900/20 backdrop-blur-sm rounded-lg mx-4 my-8 p-4 border border-rose-500/20 shadow-2xl shadow-rose-500/10"
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(244, 63, 94, 0.25)",
              borderColor: "rgba(244, 63, 94, 0.5)"
            }}
          >
            <Project />
          </motion.div>
        </motion.div>

        {/* Resume Section */}
        <motion.div
          variants={sectionVariants}
          whileHover="hover"
          className="relative"
        >
          <motion.div
            variants={hoverVariants}
            className="transform-gpu bg-gradient-to-r from-black/50 to-rose-900/20 backdrop-blur-sm rounded-lg mx-4 my-8 p-4 border border-rose-500/20 shadow-2xl shadow-rose-500/10"
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(244, 63, 94, 0.25)",
              borderColor: "rgba(244, 63, 94, 0.5)"
            }}
          >
            <Resume />
          </motion.div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          variants={sectionVariants}
          whileHover="hover"
          className="relative"
        >
          <motion.div
            variants={hoverVariants}
            className="transform-gpu bg-gradient-to-l from-black/50 to-rose-900/20 backdrop-blur-sm rounded-lg mx-4 my-8 p-4 border border-rose-500/20 shadow-2xl shadow-rose-500/10"
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(244, 63, 94, 0.25)",
              borderColor: "rgba(244, 63, 94, 0.5)"
            }}
          >
            <Testimonials />
          </motion.div>
        </motion.div>

        {/* Footer Section */}
        <motion.div
          variants={sectionVariants}
          whileHover="hover"
          className="relative"
        >
          <motion.div
            variants={hoverVariants}
            className="transform-gpu"
          >
            <Footer />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating action elements */}
      <motion.div
        className="fixed bottom-8 right-8 z-20"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
      >
        <motion.button
          className="bg-transparent border-2 border-rose-500 text-rose-400 p-4 rounded-full"
          whileHover={{ 
            scale: 1.1, 
            rotate: 360,
            borderColor: "#fda4af",
            color: "#fda4af"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default HomePage