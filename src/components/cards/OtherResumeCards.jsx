import React from "react";
import { motion } from "framer-motion";
import "./resumeCards.css";

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Animation variants for individual cards
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Animation variants for the title
const titleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.2
    }
  },
  hover: {
    x: 5,
    transition: {
      duration: 0.2
    }
  }
};

// Animation variants for the company
const companyVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.3
    }
  }
};

// Animation variants for decorative elements
const decorativeVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: "easeOut"
    }
  },
  hover: {
    rotate: 360,
    scale: 1.1,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

const OtherResumeCards = ({ data, header }) => {
  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {data.map((resume, index) => (
        <motion.div
          key={index}
          className="relative group"
          variants={cardVariants}
          whileHover="hover"
        >
          {/* Enhanced Card Container */}
          <div className="cardContainer relative bg-gradient-to-br from-gray-900 via-black to-gray-800 border-2 border-gray-700 rounded-xl p-6 mb-6 overflow-hidden shadow-2xl hover:shadow-rose-500/20 transition-all duration-300">
            
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-transparent to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(45deg, #f43f5e, #ec4899, #f43f5e)",
                padding: "2px",
                borderRadius: "12px"
              }}
              whileHover={{
                background: [
                  "linear-gradient(45deg, #f43f5e, #ec4899, #f43f5e)",
                  "linear-gradient(90deg, #ec4899, #f43f5e, #ec4899)",
                  "linear-gradient(135deg, #f43f5e, #ec4899, #f43f5e)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-xl" />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10">
              {/* Decorative Corner Element */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full opacity-20 group-hover:opacity-60"
                variants={decorativeVariants}
                whileHover="hover"
              />
              
              {/* Decorative Lines */}
              <motion.div
                className="absolute top-0 left-0 w-16 h-0.5 bg-gradient-to-r from-rose-500 to-transparent opacity-50 group-hover:opacity-100"
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />

              {/* Title with Enhanced Animation */}
              <motion.h3
                className="text-xl font-bold text-white mb-2 group-hover:text-rose-300 transition-colors duration-300"
                variants={titleVariants}
                whileHover="hover"
                style={{
                  textShadow: "0 0 20px rgba(244, 63, 94, 0.3)"
                }}
              >
                {resume.title}
              </motion.h3>

              {/* Company with Enhanced Styling */}
              <motion.p
                className="text-gray-300 font-medium group-hover:text-rose-200 transition-colors duration-300"
                variants={companyVariants}
                style={{
                  textShadow: "0 0 10px rgba(244, 63, 94, 0.2)"
                }}
              >
                {resume.company}
              </motion.p>

              {/* Animated Underline */}
              <motion.div
                className="mt-3 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </div>

            {/* Floating Particles Effect */}
            <motion.div
              className="absolute top-4 right-4 w-2 h-2 bg-rose-400 rounded-full opacity-30"
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-40"
              animate={{
                y: [0, -8, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>

          {/* Enhanced Connectors */}
          {index < data.length - 1 && (
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
            >
              {/* Vertical Connector */}
              <motion.div
                className="w-1 h-8 bg-gradient-to-b from-rose-500 to-pink-500 rounded-full shadow-lg shadow-rose-500/30"
                initial={{ height: 0 }}
                animate={{ height: "2rem" }}
                transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
              />
              
              {/* Connector Circle */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full border-2 border-white shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 1.2 }}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 180,
                  boxShadow: "0 0 20px rgba(244, 63, 94, 0.6)"
                }}
              />
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default OtherResumeCards;
