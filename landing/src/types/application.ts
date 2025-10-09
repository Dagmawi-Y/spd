export interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  telegramUsername: string;
  phone?: string;
  hasTeam: boolean;
  projectDescription: string;
  projectLink?: string;
  experience: string[];
  aboutYou: string;
  canCommit: boolean;
  hoursPerWeek: string;
  coursesTaken: string[];
  otherCourses?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  demoLink: string;
  cohort: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}