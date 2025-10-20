import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { userImg } from "../../assets";
import { skillData, socialData, typewriterTitles } from "../data/MockData";
import SkillIcon from "./SkillIcon";
import SocialLink from "./SocialLink";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const skillsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Home() {
  return (
    <motion.div
      className="w-full px-5 md:px-24 min-h-screen flex items-center relative overflow-hidden"
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-rose-400 rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 mb-5 w-full relative z-10">
        <motion.div
          className="col-span-3 md:col-span-2 py-5 sm:p-2"
          variants={itemVariants}
        >
          <motion.h5
            className="mt-28 text-rose-400 font-medium tracking-wide"
            variants={itemVariants}
          >
            👋 Hi, I'm Beharudin
          </motion.h5>

          <motion.div className="text-white" variants={itemVariants}>
            <motion.h1
              className="text-5xl font-bold py-2"
              variants={itemVariants}
            >
              Hi, I'm
              <motion.span
                className="text-rose-500 relative inline-block ml-3"
                transition={{ duration: 0.3 }}
              >
                Beharudin Mohammed
              </motion.span>
            </motion.h1>

            <motion.h3
              className="text-3xl font-semibold leading-8 text-rose-300 mb-2"
              variants={itemVariants}
            >
              <Typewriter
                options={{
                  strings: typewriterTitles,
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </motion.h3>

            <motion.p
              className="text-xl text-gray-200 font-medium mb-4"
              variants={itemVariants}
            >
              Building Scalable SaaS Platforms & Investor-Ready Solutions
            </motion.p>

            <motion.p
              className="text-gray-300 font-medium leading-7 pt-3 max-w-2xl"
              variants={itemVariants}
            >
              I specialize in launching investor-ready SaaS products that are
              fast, scalable, and user-centric. With over 4 years of experience
              and 15+ successful projects, I excel in creating high-performance
              SaaS platforms, admin dashboards, and full-stack web applications
              with clean architecture and pixel-perfect UI design.
            </motion.p>

            <motion.p
              className="text-gray-400 leading-7 pt-3 max-w-2xl"
              variants={itemVariants}
            >
              I develop fast, reliable, and SEO-optimized applications using
              React, Next.js, TypeScript, and Tailwind CSS—loved by users and
              trusted by startups worldwide.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row mt-3 sm:mt-5 pt-3 sm:pt-5"
            variants={itemVariants}
          >
            <motion.div
              className="w-full sm:w-1/2 mb-4 sm:mb-0"
              variants={itemVariants}
            >
              <motion.h6 className="text-sm font-semibold text-rose-400 tracking-wider">
                CONNECT WITH ME
              </motion.h6>
              <motion.div
                className="flex space-x-3 mt-5"
                variants={skillsVariants}
              >
                {socialData.map((data, index) => (
                  <motion.div
                    key={data.href}
                    variants={skillItemVariants}
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <SocialLink href={data.href} icon={data.icon} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="w-full sm:w-1/2" variants={itemVariants}>
              <motion.h6 className="text-sm font-semibold text-rose-400 tracking-wider">
                CORE TECHNOLOGIES
              </motion.h6>
              <motion.div
                className="flex flex-wrap gap-3 mt-5"
                variants={skillsVariants}
              >
                {skillData.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={skillItemVariants}
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <SkillIcon skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          className="col-span-3 md:col-span-1 flex justify-center items-center mt-10 md:mt-0"
          variants={imageVariants}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Subtle ring around image */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-rose-500/20"
              style={{ transform: "scale(1.05)" }}
            />

            {/* Main image */}
            <motion.img
              className="w-80 h-80 rounded-full object-cover border-4 border-rose-500/50 shadow-2xl shadow-rose-500/25 relative z-10"
              src={userImg}
              alt="Beharudin Mohammed - Senior React Developer"
              whileHover={{
                borderColor: "rgba(244, 63, 94, 0.7)",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
