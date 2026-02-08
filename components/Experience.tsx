"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { Experience as ExperienceData } from "@/constants";
import type { ResumeExperience } from "@/constants";
import { BriefcaseIcon, MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center min-h-screen py-20 px-5 pt-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.3)}
        className="text-center mb-16"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
          Professional Experience
        </h1>
        <p className="text-gray-400 mt-4 max-w-[600px] mx-auto">
          My journey through various roles in DevSecOps, SRE, and Backend Development
        </p>
      </motion.div>

      <div className="max-w-[1200px] w-full">
        {[...ExperienceData].reverse().map((exp: ResumeExperience, index: number) => (
          <motion.div
            key={exp.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)}
            className="mb-8"
          >
            <div className="relative border border-[#7042f861] bg-[#0300145e] backdrop-blur-md rounded-lg p-6 hover:border-[#4AF626] transition-all duration-300 hover:shadow-lg hover:shadow-[#4AF626]/20">
              {/* Company Badge */}
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-[#4AF626] to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                {exp.company}
              </div>

              {/* Header */}
              <div className="mt-2">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                  <div className="flex items-center gap-2">
                    <BriefcaseIcon className="w-5 h-5 text-[#4AF626]" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5 text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-green-400" />
                    <span>{exp.period} ({exp.duration})</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 italic">
                  {exp.description}
                </p>
              </div>
              {/* Clients/Projects Hierarchy */}
              {exp.clients && exp.clients.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Clients & Projects:
                  </h4>
                  <div className="space-y-6">
                    {exp.clients.map((client: any, clientIdx: number) => (
                      <div key={clientIdx} className="border-l-2 border-[#4AF626] pl-4">
                        <h5 className="text-md font-semibold text-[#4AF626] mb-2">
                          {client.name}
                        </h5>
                        <ul className="space-y-3">
                          {(client.projects || []).map((project: any, projIdx: number) => (
                            <li key={projIdx} className="flex flex-col gap-1 text-gray-300 text-sm">
                              <div className="flex items-start gap-2">
                                <span className="text-cyan-400 mt-0.5">◆</span>
                                <span className="font-semibold">{project.title}</span>
                              </div>
                              <p className="ml-5 text-gray-400 text-xs italic">
                                {project.description}
                              </p>
                              {project.technologies && project.technologies.length > 0 && (
                                <div className="ml-5 flex flex-wrap gap-2">
                                  {project.technologies.slice(0, 10).map((tech: string, idx: number) => (
                                    <span key={idx} className="text-[10px] bg-[#4AF626]/10 text-[#4AF626] px-2 py-0.5 rounded">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
                              {project.responsibilities && project.responsibilities.length > 0 && (
                                <div className="ml-5 mt-2">
                                  <p className="text-sm font-semibold text-cyan-400 mb-4 ">Responsibilities:</p>
                                  <ul className="space-y-1">
                                    {project.responsibilities.slice(0, 3).map((resp: string, idx: number) => (
                                      <li key={idx} className="text-sm text-gray-300 flex items-start gap-1">
                                        <span className="text-cyan-300 mt-0.5">▹</span>
                                        <span>{resp}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        ))}
      </div>

      {/* Career Stats */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.5)}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1000px] w-full"
      >
        <div className="text-center p-6 border border-[#4AF626]/30 bg-[#0300145e] rounded-lg">
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4AF626] to-cyan-500">
            6+
          </div>
          <div className="text-gray-400 mt-2">Years Experience</div>
        </div>
        <div className="text-center p-6 border border-[#4AF626]/30 bg-[#0300145e] rounded-lg">
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4AF626] to-cyan-500">
            10+
          </div>
          <div className="text-gray-400 mt-2">Projects</div>
        </div>
        <div className="text-center p-6 border border-[#4AF626]/30 bg-[#0300145e] rounded-lg">
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4AF626] to-cyan-500">
            99.9%
          </div>
          <div className="text-gray-400 mt-2">Uptime</div>
        </div>
        <div className="text-center p-6 border border-[#4AF626]/30 bg-[#0300145e] rounded-lg">
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4AF626] to-cyan-500">
            40+
          </div>
          <div className="text-gray-400 mt-2">Technologies</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
