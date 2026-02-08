// Central re-export hub for all resume data and types
// Types are in: constants/types/resume.ts
// Content is in: constants/content/resume.ts

// Re-export types
export type {
  ResumeSection,
  ResumeExperience,
  ResumeCertification,
  ResumeProject,
  ResumePDFConfig,
  SocialLink,
  ResumeEducation as ResumeEducationType,
  ValidProjectCategory,
  ValidEducationType
} from "./types/resume";

// Re-export category definitions (single source of truth)
export {
  PROJECT_CATEGORIES,
  ProjectCategories,
  EDUCATION_TYPES
} from "./types/resume";

// Re-export all content (data & objects)
export {
  ResumeHeader,
  experience,
  education,
  certifications,
  skills,
  topTechSkills,
  Projects,
  HobbyProjects,
  AllProjects,
  Degrees,
  Foundations,
  AllEducation,
  Socials,
  CareerHighlights
} from "./content/resume";

// Alias exports for component compatibility
export { experience as ResumeExperiences, experience as Experience } from "./content/resume";
export { education as ResumeEducation } from "./content/resume";
export { certifications as ResumeCertifications, certifications as Certifications } from "./content/resume";
export { skills as ResumeSkills } from "./content/resume";
export { Projects as ResumeProjList } from "./content/resume";
