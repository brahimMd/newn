
export interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  iconBgClass?: string; // For specific icon background like in demo's skills section titles
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgClass?: string; // For icon background styling if needed
  subtitle?: string; // Optional subtitle like "X Developers" in demo
}

export interface TimelineEvent {
  date: string;
  title:string;
  institution: string;
  description: string;
  location?: string;
}

export enum SkillType {
  Coding = "Coding", // May not be used if we adopt demo's skill types
  Language = "Language",
  Knowledge = "Knowledge", // For lists like "Soft Skills" or "Knowledges"
  Certification = "Certification", // Can be part of Knowledge or separate
  Professional = "Professional", // For circular progress skills
  Tool = "Tool" // For tool stack
}

export interface Skill {
  name: string;
  level?: number; // Percentage for progress bars/circles (0-100)
  type: SkillType;
  description?: string; // For certifications or language level description
  icon?: React.ReactNode; // For tool stack icons
  levelDescription?: string; // E.g. "Native", "Advanced" for languages
}

export interface CircularSkillItem {
  name: string;
  level: number; // 0-100
}

export interface LanguageSkillDetail {
  name: string;
  level: number; // 0-10 (for dot representation)
  levelDescription: string; // e.g., "Native", "Advanced"
  flagIcon?: React.ReactNode; // Placeholder for flag
}


export enum PortfolioCategory {
  ALL = "All",
  BRANDING = "Branding",
  DESIGN = "Design",
  // Fix: Uncomment DIGITAL_MARKETING as it is used in WorksSection.tsx
  DIGITAL_MARKETING = "Digital Marketing",
  WEBSITE = "Website",
  SOFTWARE = "Software",
  APP = "App",
  CERTIFICATION = "Certification", // Added for certifications
}

export interface PortfolioItem { // This type can now be used for Certifications as well
  id: string;
  title: string;
  category: PortfolioCategory; 
  imageUrl: string;
  description?: string;
  date?: string;
  client?: string;
  technologies?: string[];
}

export interface ExtracurricularEvent extends TimelineEvent {}

export interface FunFactItem {
  count: string; // e.g., "8+", "96"
  label: string;
  icon?: React.ReactNode; // Optional icon
}

export interface ToolStackItem {
  name: string;
  proficiency: number; // 0-100
  icon: React.ReactNode;
}
