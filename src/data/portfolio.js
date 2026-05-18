import {
  FiAward,
  FiBox,
  FiCamera,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiServer,
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
    title: "Cloud Resume Challenge",
    description:
      "Serverless AWS resume implementation with cloud hosting, deployment automation, and a production domain path.",
    tech: ["AWS", "S3", "CloudFront", "GitHub Actions", "CI/CD"],
    status: "Live",
    topology: ["GitHub", "CI/CD", "S3", "CDN"],
    signal: "Cloud resume deployment",
    icon: FiCloud,
    links: [
      { label: "GitHub", href: "https://github.com/shubhamjoshi1303/cloud-resume-aws", type: "github" },
      { label: "Demo", href: "https://resume.shubhamjoshi.xyz/", type: "demo" },
    ],
  },
  {
    title: "Ecommerce App on AWS",
    description:
      "Production-style storefront deployed with global CDN delivery, managed DNS, SSL, and a cloud-native static hosting path.",
    tech: ["React", "S3", "CloudFront", "Route 53", "ACM"],
    status: "Live",
    topology: ["React", "S3", "CDN", "DNS"],
    signal: "Global edge delivery",
    icon: FiGlobe,
    links: [
      { label: "GitHub", href: "https://github.com/shubhamjoshi1303/ecommerce-aws", type: "github" },
      { label: "Demo", href: "https://shop.shubhamjoshi.xyz/", type: "demo" },
    ],
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
    links: [
      { label: "Design", href: "https://github.com/shubhamjoshi1303/Imdb-movie-recommender_design", type: "github" },
      { label: "Deploy Repo", href: "https://github.com/shubhamjoshi1303/imdb_recommender_deployment", type: "github" },
      { label: "Demo", href: "https://movie.shubhamjoshi.xyz/", type: "demo" },
    ],
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
    links: [
      { label: "GitHub", href: "https://github.com/shubhamjoshi1303/aws-cloud-portfolio", type: "github" },
    ],
  },
  {
    title: "Electricity Price Forecasting at NP-15",
    description:
      "Developed a hybrid electricity price forecasting pipeline combining SARIMAX and Gradient Boosting to predict CAISO NP-15 prices using solar, wind, and temperature datasets. Achieved a 15-day forecasting MAE of 16.79 by modeling seasonal behavior and refining non-linear residual errors.",
    tech: ["Python", "SARIMAX", "Gradient Boosting", "ML Pipelines"],
    status: "Built",
    topology: ["Data", "SARIMAX", "Residuals", "Forecast"],
    signal: "15-day MAE 16.79",
    icon: FiActivity,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/shubhamjoshi1303/Electricity-Price-Forecasting-at-NP-15-Northern-California-",
        type: "github",
      },
    ],
  },
  {
    title: "Shor's Algorithm Simulation",
    description:
      "Simulated a dynamically sized quantum circuit in IBM Qiskit for probabilistic factorization of small integers via Shor's Algorithm, including modular exponentiation and QFT stages.",
    tech: ["Python", "Qiskit", "Quantum Circuits", "QFT"],
    status: "Built",
    topology: ["Circuit", "Mod Exp", "QFT", "Factors"],
    signal: "Quantum simulation",
    icon: FiCpu,
    links: [
      { label: "GitHub", href: "https://github.com/shubhamjoshi1303/Simulating-Shors-Algorithm", type: "github" },
    ],
  },
  {
    title: "Automated Facial Recognition Attendance System",
    description:
      "Implemented a real-time facial recognition attendance system using OpenCV and MediaPipe, supporting 20+ registered users and automating timestamped CSV logging across 100+ records. Built a user enrollment workflow for dataset updates.",
    tech: ["Python", "OpenCV", "MediaPipe", "CSV Automation"],
    status: "Built",
    topology: ["Enroll", "Detect", "Recognize", "Log"],
    signal: "20+ users tracked",
    icon: FiCamera,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/shubhamjoshi1303/Automated-Facial-Recognition-Attendance-System",
        type: "github",
      },
    ],
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
  {
    title: "AWS Certified Cloud Practitioner",
    href: "https://www.credly.com/badges/76f114b4-38b4-4286-b465-44abd82bef83",
  },
  {
    title: "AWS Certified Solutions Architect Associate",
    href: "https://www.credly.com/badges/a696309b-8afd-48c3-bcfb-fec68d9bacb4",
  },
  {
    title: "AWS Certified AI Practitioner",
    href: "https://www.credly.com/badges/fa38eb81-aacd-4a35-8100-11284d3b3932",
  },
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
  {
    institution: "University of Mumbai",
    program: "BE Computer Engineering",
    summary:
      "Undergraduate engineering foundation in computer systems, software development, databases, algorithms, and core computer engineering principles.",
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
  { label: "GitHub", href: "https://github.com/shubhamjoshi1303", icon: FiBox },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shubhamjoshi2025", icon: FiAward },
  { label: "Email", href: "mailto:shubhamjoshi2026@proton.me", icon: FiLayers },
];

export const resumeLinks = {
  download:
    "https://drive.google.com/file/d/1fmJQYUSRIxbE1_InfI04zPLWMKuUDJdi/view?usp=sharing",
  cloudResume: "https://resume.shubhamjoshi.xyz/",
};
