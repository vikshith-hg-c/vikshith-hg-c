"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { AllProjects as ProjectsData, ProjectCategories } from "@/constants";
import Image from "next/image";

const Projects = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // All projects including professional and hobby
  const allProjects = ProjectsData;

  // Filter by type first, then by category
  let filteredProjects = allProjects;

  if (selectedType !== "All") {
    filteredProjects = filteredProjects.filter(
      (project: any) =>
        selectedType === "Professional" ? !project.type || project.type === "professional" : project.type === "hobby"
    );
  }

  if (selectedCategory !== "All" && filteredProjects.length > 0) {
    filteredProjects = filteredProjects.filter(
      (project: any) => {
        const categories = Array.isArray(project.categories) ? project.categories : [project.category];
        return categories.includes(selectedCategory);
      }
    );
  }

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="text-center mb-12"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
          Projects
        </h1>
        <p className="text-gray-400 mt-4 max-w-[600px]">
          Professional achievements and notable projects from my experience
        </p>
      </motion.div>

      {/* Project Type Filter */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center relative z-20">
        {ProjectCategories.main.map((type: string) => (
          <button
            key={type}
            onClick={() => {
              setSelectedType(type);
              setSelectedCategory("All");
            }}
            className={`px-6 py-2 rounded-full font-bold transition-all cursor-pointer border-2 relative z-20 ${
              selectedType === type
                ? "bg-gradient-to-r from-[#4AF626] to-cyan-500 text-white shadow-lg shadow-[#4AF626]/70 border-[#4AF626]"
                : "border-[#4AF626] text-[#4AF626] hover:bg-[#4AF626] hover:text-black hover:shadow-lg hover:shadow-[#4AF626]/70"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center relative z-20">
        {ProjectCategories.sub.map((category: string) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-bold text-sm cursor-pointer transition-all border-2 relative z-20 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/70 border-purple-500"
                : "border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/70"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 max-w-[1400px]">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project: any, index: number) => (
            <motion.div
              key={`${project.id ?? 'proj'}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative overflow-hidden rounded-lg border border-[#2A0E61] hover:border-[#4AF626] transition-all duration-300 hover:shadow-lg hover:shadow-[#4AF626]/20 group"
            >
            {/* Project Image */}
            <div className="relative w-full h-[200px] overflow-hidden bg-gradient-to-br from-[#4AF626]/10 to-cyan-900/20">
              {project.image && (project.image.startsWith("/icons/") || project.image.startsWith("/projects/")) ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  unoptimized
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                  {(() => {
                    const categories = Array.isArray(project.categories) ? project.categories : [project.category];
                    if (categories.includes("DevOps")) return "⚙️";
                    if (categories.includes("Infrastructure")) return "🏗️";
                    if (categories.includes("Observability")) return "📊";
                    if (categories.includes("Platform Development")) return "🤖";
                    return "🚀";
                  })()}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 bg-[#0300145e] backdrop-blur-md">
              {/* Category Badges */}
              <div className="mb-3 flex flex-wrap gap-2">
                {(Array.isArray(project.categories) ? project.categories : [project.category]).map((cat: string, idx: number) => (
                  <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-xs font-semibold text-purple-300">
                    {cat}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-purple-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs text-gray-500">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-xs font-semibold text-cyan-300 mb-2">Achievements:</h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-xs">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
            ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-400 text-lg">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
