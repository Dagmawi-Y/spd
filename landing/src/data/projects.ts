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
    id: '1',
    title: 'TaskFlow',
    description: 'A modern project management tool with real-time collaboration features, drag-and-drop kanban boards, and team analytics.',
    author: 'Sarah Chen',
    cohort: 'Cohort 1',
    category: 'Web App',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com/example/taskflow',
    liveUrl: 'https://taskflow-demo.com',
    imageUrl: '/api/placeholder/600/400'
  },
  {
    id: '2',
    title: 'CodeReview AI',
    description: 'AI-powered code review assistant that helps developers write better code by analyzing patterns and suggesting improvements.',
    author: 'Marcus Johnson',
    cohort: 'Cohort 1',
    category: 'AI/ML',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'React'],
    githubUrl: 'https://github.com/example/codereview-ai',
    liveUrl: 'https://codereview-ai.com',
    imageUrl: '/api/placeholder/600/400'
  }
];

export const categories = ['All', 'Web App', 'Mobile App', 'AI/ML'];
export const cohorts = ['All', 'Cohort 1'];

// Get featured projects for home page (first 3)
export const getFeaturedProjects = () => allProjects.slice(0, 3);

// Check if there are more projects than featured
export const hasMoreProjects = () => allProjects.length > 3;
