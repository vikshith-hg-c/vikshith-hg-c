"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { education, certifications } from "@/constants";
import {
  AcademicCapIcon,
  MapPinIcon,
  CalendarIcon,
  TrophyIcon,
  DocumentCheckIcon
} from "@heroicons/react/24/outline";

const Education = () => {
  const [filter, setFilter] = useState<"all" | "Degree" | "Foundation">("all");

  // Helper to extract year as number for sorting
  const getYear = (item: any): number => {
    const yearStr = item.year || item.date || "";
    // Extract 4-digit year from string (handles "Apr 2023", "2023", etc.)
    const match = yearStr.match(/\d{4}/);
    return match ? parseInt(match[0], 10) : 0;
  };

  // Check if item is a certification (has 'date' field instead of 'year')
  const isCertification = (item: any): boolean => {
    return 'date' in item && !('type' in item);
  };

  // Sort by year (descending), then by id (descending) if years are same
  // For items with same year, certifications are sorted separately from education
  const sortByYearAndId = (items: any[]) => {
    return [...items].sort((a, b) => {
      const yearA = getYear(a);
      const yearB = getYear(b);
      if (yearB !== yearA) {
        return yearB - yearA; // Year descending
      }
      // Same year - sort by type first (certifications after education), then by id descending
      const isCertA = isCertification(a);
      const isCertB = isCertification(b);
      if (isCertA !== isCertB) {
        return isCertA ? 1 : -1; // Education first, then certifications
      }
      return b.id - a.id; // ID descending if same type and year
    });
  };

  const filteredEducation = filter === "all"
    ? sortByYearAndId([...education, ...certifications])
    : sortByYearAndId([...education].filter(edu => edu.type === filter));

  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-20 px-5"
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.3)}
        className="flex gap-4 mb-12"
      >
        <button
          onClick={() => setFilter("all")}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            filter === "all"
              ? "bg-gradient-to-r from-[#4AF626] to-cyan-500 text-white"
              : "border border-[#4AF626]/50 text-gray-300 hover:border-[#4AF626]"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Degree")}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            filter === "Degree"
              ? "bg-gradient-to-r from-[#4AF626] to-cyan-500 text-white"
              : "border border-[#4AF626]/50 text-gray-300 hover:border-[#4AF626]"
          }`}
        >
          Degrees
        </button>
        <button
          onClick={() => setFilter("Foundation")}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            filter === "Foundation"
              ? "bg-gradient-to-r from-[#4AF626] to-cyan-500 text-white"
              : "border border-[#4AF626]/50 text-gray-300 hover:border-[#4AF626]"
          }`}
        >
          Foundations
        </button>
      </motion.div>

      {/* Education Timeline */}
      <div className="max-w-[1200px] w-full relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#4AF626] via-cyan-500 to-[#4AF626]"></div>

        {filteredEducation.map((edu, index) => {
          // Type guard for ResumeCertification
          const isCertification =
            !('type' in edu) || edu.type === undefined;

          // Type assertion for ResumeCertification
          const cert = isCertification ? (edu as import("@/constants/types/resume").ResumeCertification) : null;
          const educationItem = !isCertification ? (edu as import("@/constants/types/resume").ResumeEducation) : null;

          return (
            <motion.div
              key={`${isCertification ? 'cert' : 'edu'}-${edu.id}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromLeft(0.5)}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-[50%] md:pl-0 pl-8" : "md:pl-[50%] md:pr-0 pl-8"
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute ${
                index % 2 === 0
                  ? "left-0 md:right-[-12px] md:left-auto"
                  : "left-0 md:left-[-12px]"
              } top-0 w-6 h-6 bg-gradient-to-r from-[#4AF626] to-cyan-500 rounded-full border-4 border-[#030014] z-10`}></div>

              {/* Content Card */}
              <div className="border border-[#7042f861] bg-[#0300145e] backdrop-blur-md rounded-lg p-6 hover:border-[#4AF626] transition-all duration-300 hover:shadow-lg hover:shadow-[#4AF626]/20">
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    isCertification
                      ? "bg-purple-900/50 text-purple-300 border border-purple-500/50"
                      : educationItem && educationItem.type === "Degree"
                      ? "bg-[#4AF626]/20 text-gray-200 border border-[#4AF626]/50"
                      : "bg-blue-900/50 text-blue-300 border border-blue-500/50"
                  }`}>
                    {isCertification ? (
                      <span className="flex items-center gap-2">
                        <DocumentCheckIcon className="w-4 h-4" />
                        Certification
                      </span>
                    ) : educationItem && educationItem.type === "Degree" ? (
                      <span className="flex items-center gap-2">
                        <AcademicCapIcon className="w-4 h-4" />
                        Degree
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <AcademicCapIcon className="w-4 h-4" />
                        Foundation
                      </span>
                    )}
                  </span>
                  <span className="text-gray-400 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    {isCertification && cert ? cert.date : educationItem ? educationItem.year : ""}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {isCertification && cert ? cert.name : educationItem ? educationItem.degree : ""}
                </h3>

                {/* Institution/Issuer */}
                <div className="flex items-center gap-2 text-gray-300 mb-2">
                  <span className="font-semibold">{isCertification && cert ? cert.issuer : educationItem ? educationItem.institution : ""}</span>
                </div>

                {/* Highlights/Credential ID */}
                {isCertification && cert ? (
                  <>
                    {cert.credentialID && (
                      <p className="text-xs text-gray-500 mb-2">
                        ID: {cert.credentialID}
                      </p>
                    )}
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4AF626] text-sm hover:underline inline-block"
                      >
                        View Certificate →
                      </a>
                    )}
                  </>
                ) : educationItem && educationItem.highlights && educationItem.highlights.length > 0 ? (
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <TrophyIcon className="w-4 h-4" />
                      Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {educationItem.highlights.map((highlight: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-green-400 mt-0.5">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
