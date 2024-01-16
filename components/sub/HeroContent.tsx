"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  return (
    
    
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center justify-center px-10 mt-40 w-full z-[20]"
      >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[800px] w-auto h-auto"
        >
        <h1 className="text-[#4AF626] mb-4 text-1xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold">
          <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Hello, I&apos;m{" "}
          </span>
         
          <br></br>
          #
          <TypeAnimation
            sequence={[
              "Vikshith H G",
              1000,
              "Consultant",
              1000,
              "Solution Architect",
              1000,
              "Developer",
              1000,
              "Site Reliability Engineer ",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[900px]"
        >
          I&apos;m a Full Stack Engineer Demonstrating expertise in collaborative project delivery, 
          I excel in Golang, Bash, and C++, developing scalable backend systems for mainframes and multi-cloud environments. 
          Proficient in MySQL and PostgreSQL, I seamlessly integrate back-end logic with HTML and TypeScript for user-friendly interfaces. 
          Well-versed in DevSecOps principles, I ensure compliance with 12-factor applications and utilize ELK, Prometheus, and Grafana for monitoring applications. 
          Committed to staying current with industry trends, I passionately deliver high-quality, maintainable code, 
          resolving suboptimal configurations and providing effective mitigation fixes in production environments..
        </motion.p>
        <motion.a
          variants={slideInFromLeft(0.8)}
        >
        <a href="https://drive.google.com/file/d/1qTXXbOA-Y735-Mmbks-dTrxjlcKx9rMo/view?usp=share_link" target="_blank" download>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 box">
                Download Resume
            </button>
        </a>
        </motion.a>
      </div>

        
      </motion.div>
      
   
  );
};

export default HeroContent;
