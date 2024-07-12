import React from "react";
import image from "./bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

const Landingpage = () => {
  return (
    <div className="relative w-full h-screen top-0">
      {/* Background Image */}
      <img
        src={image}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-8xl font-extrabold">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              strings: ["PRADEEPTA KUMAR SAHOO"]
            }}
          />
        </h1>
        <motion.p 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 text-white font-bold text-lg md:text-2xl"
        >
          SOFTWARE ENGINEER, FRONT END, & WEB APPLICATION DEVELOPER
        </motion.p>
        <FontAwesomeIcon
          icon={faArrowDown}
          className="mt-12 text-white text-3xl md:text-4xl animate-bounce"
        />
      </div>
    </div>
  );
};

export default Landingpage;
