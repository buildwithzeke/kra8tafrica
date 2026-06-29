export type ViewId =
  | "dashboard"
  | "advisor"
  | "roadmap"
  | "learning"
  | "opportunities"
  | "community"
  | "portfolio"
  | "startup";

export type CourseCategory = "all" | "data" | "ai" | "career";
export type OpportunityType = "all" | "Internship" | "Scholarship" | "Event" | "Job";
export type WorkMode = "all" | "Remote" | "Hybrid" | "On-site";

export type Interest = "HealthTech" | "FinTech" | "EdTech" | "AgricTech" | "ClimateTech";

export type Post = {
  author: string;
  group: string;
  body: string;
  stats: string;
};

export type Pitch = {
  idea: string;
  problem: string;
  solution: string;
};
