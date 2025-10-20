import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLink = ({ href, icon, hoverColor = "hover:text-rose-600" }) => (
  <motion.a
    href={href}
    target="_blank" 
    rel="noopener noreferrer"
    className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gray-800 to-black text-white rounded-lg border border-rose-500/20 shadow-lg shadow-rose-500/10 overflow-hidden group"
    whileHover={{ 
      scale: 1.1,
      borderColor: "rgba(244, 63, 94, 0.6)",
      boxShadow: "0 0 25px rgba(244, 63, 94, 0.4)"
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
  >
    {/* Background gradient overlay */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-rose-600/30 opacity-0"
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
    
    {/* Icon */}
    <motion.div 
      className="relative z-10 p-2 rounded"
      whileHover={{ 
        color: "#f43f5e",
        textShadow: "0 0 10px rgba(244, 63, 94, 0.8)"
      }}
    >
      <FontAwesomeIcon icon={icon} className="text-lg" />
    </motion.div>
    
    {/* Animated border */}
    <motion.div
      className="absolute inset-0 border-2 border-rose-500 rounded-lg opacity-0"
      whileHover={{ 
        opacity: 1,
        scale: 1.05
      }}
      transition={{ duration: 0.3 }}
    />
  </motion.a>
);

export default SocialLink;
