"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/constants";

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages & Scripting",
      skills: skills.programming
    },
    {
      title: "Cloud & Platforms",
      skills: skills.cloudPlatforms
    },
    {
      title: "DevOps & IaC",
      skills: skills.devopsIaC
    },
    {
      title: "Systems & OS",
      skills: skills.systems
    },
    {
      title: "Observability & SIEM",
      skills: skills.observabilitySIEM
    },
    {
      title: "Security & AppSec",
      skills: skills.securityAppsec
    },
    {
      title: "Security Frameworks & Compliance",
      skills: skills.securityFrameworks
    },
    {
      title: "Networking",
      skills: skills.networking
    },
    {
      title: "Governance & Process",
      skills: skills.governanceProcess
    }
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-12 w-full min-h-screen py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 pt-24"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
            Technical Skills
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          Proficient across modern tech stack with expertise in infrastructure, DevSecOps, and Application Security
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="w-full flex justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 flex flex-col items-center"
            >
              {/* Category Title */}
              <h3 className="text-white font-bold text-lg mb-4 group-hover:text-green-400 transition-colors text-center">
                {category.title}
              </h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 justify-center w-full">
                {category.skills.map((skill: string, skillIndex: number) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/40 group-hover:bg-green-500/30 group-hover:border-green-500/60 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
