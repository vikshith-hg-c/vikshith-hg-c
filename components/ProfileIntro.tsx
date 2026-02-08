"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { skills, certifications, topTechSkills } from "@/constants";

const ProfileIntro = () => {
  const [showResumePreview, setShowResumePreview] = useState(false);

  // Google Doc URL from environment variable
  // Format: https://docs.google.com/document/d/DOC_ID/edit or just the doc ID
  const resumeDocUrl = process.env.NEXT_PUBLIC_RESUME_GDOC_URL || "";

  // Extract doc ID and build URLs
  const docIdMatch = resumeDocUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
  const googleDocId = docIdMatch ? docIdMatch[1] : resumeDocUrl;
  const isValidUrl = !!googleDocId;

  // Google Doc preview URL (for hover popup)
  const previewUrl = isValidUrl
    ? `https://docs.google.com/document/d/${googleDocId}/preview`
    : "";

  // Google Doc export as PDF URL (for download)
  const pdfUrl = isValidUrl
    ? `https://docs.google.com/document/d/${googleDocId}/export?format=pdf`
    : "";

  const handleDownloadClick = () => {
    if (!isValidUrl) {
      alert("Please set NEXT_PUBLIC_RESUME_GDOC_URL in your .env.local file");
      return;
    }
    window.open(pdfUrl, "_blank");
  };


  return (
    <div className="relative flex flex-col w-full min-h-screen pt-56 pb-20" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-bottom justify-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: (i) => ({
                opacity: 1,
                x: 0,
                transition: {
                  delay: i * 0.1,
                  duration: 0.8,
                },
              }),
            }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <SparklesIcon className="w-6 h-6 text-[#4AF626]" />
              <span className="text-[#4AF626] text-lg font-semibold">
                Available for Opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              I'm Vikshith H G
            </h3>

            {/* Dynamic Text Animation */}
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4AF626] to-cyan-500 mb-8">
              <TypeAnimation
                sequence={[
                  "Security Consultant",
                  2000,
                  "DevSecOps Engineer",
                  2000,
                  "Automation Architect",
                  2000,
                  "Platform Develeoper",
                  2000,
                  "Infrastructure Specialist",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: "inline-block" }}
              />
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              With over 6 years of hands-on experience in DevSecOps and cloud infrastructure,
              I've successfully architected and implemented secure, scalable solutions for diverse
              organizations. I'm passionate about automating complex processes, securing cloud
              environments, and building robust platform infrastructures.
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              My expertise spans across containerization, infrastructure as code, CI/CD pipelines,
              and security compliance. I love solving complex technical challenges and sharing
              knowledge with the engineering community.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              {/* Resume Button with Hover Preview */}
              <div className="relative">
                <button
                  onMouseEnter={() => setShowResumePreview(true)}
                  onMouseLeave={() => setShowResumePreview(false)}
                  onClick={handleDownloadClick}
                  className="px-8 py-3 rounded-full border border-[#4AF626]/50 text-[#4AF626] font-semibold hover:border-[#4AF626] hover:bg-[#4AF626]/10 transition-all duration-300"
                >
                  Download Resume
                </button>

                {/* Resume Preview Popup on Hover */}
                <AnimatePresence>
                  {showResumePreview && isValidUrl && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setShowResumePreview(true)}
                      onMouseLeave={() => setShowResumePreview(false)}
                      className="absolute left-0 top-full mt-2 z-50 bg-[#0a0a1a] border border-[#4AF626]/30 rounded-xl shadow-2xl shadow-[#4AF626]/20 overflow-hidden"
                    >
                      <iframe
                        src={previewUrl}
                        width="700"
                        height="600"
                        className="border-0"
                        title="Resume Preview"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#contact"
                className="px-8 py-3 rounded-full border border-[#4AF626]/50 text-[#4AF626] font-semibold hover:border-[#4AF626] hover:bg-[#4AF626]/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Top Technical Skills Box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="w-full"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6"
              >
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-500 text-2xl">⚡</span>
                  Top Technical Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {topTechSkills.map((skill, idx) => (
                    <span key={idx} className="text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - About highlights */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: (i) => ({
                opacity: 1,
                x: 0,
                transition: {
                  delay: i * 0.1 + 0.3,
                  duration: 0.8,
                },
              }),
            }}
            className="flex flex-col items-center lg:items-start gap-6 h-full"
          >
            {/* Spacer to push boxes to bottom */}
            <div className="flex-1" />
            {/* Hire Me Preferences Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#4AF626]/10 to-cyan-500/10 backdrop-blur-sm border border-[#4AF626]/30 rounded-xl p-6 w-full"
            >
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#4AF626] text-2xl">💼</span>
                Hire Me For
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-purple-400 font-semibold">▸</span>
                  <span className="font-semibold text-white">DevSecOps & Security Architecture</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-purple-400 font-semibold">▸</span>
                  <span className="font-semibold text-white">Cloud Infrastructure & Platform Engineering</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-purple-400 font-semibold">▸</span>
                  <span className="font-semibold text-white">CI/CD Pipeline & Automation</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-purple-400 font-semibold">▸</span>
                  <span className="font-semibold text-white">Kubernetes & Container Orchestration</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-purple-400 font-semibold">▸</span>
                  <span className="font-semibold text-white">Infrastructure as Code (Terraform, Ansible)</span>
                </li>
              </ul>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-500/10 to-[#4AF626]/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 w-full"
            >
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-purple-500 text-2xl">🏆</span>
                Certifications
              </h4>
              <ul className="space-y-3">
                {[...certifications].reverse().map((cert, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="text-purple-400 font-semibold">▸</span>
                    <span className="font-semibold text-white">{cert.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfileIntro;
