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

const HeroContent = () => {
  return (
    
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-5 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[800px] w-auto h-auto"
        >
          <span className="text-transparent text-3xl bg-clip-text bg-gradient-to-l from-blue-500 to-blue-500">
            Site reliability Engineer
            <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Backend 
              <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              consultant{" "}
            </span>
            Developer{" "}
            </span>
            <span className="text-transparent  text-2xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500">
            DevSecOps
            </span>
            <span className="text-transparent  text-4xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Solution Architect{" "}
            </span>
            <span className="text-transparent  text-4xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              IoT Blockchain and Cyber Security{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[1000px]"
        >
          I&apos;m a Full Stack Engineer Demonstrating expertise in collaborative project delivery, I excel in Golang, Bash, and C++, developing scalable backend systems for mainframes and multi-cloud environments. Proficient in MySQL and PostgreSQL, I seamlessly integrate back-end logic with HTML and TypeScript for user-friendly interfaces. Well-versed in DevSecOps principles, I ensure compliance with 12-factor applications and utilize ELK, Prometheus, and Grafana for monitoring applications. Committed to staying current with industry trends, I passionately deliver high-quality, maintainable code, resolving suboptimal configurations and providing effective mitigation fixes in production environments..
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
        <a href="https://drive.google.com/file/d/1qTXXbOA-Y735-Mmbks-dTrxjlcKx9rMo/view?usp=share_link" target="_blank" download>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 box">
                Download Resume
            </button>
        </a>
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
