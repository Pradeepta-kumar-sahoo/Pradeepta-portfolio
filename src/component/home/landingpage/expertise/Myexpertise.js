import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useLocation } from "react-router-dom";
import img2 from "./Rename.png";
import img1 from "./computer (2).png";

const Myexpertise = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Check if we are on the home page

  const { scrollY } = useScroll();

  // Header animation
  const headerX = useTransform(scrollY, [0, 500], [-100, 0]);
  const headerY = useTransform(scrollY, [0, 300], [100, 0]);
  const headerOpacity = useTransform(scrollY, [0, 300], [0, 1]);

  // Software Development animation
  const softwareDevY = useTransform(scrollY, [200, 600], [100, 0]);
  const softwareDevOpacity = useTransform(scrollY, [200, 600], [0, 1]);

  // Frontend Development animation
  const frontendDevX = useTransform(scrollY, [600, 1000], [200, 0]);
  const frontendDevOpacity = useTransform(scrollY, [600, 1000], [0, 1]);

  return (
    <motion.div className="relative bg-black w-full min-h-screen flex flex-col items-center justify-center overflow-y-hidden overflow-x-hidden">
      {/* Header Section */}
      <motion.div
        className="font-mono font-extrabold text-4xl md:text-6xl lg:text-8xl px-4 text-center text-white pb-16 md:pb-32"
        style={isHomePage ? { opacity: headerOpacity, x: headerX, y: headerY } : {}}
      >
        My <span className="text-sky-400 text-4xl md:text-8xl font-semibold"> Expertise</span>
      </motion.div>

      {/* Expertise Sections */}
      <div className="flex flex-col md:flex-row lg:flex-row md:px-16 lg:px-32 px-4 gap-10 md:gap-20 mb-10 w-full">
        {/* Software Development */}
        <motion.div
          style={isHomePage ? { opacity: softwareDevOpacity, y: softwareDevY } : {}}
          className="w-full md:w-1/2 text-center text-white bg-opacity-50"
        >
          <motion.img
            src={img1}
            alt="Software Development"
            className="w-32 h-32 mb-8 mx-auto"
          />
          <h1 className="font-bold text-lg md:text-2xl mb-4">Software Development</h1>
          <p>
          I am a software development fresher specializing in Java, with a strong focus on problem-solving. My expertise includes crafting efficient solutions and developing robust applications.
          </p>
        </motion.div>

        {/* Front End & Web Development */}
        <motion.div
          style={isHomePage ? { opacity: frontendDevOpacity, x: frontendDevX } : {}}
          className="w-full md:w-1/2 text-center text-white bg-opacity-50"
        >
          <motion.img
            src={img2}
            alt="Front End & Web Development"
            className="w-32 h-32 mb-8 mx-auto"
          />
          <h1 className="font-bold text-lg md:text-2xl mb-4">Front End & Web Development</h1>
          <p>
            My expertise extends to front-end and web development, where I create visually stunning, user-friendly, and responsive websites and applications.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Myexpertise;
