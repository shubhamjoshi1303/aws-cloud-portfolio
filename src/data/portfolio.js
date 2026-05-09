import {
  FiAward,
  FiBox,
  FiCloud,
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiServer,
  FiZap,
  FiActivity,
  FiTerminal,
  FiUploadCloud,
  FiGlobe,
  FiLock,
} from "react-icons/fi";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const rotatingTitles = [
  "Software Engineer",
  "AWS-Certified Cloud Engineer",
  "Backend Systems Developer",
  "ML Project Builder",
];

export const projects = [
  {
    title: "Ecommerce App on AWS",
    description:
      "Production-style storefront deployed with global CDN delivery, managed DNS, SSL, and a cloud-native static hosting path.",
    tech: ["React", "S3", "CloudFront", "Route 53", "ACM"],
    status: "Live",
    topology: ["React", "S3", "CDN", "DNS"],
    signal: "Global edge delivery",
    icon: FiGlobe,
  },
  {
    title: "IMDb Knowledge Graph Recommender",
    description:
      "Graph-based recommendation system using embeddings and large-scale data processing to connect movies, genres, actors, and similarity signals.",
    tech: ["Neo4j", "Node2Vec", "Embeddings", "Dask", "Python"],
    status: "Frontend in progress",
    topology: ["Graph", "Embeddings", "API", "UI"],
    signal: "Similarity engine",
    icon: FiGitBranch,
  },
  {
    title: "CoffeeShop Serverless Backend",
    description:
      "Event-ready backend architecture for orders, menus, and operational visibility using managed serverless primitives.",
    tech: ["API Gateway", "Lambda", "DynamoDB", "CloudWatch"],
    status: "Built",
    topology: ["API", "Lambda", "DB", "Logs"],
    signal: "Serverless backend",
    icon: FiZap,
  },
  {
    title: "Medicare Hub High Availability Architecture",
    description:
      "Resilient multi-tier reference architecture focused on availability, scaling policies, shared storage, and managed relational persistence.",
    tech: ["ALB", "Auto Scaling", "RDS Multi-AZ", "EFS"],
    status: "Designed",
    topology: ["DNS", "ALB", "ASG", "RDS"],
    signal: "Multi-AZ resilience",
    icon: FiActivity,
  },
  {
    title: "AWS Portfolio Website",
    description:
      "Secure cloud portfolio delivery pipeline with private origin access, cache-first delivery, and GitHub Actions deployment automation.",
    tech: ["React", "S3 private bucket", "CloudFront OAC", "GitHub Actions"],
    status: "Live",
    topology: ["GitHub", "CI/CD", "Private S3", "OAC"],
    signal: "Automated deploys",
    icon: FiUploadCloud,
  },
];

export const buildingItems = [
  {
    title: "AI-powered portfolio chatbot using RAG",
    description:
      "Designing a retrieval layer over project, resume, and architecture context with a serverless API path.",
    status: "Prototype",
    progress: 58,
  },
  {
    title: "IMDb recommender frontend using saved embeddings",
    description:
      "Building the product interface around precomputed graph embeddings and movie similarity results.",
    status: "UI build",
    progress: 44,
  },
  {
    title: "Cloud Resume Challenge with Terraform and CI/CD",
    description:
      "Codifying the deployment stack with infrastructure as code, validation, and repeatable delivery.",
    status: "Planning",
    progress: 32,
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "AWS Certified Solutions Architect Associate",
  "AWS Certified AI Practitioner",
];

export const experience = [
  {
    role: "Cloud & Backend Systems Engineer",
    organization: "Independent Engineering Projects",
    duration: "2025 - Present",
    summary:
      "Building AWS-hosted applications, serverless APIs, secure static delivery paths, and production-minded backend systems with deployment automation.",
  },
  {
    role: "Machine Learning Project Builder",
    organization: "Graph Recommender Systems",
    duration: "2024 - Present",
    summary:
      "Developing recommendation workflows with Neo4j, Node2Vec embeddings, Python data processing, and frontend product surfaces.",
  },
  {
    role: "Graduate Computer Science Student",
    organization: "Syracuse University",
    duration: "MS Computer Science",
    summary:
      "Deepening foundations in scalable systems, algorithms, databases, software engineering, and applied machine learning.",
  },
];

export const education = [
  {
    institution: "Syracuse University",
    program: "MS Computer Science",
    summary:
      "Graduate study focused on software engineering foundations, scalable systems, backend development, and applied machine learning.",
  },
];

export const skillGroups = [
  {
    title: "Cloud & DevOps",
    icon: FiCloud,
    skills: ["AWS", "S3", "CloudFront", "Lambda", "DynamoDB", "Terraform", "GitHub Actions"],
  },
  {
    title: "Frontend",
    icon: FiCode,
    skills: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Responsive UI"],
  },
  {
    title: "Backend",
    icon: FiServer,
    skills: ["Node.js", "REST APIs", "API Gateway", "System Design", "Authentication"],
  },
  {
    title: "Data & ML",
    icon: FiDatabase,
    skills: ["Python", "Neo4j", "Embeddings", "Dask", "RAG", "Vector Search"],
  },
  {
    title: "Computer Science Fundamentals",
    icon: FiGitBranch,
    skills: ["Algorithms", "Data Structures", "Distributed Systems", "Databases", "Networking"],
  },
];

export const pipelineSteps = [
  {
    title: "GitHub Commit",
    detail: "main branch update",
    time: "09:42 AM",
    icon: FiGitBranch,
  },
  {
    title: "GitHub Actions CI/CD",
    detail: "lint, build, deploy",
    time: "09:43 AM",
    icon: FiTerminal,
  },
  {
    title: "Private S3 Hosting",
    detail: "origin locked behind OAC",
    time: "09:44 AM",
    icon: FiLock,
  },
  {
    title: "CloudFront Distribution",
    detail: "cache invalidated",
    time: "09:45 AM",
    icon: FiUploadCloud,
  },
  {
    title: "Global Production Delivery",
    detail: "healthy at the edge",
    time: "09:46 AM",
    icon: FiGlobe,
  },
];

export const stats = [
  { value: "3", label: "AWS certifications" },
  { value: "5+", label: "cloud projects" },
  { value: "MS", label: "Computer Science" },
];

export const contactLinks = [
  { label: "GitHub", href: "https://github.com/", icon: FiBox },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: FiAward },
  { label: "Email", href: "mailto:shubham@example.com", icon: FiLayers },
];
