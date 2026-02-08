"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { education, certifications } from "@/constants";
import type { ResumeEducation, ResumeCertification } from "@/constants/types/resume";
import {
  AcademicCapIcon,
  MapPinIcon,
  CalendarIcon,
  TrophyIcon,
  DocumentCheckIcon
} from "@heroicons/react/24/outline";

const Education = () => {
  const [filter, setFilter] = useState<"all" | "Degree" | "Foundation" | "Certification">("all");

  // Sort certifications by date in descending order
  const sortedCertifications = [...certifications].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Transform certifications to match display format
  const certificationsForDisplay = sortedCertifications.map(cert => ({
    ...cert,
    type: "Certification" as const,
    degree: cert.name,
    institution: cert.issuer,
    year: cert.date,
    highlights: [cert.credentialID] as string[]
  }));

  // Combine education and certifications
  const educationData: any[] = [
    ...education,
    ...certificationsForDisplay
  ];

  const filteredEducation = filter === "all"
    ? educationData.sort((a, b) => {
        const dateA = new Date(a.year || a.date).getTime();
        const dateB = new Date(b.year || b.date).getTime();
        return dateB - dateA; // Descending order
      })
    : filter === "Degree"
    ? education.filter(edu => edu.type === "Degree").sort((a, b) => {
        return new Date(b.year).getTime() - new Date(a.year).getTime();
      })
    : filter === "Foundation"
    ? education.filter(edu => edu.type === "Foundation").sort((a, b) => {
        return new Date(b.year).getTime() - new Date(a.year).getTime();
      })
    : certificationsForDisplay;

  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center min-h-screen py-20 px-5 pt-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="text-center mb-12"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
          Education & Certifications
        </h1>
        <p className="text-gray-400 mt-4 max-w-[600px] mx-auto">
          Academic qualifications and professional certifications
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-12 justify-center flex-wrap relative z-20">
        <button
          onClick={() => setFilter("all")}
          className={`px-6 py-2 rounded-full font-bold transition-all cursor-pointer border-2 relative z-20 ${
            filter === "all"
              ? "bg-gradient-to-r from-[#4AF626] to-cyan-500 text-white shadow-lg shadow-[#4AF626]/70 border-[#4AF626]"
              : "border-[#4AF626] text-[#4AF626] hover:bg-[#4AF626] hover:text-black hover:shadow-lg hover:shadow-[#4AF626]/70"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Degree")}
          className={`px-6 py-2 rounded-full font-bold transition-all cursor-pointer border-2 relative z-20 ${
            filter === "Degree"
              ? "bg-gradient-to-r from-[#4AF626] to-cyan-500 text-white shadow-lg shadow-[#4AF626]/70 border-[#4AF626]"
              : "border-[#4AF626] text-[#4AF626] hover:bg-[#4AF626] hover:text-black hover:shadow-lg hover:shadow-[#4AF626]/70"
          }`}
        >
          Degrees
        </button>
        <button
          onClick={() => setFilter("Foundation")}
          className={`px-6 py-2 rounded-full font-bold transition-all cursor-pointer border-2 relative z-20 ${
            filter === "Foundation"
              ? "bg-gradient-to-r from-[#4AF626] to-cyan-500 text-white shadow-lg shadow-[#4AF626]/70 border-[#4AF626]"
              : "border-[#4AF626] text-[#4AF626] hover:bg-[#4AF626] hover:text-black hover:shadow-lg hover:shadow-[#4AF626]/70"
          }`}
        >
          Foundations
        </button>
        <button
          onClick={() => setFilter("Certification")}
          className={`px-6 py-2 rounded-full font-bold transition-all cursor-pointer border-2 relative z-20 ${
            filter === "Certification"
              ? "bg-gradient-to-r from-[#4AF626] to-cyan-500 text-white shadow-lg shadow-[#4AF626]/70 border-[#4AF626]"
              : "border-[#4AF626] text-[#4AF626] hover:bg-[#4AF626] hover:text-black hover:shadow-lg hover:shadow-[#4AF626]/70"
          }`}
        >
          Certifications
        </button>
      </div>

      {/* Education Timeline */}
      <div className="max-w-[1200px] w-full relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#4AF626] via-cyan-500 to-[#4AF626]"></div>

        {[...filteredEducation].map((edu: any, index: number) => (
          <motion.div
            key={`${edu.type}-${edu.id}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromLeft(0.5)}
            className={`relative mb-12 ${
              index % 2 === 0 ? "md:pr-[50%] md:pl-0 pl-8" : "md:pl-[50%] md:pr-0 pl-8"
            }`}
          >
            {/* Timeline Dot */}
            <div className={`absolute -left-3 md:left-1/2 md:-translate-x-1/2 top-0 w-6 h-6 bg-gradient-to-r from-[#4AF626] to-cyan-500 rounded-full border-4 border-[#030014] z-10`}></div>

            {/* Content Card */}
            <div className="border border-[#7042f861] bg-[#0300145e] backdrop-blur-md rounded-lg p-6 hover:border-[#4AF626] transition-all duration-300 hover:shadow-lg hover:shadow-[#4AF626]/20">
              {/* Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                  edu.type === "Degree"
                    ? "bg-[#4AF626]/20 text-gray-200 border border-[#4AF626]/50"
                    : edu.type === "Foundation"
                    ? "bg-blue-900/50 text-blue-300 border border-blue-500/50"
                    : "bg-cyan-900/50 text-cyan-300 border border-cyan-500/50"
                }`}>
                  {edu.type === "Degree" ? (
                    <span className="flex items-center gap-2">
                      <AcademicCapIcon className="w-4 h-4" />
                      Degree
                    </span>
                  ) : edu.type === "Foundation" ? (
                    <span className="flex items-center gap-2">
                      <AcademicCapIcon className="w-4 h-4" />
                      Foundation
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <DocumentCheckIcon className="w-4 h-4" />
                      Certification
                    </span>
                  )}
                </span>
                <span className="text-gray-400 flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  {edu.year || edu.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {edu.degree || edu.name}
              </h3>

              {/* Institution */}
              <div className="flex items-center gap-2 text-gray-300 mb-2">
                <span className="font-semibold">{edu.institution || edu.issuer}</span>
              </div>

              {/* Credential Link for Certifications */}
              {edu.type === "Certification" && edu.url && (
                <div className="mb-4">
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4AF626] hover:text-cyan-400 text-sm font-semibold transition-colors"
                  >
                    View Credential →
                  </a>
                </div>
              )}

              {/* Highlights */}
              {edu.highlights && edu.highlights.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <TrophyIcon className="w-4 h-4" />
                    {edu.type === "Certification" ? "Credential ID" : "Highlights"}:
                  </h4>
                  <ul className="space-y-1">
                    {edu.highlights.map((highlight: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
