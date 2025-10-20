import React from "react";
import { motion } from "framer-motion";
import "./resumeCards.css";

// Animation variants
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

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: -50, 
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

function EducationResumeCard({ data, header }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="col-span-1 md:col-span-2 mb-5"
        variants={titleVariants}
      >
        <div className="resumeTitleDiv">
          <motion.p 
            className="resumeTitle text-rose-400 font-semibold tracking-wider"
            whileHover={{ 
              scale: 1.05,
              color: "#f43f5e",
              textShadow: "0 0 8px rgba(244, 63, 94, 0.5)"
            }}
          >
            {header.period}
          </motion.p>
          <motion.h1 
            className="resumeTitleDesc text-white text-2xl font-bold mt-2"
            whileHover={{ 
              scale: 1.02,
              color: "#f9fafb"
            }}
          >
            {header.title}
          </motion.h1>
        </div>
      </motion.div>
      
      <motion.div 
        className="col-span-1 md:col-span-2 cardContainer mx-3 mt-5 relative"
        variants={containerVariants}
      >
        {/* Enhanced timeline line */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-500 via-rose-400 to-rose-600 rounded-full shadow-lg shadow-rose-500/30"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        {data &&
          data.map((item, index) => (
            <motion.div 
              key={index}
              className="hoverCard my-10 relative group"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                x: 10
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-5/6 flex px-0 relative">
                {/* Enhanced circle connector */}
                <motion.div 
                  className="circleConnector relative z-10 bg-gray-800 border-4 border-rose-500 shadow-lg shadow-rose-500/30"
                  whileHover={{ 
                    scale: 1.2,
                    backgroundColor: "#f43f5e",
                    borderColor: "#fff",
                    boxShadow: "0 0 20px rgba(244, 63, 94, 0.6)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-rose-500"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                {/* Enhanced horizontal connector */}
                <motion.div 
                  className="horConnector bg-gradient-to-r from-rose-500 to-gray-700 shadow-md"
                  whileHover={{ 
                    scaleY: 1.5,
                    background: "linear-gradient(to right, #f43f5e, #e11d48)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Enhanced card content */}
                <motion.div 
                  className="cardDiv text-gray-300 bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-rose-500/20 rounded-lg shadow-xl shadow-rose-500/10 backdrop-blur-sm relative overflow-hidden group-hover:border-rose-500/50 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(244, 63, 94, 0.2)",
                    borderColor: "rgba(244, 63, 94, 0.6)"
                  }}
                >
                  {/* Background gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-rose-500/0 rounded-lg"
                    whileHover={{
                      borderColor: "rgba(244, 63, 94, 0.3)",
                      boxShadow: "inset 0 0 20px rgba(244, 63, 94, 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="w-full flex px-4 py-3 justify-between relative z-10">
                    <div className="w-3/4">
                      <motion.h6 
                        className="courseTitle text-white font-semibold text-lg mb-2"
                        whileHover={{ 
                          color: "#f43f5e",
                          textShadow: "0 0 8px rgba(244, 63, 94, 0.5)"
                        }}
                      >
                        {item.title}
                      </motion.h6>
                      <motion.p 
                        className="school text-rose-300 font-medium"
                        whileHover={{ 
                          color: "#fda4af",
                          scale: 1.02
                        }}
                      >
                        {item.school}
                      </motion.p>
                    </div>
                    <div className="w-1/4 text-end">
                      <motion.button 
                        className="btn gradeBtn px-3 py-1 rounded-lg bg-transparent text-rose-400 font-semibold border border-rose-500/50"
                        whileHover={{ 
                          scale: 1.1,
                          color: "#fda4af",
                          borderColor: "rgba(244, 63, 94, 0.8)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.grade}
                      </motion.button>
                    </div>
                  </div>
                  
                  <motion.p 
                    className="p-4 text-gray-400 leading-relaxed relative z-10"
                    whileHover={{ 
                      color: "#d1d5db",
                      scale: 1.01
                    }}
                  >
                    {item.desc}
                  </motion.p>
                  
                  {/* Floating decorative elements */}
                  <motion.div
                    className="absolute top-2 right-2 w-2 h-2 bg-rose-400 rounded-full opacity-30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
}

export default EducationResumeCard;
