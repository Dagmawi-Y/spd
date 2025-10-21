export interface Project {
  id: string;
  title: string;
  description: string;
  author: string;
  cohort: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
}

export const allProjects: Project[] = [
   {
    id: '3',
    title: 'E-Self Web App',
    description: 'An online self-learning platform with courses, quizzes, and instructor dashboard, built using Next.js, NestJS, Prisma and PostgreSQL.',
    author: 'Negede Tekleyes & Kalkidan Behailu',
    cohort: 'Cohort 1',
    category: 'Web App',
    technologies: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Tailwind'],
    githubUrl: 'https://github.com/NegedeTekleyes/E-self-Lerning',
    liveUrl: 'https://e-self-lerning-nbv9.vercel.app/',
    imageUrl: '/images/HomePage.png'
  }
];

export const categories = ['All', 'Web App', 'Mobile App', 'AI/ML'];
export const cohorts = ['All', 'Cohort 1'];

// Get featured projects for home page (first 3)
export const getFeaturedProjects = () => allProjects.slice(0, 3);

// Check if there are more projects than featured
export const hasMoreProjects = () => allProjects.length > 3;
