// Resume Type Definitions

// Project Categories - Single source of truth
export const PROJECT_CATEGORIES = {
  main: ["All", "Professional", "Hobby"] as const,
  sub: ["All", "Platform Development", "DevOps & Automation", "Security", "Observability", "Infrastructure"] as const,
} as const;

// Valid project categories type - derived from categories config
export type ValidProjectCategory = typeof PROJECT_CATEGORIES.sub[number];

// Education Types - Single source of truth (Degree and Foundation only)
export const EDUCATION_TYPES = ["Degree", "Foundation"] as const;

// Valid education type - derived from education types config
export type ValidEducationType = typeof EDUCATION_TYPES[number];

// Export for convenience
export const ProjectCategories = PROJECT_CATEGORIES;

// Type guard to validate categories at compile time
type ValidateCategories<T extends readonly ValidProjectCategory[]> = T;

export interface ResumeHeader {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  location: string;
  summary: string;
}

export interface ResumeSection {
  title: string;
  subtitle?: string;
  content: string;
}

export interface ResumeExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  description: string;
  pin: boolean;
  clients?: {
    name: string;
    projects: {
      id: number;
      title: string;
      description: string;
      image: string;
      technologies: string[];
      categories: ValidProjectCategory[];
      responsibilities: string[];
      achievements: string[];
    }[];
  }[];
}

export interface ResumeEducation {
  id: number;
  type: ValidEducationType;
  degree: string;
  institution: string;
  year: string;
  pin: boolean;
  highlights?: string[];
}

export interface ResumeCertification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  pin: boolean;
  credentialID?: string;
  url?: string;
}

export interface ResumeProject {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  categories: ValidProjectCategory[];
  responsibilities: string[];
  achievements: string[];
  type?: "professional" | "hobby";
}

export interface ResumePDFConfig {
  fileName: string;
  pageSize: string;
  margin: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  colors: {
    primary: string;
    secondary: string;
    text: string;
    lightText: string;
  };
}

export interface SocialLink {
  name: string;
  src: string;
  url: string;
}
