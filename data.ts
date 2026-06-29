import type { Interest, ViewId } from "./types";

export const navItems: Array<{ id: ViewId; label: string; icon: string }> = [
  { id: "dashboard", label: "Dashboard", icon: "solar:widget-5-bold-duotone" },
  { id: "advisor", label: "AI Advisor", icon: "solar:magic-stick-3-bold-duotone" },
  { id: "roadmap", label: "Roadmap", icon: "solar:map-arrow-up-bold-duotone" },
  { id: "learning", label: "Learning", icon: "solar:notebook-bookmark-bold-duotone" },
  { id: "opportunities", label: "Opportunities", icon: "solar:case-round-bold-duotone" },
  { id: "community", label: "Community", icon: "solar:chat-round-like-bold-duotone" },
  { id: "portfolio", label: "Portfolio", icon: "solar:user-id-bold-duotone" },
  { id: "startup", label: "Startup Hub", icon: "solar:rocket-2-bold-duotone" },
];

export const recommendations = [
  {
    icon: "solar:verified-check-bold-duotone",
    title: "Verify SQL skill",
    body: "Complete a 12-minute assessment to add proof to your employer profile.",
  },
  {
    icon: "solar:case-round-minimalistic-bold-duotone",
    title: "Apply before Friday",
    body: "Three HealthTech internships match your course, level, and portfolio.",
  },
  {
    icon: "solar:users-group-rounded-bold-duotone",
    title: "Book a mentor",
    body: "A clinical informatics mentor has two free slots this week.",
  },
  {
    icon: "solar:folder-with-files-bold-duotone",
    title: "Publish one project",
    body: "Your readiness score can improve fastest through a documented data project.",
  },
];

export const courses = [
  {
    title: "SQL for Clinical Data",
    category: "data",
    progress: 58,
    lessons: ["Relational models", "Joins", "Patient result queries"],
    certificate: "KRA8T verified",
  },
  {
    title: "Python for Health Analytics",
    category: "data",
    progress: 42,
    lessons: ["Pandas", "Visualization", "Lab result cleaning"],
    certificate: "IBM pathway",
  },
  {
    title: "Medical AI Foundations",
    category: "ai",
    progress: 21,
    lessons: ["Model basics", "Bias", "Clinical safety"],
    certificate: "Microsoft AI",
  },
  {
    title: "Interview Readiness Sprint",
    category: "career",
    progress: 76,
    lessons: ["STAR stories", "Mock interview", "Salary prep"],
    certificate: "Career OS",
  },
] as const;

export const opportunities = [
  {
    type: "Internship",
    mode: "Remote",
    title: "Health Data Analyst Intern",
    company: "MediBridge Africa",
    location: "Lagos, Nigeria",
    deadline: "12 Jul",
    match: 94,
  },
  {
    type: "Scholarship",
    mode: "Remote",
    title: "African AI Builders Scholarship",
    company: "Cloud Skills Network",
    location: "Africa-wide",
    deadline: "18 Jul",
    match: 88,
  },
  {
    type: "Event",
    mode: "Hybrid",
    title: "Campus HealthTech Hackathon",
    company: "KRA8T Labs",
    location: "Enugu + Online",
    deadline: "06 Aug",
    match: 91,
  },
  {
    type: "Job",
    mode: "On-site",
    title: "Graduate Product Analyst",
    company: "CareGrid",
    location: "Accra, Ghana",
    deadline: "22 Aug",
    match: 82,
  },
] as const;

export const advisorTemplates: Record<
  Interest,
  { skills: string[]; careers: string[]; projects: string[]; certifications: string[] }
> = {
  HealthTech: {
    skills: ["Python", "SQL", "Power BI", "Medical AI", "EMR", "FHIR", "Data Analytics"],
    careers: [
      "Health Data Analyst",
      "Clinical Informatics Associate",
      "Medical Product Manager",
      "Biomedical AI Research Assistant",
      "Digital Health Implementation Specialist",
    ],
    projects: [
      "Build a patient lab-result dashboard",
      "Analyze disease trend data from public datasets",
      "Prototype an AI triage assistant with ethical guardrails",
    ],
    certifications: ["Microsoft Power BI Data Analyst", "IBM Data Analyst", "Google Data Analytics"],
  },
  FinTech: {
    skills: ["Excel", "SQL", "Python", "APIs", "Fraud analytics", "Product thinking"],
    careers: ["Product Analyst", "Risk Analyst", "Payment Operations Associate", "FinTech QA Analyst"],
    projects: ["Expense tracker", "Fraud signal dashboard", "Payment reconciliation tool"],
    certifications: ["Google Data Analytics", "AWS Cloud Practitioner", "LinkedIn Product Analytics"],
  },
  EdTech: {
    skills: ["Instructional design", "No-code tools", "Analytics", "Community", "AI tutoring"],
    careers: ["Learning Experience Designer", "EdTech Product Associate", "Community Program Manager"],
    projects: ["Student progress tracker", "AI study planner", "Micro-course landing experience"],
    certifications: ["Coursera Learning Design", "Meta Front-End Foundations", "Google UX Design"],
  },
  AgricTech: {
    skills: ["Data collection", "GIS basics", "Python", "Supply chains", "IoT fundamentals"],
    careers: ["Agric Data Analyst", "Field Product Associate", "Supply Chain Analyst"],
    projects: ["Crop-price tracker", "Farm yield dashboard", "Market access prototype"],
    certifications: ["IBM Data Science", "AWS Cloud Practitioner", "Esri GIS Basics"],
  },
  ClimateTech: {
    skills: ["Climate data", "Python", "GIS", "Impact reporting", "Carbon markets"],
    careers: ["Climate Data Analyst", "Sustainability Product Associate", "Impact Measurement Analyst"],
    projects: ["Flood-risk map", "Carbon footprint estimator", "Clean energy adoption dashboard"],
    certifications: ["Google Data Analytics", "UN CC:e-Learn", "Microsoft Sustainability"],
  },
};

export const roadmap = [
  ["Year 1", ["Digital literacy", "Excel", "Communication", "Career profile setup"]],
  ["Year 2", ["SQL", "Python", "Git basics", "First guided project"]],
  ["Year 3", ["Internship", "Portfolio", "Hackathon", "Mentorship loop"]],
  ["Year 4", ["AI specialization", "Research", "Employer assessments", "Graduate ready"]],
] as const;

export const initialPosts = [
  {
    author: "Amina Yusuf",
    group: "University of Lagos HealthTech",
    body: "Looking for two teammates for a Power BI project on maternal health clinic wait times.",
    stats: "24 likes - 9 comments",
  },
  {
    author: "Daniel Mensah",
    group: "Africa Data Students",
    body: "Just finished the SQL assessment. The joins section is a strong signal for internship screenings.",
    stats: "41 likes - 13 comments",
  },
];

export const projects = [
  {
    title: "Clinic Lab Result Dashboard",
    body: "Power BI dashboard that tracks abnormal result patterns across three clinic branches.",
  },
  {
    title: "FHIR Patient Data Cleaner",
    body: "Python notebook for cleaning and validating health records before analysis.",
  },
];

export const scoreBreakdown = [
  ["Profile", 86],
  ["Skills", 72],
  ["Projects", 68],
  ["Mentorship", 61],
  ["Applications", 74],
  ["Portfolio", 82],
] as const;

export const interests: Interest[] = ["HealthTech", "FinTech", "EdTech", "AgricTech", "ClimateTech"];
