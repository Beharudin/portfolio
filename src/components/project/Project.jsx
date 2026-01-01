import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/MockData";

// Simplified animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Simplified animation variants for individual project cards
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Simplified animation variants for content
const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
};

const Project = () => {
  return (
    <div className="w-full mt-24 px-5 md:px-24" id="projects">
      <div className="titleDiv">
        <p className="title">PROJECTS</p>
        <h1 className="titleDesc">What I've Built</h1>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Simple overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-4">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-rose-500 transition-colors duration-300"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-rose-500 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <motion.div className="p-6" variants={contentVariants}>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
