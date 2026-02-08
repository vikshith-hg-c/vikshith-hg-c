// Resume Content - All resume data
import type {
  ResumeHeader as IResumeHeader,
  ResumeExperience,
  ResumeEducation as IResumeEducation,
  ResumeCertification,
  ResumeProject,
  ResumePDFConfig,
  SocialLink
} from "../types/resume";

export const ResumeHeader: IResumeHeader = {
  fullName: "Vikshith Halehalli Ganesh",
  title: "DevSecOps Engineer | Platform Security Developer ",
  email: "vikshithganesh@gmail.com",
  phone: "+91-9449264994",
  website: "www.vikshith.com",
  linkedin: "www.linkedin.com/in/vikshith/",
  location: "Bengaluru, India",
  summary: "Certified application security engineer with 6+ years of experience in building secured infrastructure, platforms and automation for hybrid-cloud and mainframes. Specialized in integrating security tools in pipelines, architecting cloud automation and platform deployment workflows, and designing high availability systems. Expertise in delivering security automation across infrastructure, apps, and CI/CD that standardizes guardrails and eliminates repetitive work."
};

export const experience: ResumeExperience[] = [
  {
    id: 1,
    title: "Student Internship",
    company: "Bharat Sanchar Nigam Limited",
    location: "India",
    period: "Jul 2018 - Aug 2018",
    duration: "2 months",
    pin: false,
    description: "Telecommunication Technologies and FTTH Networks",
    clients: [
      {
        name: "Student Internship",
        projects: [
          {
            id: 1,
            title: "FTTH and GPON Setup",
            description: "Mastered telecommunication technologies with focus on FTTH fiber optic infrastructure and GPON protocols.",
            image: "/projects/bsnl.webp",
            technologies: ["FTTH", "GPON", "Fiber Optics", "PPPoE", "OLT", "ONU"],
            categories: ["Infrastructure"],
            responsibilities: [
              "Studied telecommunication technologies and legacy system limitations",
              "Analyzed core and access network architectures with GPON focus",
              "Learned fiber optic cable installation procedures",
              "Configured OLTs and ONUs based on industry standards",
              "Troubleshot real-time network problems"
            ],
            achievements: [
              "Mastered FTTH and fiber optic technologies",
              "Gained practical GPON configuration experience",
              "Developed real-time network troubleshooting skills"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Student Internship",
    company: "Bharat Electronics Limited",
    location: "India",
    period: "Jan 2019 - Feb 2019",
    duration: "2 months",
    pin: false,
    description: "Mastered Phase-Locked Loop (PLL) technology and embedded systems",
    clients: [
      {
        name: "Student Internship",
        projects: [
          {
            id: 1,
            title: "PLL Technology for Missile Guidance Systems",
            description: "Designed master-slave communication architecture for PIC32 microcontrollers and optimized PLL locking behavior for radar systems.",
            image: "/projects/pll.png",
            technologies: ["PLL", "PIC32", "I²C", "VCO", "Embedded Systems", "Radar Systems"],
            categories: ["Infrastructure"],
            responsibilities: [
              "Analyzed requirements for Phase-Locked Loop technology in missile guidance",
              "Designed master-slave communication for PIC32 microcontrollers using I²C",
              "Integrated hardware and firmware components",
              "Created simulation program for PLL locking optimization",
              "Tuned VCO parameters for radar system reliability"
            ],
            achievements: [
              "Successfully designed I²C communication architecture",
              "Optimized PLL performance for missile guidance systems",
              "Ensured reliable operation in radar applications"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Internship",
    company: "Jetking Infotrain",
    location: "India",
    period: "Aug 2019 - Jun 2020",
    duration: "11 months",
    pin: false,
    description: "Enterprise Network and Infrastructure Lab Setup",
    clients: [
      {
        name: "Jetking",
        projects: [
          {
            id: 1,
            title: "Enterprise Lab Infrastructure for Training",
            description: "Deployed comprehensive lab infrastructure for networking, Active Directory, and server administration courses.",
            image: "/projects/jetking-adds.png",
            technologies: ["Windows Server", "ADDS", "Exchange Server", "CCNA", "Red Hat", "WSUS", "WDS", "PowerShell"],
            categories: ["Infrastructure", "Security", "Platform Development"],
            responsibilities: [
              "Provisioned Windows Server environments with ADDS, ADFS,  DHCP, and DNS, iSCSI configurations",
              "Established Red Hat server environments with network and FTP servers setups",
              "Created Exchange Server environments with user, mail management with policies",
              "Configured CCNA routing and switching labs with VLANs and dynamic protocols like BGP, STP, EIGRP, OSPF",
              "Deployed WSUS, WDS, and VPN configurations for server management",
              "Implemented security measures including SELinux, ACLs, and firewalls",
              "Developed PowerShell and shell scripting labs for automation training"
            ],
            achievements: [
              "Successfully deployed comprehensive multi-platform lab infrastructure",
              "Enabled hands-on training for hundreds of students",
              "Implemented enterprise-grade security and automation labs"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Associate Engineer",
    company: "Unisys",
    location: "India",
    period: "Jun 2020 - May 2022",
    duration: "2 years",
    pin: true,
    description: "Devops - Cloud infrastructure automation, mainframe operations, and Kubernetes administration.",
    clients: [
      {
        name: "Internal - Unisys MCP and Control-M Operations",
        projects: [
          {
            id: 1,
            title: "Mainframe Operations",
            description: "Managed and scheduled daily, weekly, monthly, and yearly jobs on mainframe with proactive failure monitoring.",
            image: "/projects/mcp.webp",
            technologies: ["Control-M", "MCP Mainframe", "Job Scheduling", "Operations"],
            categories: ["Infrastructure", "DevOps & Automation"],
            responsibilities: [
              "Managed and scheduled daily, weekly, monthly, and yearly mainframe jobs",
              "Monitored job failures and implemented corrective actions",
              "Followed operational procedures for system maintenance"
            ],
            achievements: [
              "Ensured reliable job execution across all schedules",
              "Maintained operational stability through proactive monitoring"
            ]
          }
        ]
      },
      {
        name: "Digistics & Ryder - OS2200 and IBM AS400 Operations",
        projects: [
          {
            id: 2,
            title: "Mainframe Backup & Recovery Operations",
            description: "Managed backup systems and disaster recovery operations for OS2200 and IBM AS400 mainframes.",
            image: "/projects/as400.png",
            technologies: ["OS2200", "IBM AS400", "MIMIX", "Tape Library", "Backup Systems"],
            categories: ["Infrastructure", "DevOps & Automation"],
            responsibilities: [
              "Managed daily and weekly backup operations on tape library",
              "Followed SOP for resource deadlock incidents",
              "Handled MIMIX replication alerts and disaster recovery procedures",
              "Provided infrastructure operational support"
            ],
            achievements: [
              "Ensured zero-downtime backup operations",
              "Maintained high availability through MIMIX replication",
              "Rapid incident response following established procedures"
            ]
          }
        ]
      },
      {
        name: "Globelife - Control-M Migration",
        projects: [
          {
            id: 3,
            title: "Control-M AWS Infrastructure & Job Pipeline",
            description: "Designed AWS infrastructure for Control-M deployment and implemented job pipelines for LNL mainframes.",
            image: "/projects/control-m.webp",
            technologies: ["AWS", "Control-M", "Terraform", "LNL Mainframe", "Infrastructure Design"],
            categories: ["Infrastructure", "DevOps & Automation"],
            responsibilities: [
              "Designed and implemented AWS infrastructure for Control-M server and enterprise manager",
              "Implemented job pipeline on Control-M for LNL mainframes",
              "Documented escalation policies for onshore team email support",
              "Configured enterprise manager deployment architecture"
            ],
            achievements: [
              "Successfully migrated Control-M to AWS infrastructure",
              "Implemented efficient mainframe job pipelines",
              "Established clear escalation procedures for operations"
            ]
          }
        ]
      },
      {
        name: "VicRoads - Australian Department of Transport",
        projects: [
          {
            id: 4,
            title: "Unisys Cloud Platform Development & AI-Ops",
            description: "Built cloud automation platform with Ceph storage, Kubernetes operations, and AI-Ops capabilities for transport infrastructure.",
            image: "/projects/k8s.webp",
            technologies: ["Bash", "Ceph", "Kubernetes", "MinIO", "Grafana", "ELK", "Teams", "ILM"],
            categories: ["Platform Development", "Infrastructure", "Security", "Observability"],
            responsibilities: [
              "Developed Bash automation for OSD cleanup in Ceph storage nodes and designed ILM policies for dev, test, and prod environments, reducing weekly maintenance overhead by 90%.",
              "Authored design document for Unisys Cloud AI-Ops platform ensuring operational readiness and trained teams on cloud-native operations, containerization, and orchestration.",
              "Implemented backup strategies for Kubernetes clusters and integrated Grafana Alert Manager with Microsoft Teams for real-time system failure notifications.",
              "Enhanced observability across the platform with centralized logging, monitoring dashboards, and automated alerting for proactive incident management."
            ],
            achievements: [
              "Reduced storage maintenance overhead by 90% through automation",
              "Successfully implemented enterprise-grade ILM policies",
              "Trained operations teams on cloud-native technologies",
              "Improved Kubernetes backup and disaster recovery capabilities",
              "Enhanced observability with integrated alerting system using grafana and Teams"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Site Reliability Engineer",
    company: "AngelOne Limited",
    location: "Mumbai, India",
    period: "Sep 2022 - Jun 2024",
    duration: "1 year 9 months",
    pin: true,
    description: "SRE leading observability and NOC operations for Indian fintech serving 30M traders and investors.",
    clients: [
      {
        name: "AngelOne Limited",
        projects: [
          {
            id: 1,
            title: "Observability Automation & Platform Reliability",
            description: "Designed and maintained observability infrastructure for fintech platform serving 10M traders, integrating products with logging, monitoring, APM, and creating SLI/SLO frameworks for incident response automation.",
            image: "/projects/observability.webp",
            technologies: ["Prometheus", "Grafana", "ELK", "Golang", "Kubernetes", "PagerDuty", "SIEM", "GitHub Actions", "React", "ECS"],
            categories: ["Observability", "Infrastructure", "Security"],
            responsibilities: [
              "Conducted detailed RCA for 300+ production incidents and implemented emergency automations for stalled applications during critical business hours, resolving price feed issues impacting 10 million traders and investors.",
              "Successfully migrated legacy internal SIEM system from database-based infrastructure monitoring to Infrastructure-as-Code (IaC) approach using Prometheus, and created CI/CD pipelines for React-based SIEM admin UI hosted on ECS using GitHub Actions.",
              "Led team of 4 SREs in designing and implementing escalation policies for alerting, while automating preflight checks in Golang for APIs serving various fintech microservices.",
              "Onboarded microservices to observability backend and supported developers in 12-factor application modernization, resolving firewall and network issues across multiple stages and zones.",
              "Designed metrics dashboards for microservices on critical KPIs, developed SOPs and automation to improve MTBF, and organized tech talks addressing 12 engineers on DevSecOps, containerization, and Kubernetes."
            ],
            achievements: [
              "Resolved critical price feed issues impacting 10M users through emergency automations during peak trading hours.",
              "Achieved significant MTTR and MTTD improvements through metrics dashboards, SLO-based alerting, and proactive incident management SOPs.",
              "Successfully migrated SIEM to IaC approach and led team of 4 SREs in designing enterprise-grade observability architecture."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "DevOps Consultant",
    company: "E-coders",
    location: "India",
    period: "Jul 2024 - Jan 2025",
    duration: "7 months",
    pin: true,
    description: "DevOps Consultant - Designed CI/CD pipelines and infrastructure automation for microservices deployment.",
    clients: [
      {
        name: "bonmillette.com - Snack Store",
        projects: [
          {
            id: 1,
            title: "DevOps Pipeline for 3 tier app",
            description: "Designed CI/CD pipelines and infrastructure automation for zero-touch microservices deployment on VPS.",
            image: "/projects/bonmillette.webp",
            technologies: ["GitHub Actions", "Terraform", "Nginx", "AWS S3", "IAM", "React", "Express"],
            categories: ["DevOps & Automation", "Platform Development"],
            responsibilities: [
              "Designed branching strategies for microservices and pipeline architecture to host on VPS.",
              "Developed GitHub Actions pipeline to build and deploy React and Express application with zero-touch deployment.",
              "Developed pipeline for IaC-based Nginx web server deployment, hosting frontend and backend, securing APIs with rate limiting and CORS handling.",
              "Developed Terraform-based Infrastructure as Code (IaC) to provision AWS S3 object storage and configured IAM role for session-based storage authentication."
            ],
            achievements: [
              "Enabled zero-touch deployments for React and Express microservices",
              "Improved deployment reliability with automated CI/CD pipelines",
              "Enhanced API security with rate limiting and CORS handling",
              "Implemented secure AWS S3 storage with IAM session-based authentication"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Platform Developer",
    company: "Agilisium Consulting",
    location: "India",
    period: "Feb 2025 - Present",
    duration: "Present",
    pin: true,
    description: "Platform automation and cloud infrastructure for healthcare clients.",
    clients: [
      {
        name: "Genmab (Healthcare)",
        projects: [
           {
            id: 1,
            title: "Gencloud - Account Bootstrap & Governance",
            description: "Standardized account and environment bootstrap with governed baselines, cutting provisioning from days to hours.",
            image: "/projects/gencloud.png",
            technologies: ["AWS", "Azure", "Gitlab", "trivy", "checkmarks", "Governance", "Policy-as-Code"],
            categories: ["Platform Development", "Infrastructure", "Security"],
            responsibilities: [
              "Standardized account and environment bootstrap with governed baselines, cutting provisioning from days to hours and eliminating nearly all manual setup while improving consistency and auditability",
              "Defined scalable account structure and lifecycle triggers that enforce isolation and tagging, reducing cross-account risk, simplifying operations, and enabling predictable growth across organizational units",
              "Decommissioned redundant environments and rationalized resources to reduce operational noise and spend, improving platform hygiene, security posture, and clarity for stakeholders during audits and escalations",
              "Documented key decisions through concise ADRs and RFCs, aligning engineering, security, and operations, lowering integration friction, and accelerating adoption of platform capabilities across teams"
            ],
            achievements: [
              "Reduced provisioning time from days to hours",
              "Eliminated nearly all manual setup with governed baselines",
              "Improved security posture through environment rationalization",
              "Accelerated platform adoption through ADR/RFC documentation"
            ]
          },
          {
            id: 2,
            title: "Platform Automation",
            description: "Built event-driven automation converting ticket queues into self-service workflows, eliminating repetitive IaC tasks.",
            image: "/projects/platform-automation.png",
            technologies: ["Terraform", "AWS", "CI/CD",  "Event-Driven Architecture"],
            categories: ["Platform Development", "DevOps & Automation"],
            responsibilities: [
              "Built event-driven automation that converted ticket queues into self-service workflows, eliminating 99% repetitive IaC tasks and delivering environments with consistent guardrails",
              "Consolidated infrastructure definitions into a unified module set, reducing configuration drift, easing promotions and rollbacks, raising deployment success, and lowering maintenance overhead",
              "Improved pipeline reliability with preflight checks, scoped runner execution, and orchestration, reducing failed runs, shortening feedback loops, and stabilizing throughput for developers during peak demand",
              "Embedded policy and security checks into automated flows, making defaults ship by design, reducing exposure and audit rework, and preserving release speed and developer momentum"
            ],
            achievements: [
              "Eliminated 99% of repetitive IaC tasks through self-service workflows",
              "Unified infrastructure modules reducing configuration drift",
              "Improved pipeline reliability with preflight checks and orchestration",
              "Embedded security-by-default into deployment workflows"
            ]
          }

        ]
      }
    ]
  }


]

// Hobby Projects
export const HobbyProjects: ResumeProject[] = [
  {
    id: 1,
    title: "Infrastructure-as-Code for Homelab",
    description: "Built a complete homelab infrastructure using Terraform and Ansible for learning cloud-native technologies.",
    image: "/projects/homelab.png",
    technologies: ["Terraform", "Ansible", "Kubernetes", "Docker", "Proxmox", "Ubuntu"],
    categories: ["Infrastructure"],
    type: "hobby",
    responsibilities: [
      "Designed and implemented lab architecture",
      "Automated VM provisioning with Terraform",
      "Configured infrastructure with Ansible",
      "Deployed Kubernetes cluster"
    ],
    achievements: [
      "Automated entire lab infrastructure",
      "Learned IaC best practices",
      "Built multi-node Kubernetes cluster"
    ]
  },
  {
    id: 2,
    title: "Container Security & Scanning",
    description: "Developed container security scanning pipeline with vulnerability detection and reporting.",
    image: "/projects/container-security.png",
    technologies: ["Docker", "Trivy", "SAST", "GitHub Actions", "Python"],
    categories: ["DevOps & Automation"],
    type: "hobby",
    responsibilities: [
      "Implemented container scanning pipeline",
      "Built vulnerability detection system",
      "Created automated reporting",
      "Integrated with GitHub Actions"
    ],
    achievements: [
      "Implemented automated scanning",
      "Built vulnerability reports",
      "Integrated with CI/CD pipeline"
    ]
  },
  {
    id: 3,
    title: "Kubernetes Distribution (K3s) Setup",
    description: "Deployed and optimized lightweight Kubernetes cluster using K3s for edge computing scenarios.",
    image: "/projects/k3s.png",
    technologies: ["K3s", "Kubernetes", "Helm", "Linux", "Networking"],
    categories: ["Infrastructure"],
    type: "hobby",
    responsibilities: [
      "Deployed K3s cluster",
      "Optimized cluster performance",
      "Configured networking and storage",
      "Built observability stack"
    ],
    achievements: [
      "Deployed lightweight K8s cluster",
      "Optimized for resource constraints",
      "Built monitoring and logging stack"
    ]
  }
];

export const education: IResumeEducation[] = [
  {
    id: 1,
    type: "Foundation",
    degree: "Computer Science",
    institution: "Excellent PU College",
    year: "Aug 2015",
    pin: false,
    highlights: [
      "PCMC (Physics, Chemistry, Mathematics, Computer Science)",
      "Avg: 89.6/100"
    ]
  },
  {
    id: 2,
    type: "Degree",
    degree: "Bachelor of Engineering in Electronics and Communication",
    institution: "Acharya Institute of Technology, Visvesvaraya Technological University",
    year: "Aug 2019",
    pin: true,
    highlights: [
      "CGPA: 7/10"
    ]
  },
  {
    id: 3,
    type: "Foundation",
    degree: "Masters in Network Administration",
    institution: "Jetking Infotrain - Rajajinagar Learning Centre",
    year: "Dec 2022",
    pin: false,
    highlights: [
      "Enterprise Network and Infrastructure Management",
      "Grade: Distinction (80%-89%)"
    ]
  },
  {
    id: 4,
    type: "Foundation",
    degree: "SRE and Devops Engineering",
    institution: "Interview Kickstart",
    year: "Feb 2024",
    pin: false,
    highlights: [
      "DSA, System Design, and problem solving for SRE and DevOps roles",
      "Site Reliability Engineering and DevOps Practices",
    ]
  }
];

// Filter education by type - similar to Projects filtering
export const Degrees: IResumeEducation[] = education.filter(edu => edu.type === "Degree");
export const Foundations: IResumeEducation[] = education.filter(edu => edu.type === "Foundation");
export const AllEducation: IResumeEducation[] = education;

export const certifications: ResumeCertification[] = [
  {
    id: 1,
    name: "Jetking Certified IoT Specialist",
    issuer: "Jetking Infotrain",
    date: "Mar 2023",
    pin: true,
    credentialID: "2122-002096",
    url: "https://drive.google.com/file/d/1xeRHgimf9xA3HBiRp2sZ2-EOmEf4G631/view"
  },
  {
    id: 2,
    name: "Jetking Certified Ethical Hacking Professional",
    issuer: "Jetking Infotrain",
    date: "Mar 2023",
    pin: true,
    credentialID: "2122-002104",
    url: "https://drive.google.com/file/d/1CdRRlf0ZvRYtR5GSgD-nI2SADu0mEYQe/view"
  },
  {
    id: 3,
    name: "Certified AWS Solutions Associate",
    issuer: "Jetking Infotrain",
    date: "Mar 2023",
    pin: true,
    credentialID: "2122-002103",
    url: "https://drive.google.com/file/d/1Afm9YD6pBnTp-64fMkNUkIHSHTzqrjkw/view"
  },
  {
    id: 4,
    name: "Professional Certificate Program in Blockchain",
    issuer: "Indian Institute of Technology Kanpur",
    date: "May 2023",
    pin: true,
    credentialID: "76924086",
    url: "https://success.simplilearn.com/9e7576db-da0b-4322-93fb-2f2edf8b0e1d"
  },
  {
    id: 5,
    name: "IBM Z Concepts",
    issuer: "IBM",
    date: "Aug 2024",
    pin: true,
    credentialID: "",
    url: "https://www.credly.com/badges/f6edcfaf-a9c6-4852-98d2-d63ef6a79d45/linked_in_profile"
  },
  {
    id: 6,
    name: "EC Council Certified DevSecOps Engineer",
    issuer: "EC Council",
    date: "Dec 2024",
    pin: true,
    credentialID: "ECC7169054238",
    url: "https://drive.google.com/file/d/1w2uyOhCYXt6bpXzUcCp3Rclpw5Lo4evy/view?usp=sharing"
  }
];

export const skills = {
  programming: ["Go (Golang)", "Bash", "HCL", "YAML", "Groovy", "Python", "Typescript"],
  cloudPlatforms: ["AWS", "Azure", "K8’s", "Docker", "vSphere/Hyper-V", "Z/os", "Control-M", "ManageIQ"],
  devopsIaC: ["Opentofu/Terraform", "Ansible", "GitHub/Gitlab CI", "Jfrog", "Jenkins", "Helm", "AgroCD"],
  systems: ["Linux",  "NixOS", "Windows Server 2012/2016", "Exchange Server", "Cisco IOS", "macOS"],
  observabilitySIEM: ["Grafana", "Prometheus",  "ELK", "Splunk", "OTEL", "PagerDuty", "Alertmanager"],
  securityAppsec: ["SAST/DAST/IAST/RASP", "Threatmodeler", "Checkmarx", "CodeQL", "Burp Suite"],
  securityFrameworks: ["NIST", "SOC2", "ISO 27001", "OWASP Top 10", "GDPR", "HIPPA"],
  networking: ["firewall management", "CCNA R&S",  "IPv4 subnetting", "VPN/WAN"],
  governanceProcess: ["ADR/RFC authoring", "change management", "ITIL", "SLI/SLO Design"]
};
// Top tech skills - first skill from each category
export const topTechSkills: string[] = Object.values(skills).map((category) => category[0]);
// Extract all projects from experience data (sorted by experience ID desc, then project ID desc)
export const Projects: ResumeProject[] = [...experience]
  .sort((a, b) => b.id - a.id) // Sort experience by ID descending (most recent first)
  .flatMap((exp) =>
    (exp.clients || []).flatMap((client) =>
      (client.projects || [])
        .sort((a, b) => b.id - a.id) // Sort projects by ID descending within each experience
        .map((project) => ({
          ...project,
          experienceId: exp.id, // Include experience ID for reference
          type: "professional"
        }))
    )
  );

// Combined projects list for display (Professional + Hobby)
// HobbyProjects is the main source of hobby project data
export const AllProjects: ResumeProject[] = [...Projects, ...HobbyProjects];

// ProjectCategories is now imported from constants/types/resume.ts
// It serves as the single source of truth for all category definitions

// Career Highlights - For Resume PDF Only
export const CareerHighlights: string[] = [
  "6+ years of experience in application & infrastructure security with expertise in hybrid-cloud and mainframe environments",
  "Architected and deployed event-driven automation platforms that eliminated 99% of repetitive infrastructure tasks",
  "Led SRE teams and designed observability infrastructure serving 10M+ traders with critical price feed reliability",
  "Integrated security tools across CI/CD pipelines and cloud infrastructure with policy enforcement and governance",
  "Specialized in DevSecOps, platform automation, and building secured infrastructure with compliance frameworks"
];

export const Socials: SocialLink[] = [
    {
        name: "LinkedIn",
        src: "/icons/linkedin.gif",
        url: "https://www.linkedin.com/in/vikshith/"
    },
    {
        name: "GitHub",
        src: "/icons/github.gif",
        url: "https://github.com/vikshith-hg-c"
    },
];
