import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data/MockData";

// Simplified animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Simplified animation variants for individual testimonial cards
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Simplified animation variants for content
const contentVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2
    }
  }
};

const Testimonilas = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="relative group"
          variants={cardVariants}
          whileHover={{ y: -4 }}
        >
          {/* Simplified Card Container */}
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[280px] flex flex-col">
            
            {/* Quote Icon */}
            <div className="absolute top-4 left-4 text-rose-500/30 group-hover:text-rose-500/50 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            {/* Content Container */}
            <motion.div 
              className="relative z-10 flex flex-col h-full"
              variants={contentVariants}
            >
              
              {/* Avatar Section */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  {/* Avatar Image */}
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-rose-500/50 transition-all duration-300 group-hover:border-rose-500"
                  />
                </div>
              </div>

              {/* Quote Text */}
              <div className="flex-1 flex items-center justify-center mb-6">
                <p className="text-gray-300 text-center leading-relaxed group-hover:text-rose-100 transition-colors duration-300 italic relative text-sm">
                  <span className="text-rose-500/60 text-lg absolute -top-1 -left-1">"</span>
                  {testimonial.comment}
                  <span className="text-rose-500/60 text-lg absolute -bottom-1 -right-1">"</span>
                </p>
              </div>

              {/* Name */}
              <div className="text-center">
                <h4 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors duration-300">
                  {testimonial.name}
                </h4>
              </div>

              {/* Simple Bottom Line */}
              <div className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-rose-500/50 to-transparent rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Testimonilas;
