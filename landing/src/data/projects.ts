export interface Project {
  id: string;
  title: string;
  briefDescription:string;
  description: string;
  author: string[];
  cohort: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string[];
  highlights?: string[];
}

export const allProjects: Project[] = [
  {
    id: '1',
    title: 'EthioLingo',
    description: 'EthioLingo is a local Ethiopian language learning app that helps users learn differnt local languages.',
    briefDescription: `
      EthioLingo is a comprehensive language learning mobile application designed to teach local Ethiopian languages such as Amharic, Afan Oromo, and Tigrigna. 
      It provides interactive lessons, quizzes, and exercises to ensure an engaging learning experience. Users can set personalized learning goals, track their progress over time, and continue learning even without internet connectivity, thanks to offline-first functionality. 
      Currently in Phase 2 production, the app features a modern UI/UX, smooth horizontal carousel animations for lessons and screenshots, and seamless data syncing when online. 
      EthioLingo aims to make local language learning accessible, effective, and enjoyable for everyone in Ethiopia and beyond.
  `,
    author: ['Mieraf Abebe', 'Hailemeskel Getaneh', 'Yohannes'],
    cohort: 'Cohort 1',
    category: 'Mobile App',
    technologies: ['React Native', 'Node.js', 'Express', 'MySQL', 'SQLite', 'TailwindCSS'],
    githubUrl: 'https://github.com/Hailemeskel-Getaneh/EthioLingo',
    liveUrl: 'https://ethiolingo.com',
    imageUrl: [
      '/images/1.jpg',
      '/images/2.png',
      '/images/register.jpg',
      '/images/login.jpg',
      '/images/forgetpass.jpg',
      '/images/resetpass.jpg', 
      '/images/verify.jpg',
      '/images/complate.jpg',
      '/images/languageSelection.jpg',
      '/images/timechoose.png',
      '/images/onboarding.jpg',
      '/images/home.png', 
      '/images/drower.png',
      '/images/lessons.png',
      '/images/writingpage.png',
      '/images/speakingpage.png',
      '/images/readingpage.png',
      '/images/listeningpage.png', 
      '/images/profile.png', 
      '/images/editprofile.png', 
    ],
    highlights: [
      'Compact, mobile-first UI with smooth horizontal linear motion.',
      'Track users’ learning progress per language',
      'Offline-first experience with seamless syncing.',
      'Supports multiple local languages: Amharic, Afan Oromo, Tigrigna.',
      'Store vocabulary, progress, and audio locally',
      'Gamified lessons: quizzes, matching words, fill-in-the-blank exercises',
    ],
  },
  {
    id: '2',
    title: 'CodeReview AI',
    briefDescription:'',
    description: 'AI-powered code review assistant that helps developers write better code by analyzing patterns and suggesting improvements.',
    author: ['Marcus Johnson'],
    cohort: 'Cohort 1',
    category: 'AI/ML',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'React'],
    githubUrl: 'https://github.com/example/codereview-ai',
    liveUrl: 'https://codereview-ai.com',
    imageUrl: ['', ''],
    highlights: [
      'Analyzes code and provides improvement suggestions.',
      'AI-powered insights for faster code reviews.',
      'Supports multiple programming languages.',
      'Integrates with GitHub and GitLab pipelines.',
    ],
  },
];

export const categories = ['All', 'Web App', 'Mobile App', 'AI/ML'];
export const cohorts = ['All', 'Cohort 1'];

export const getFeaturedProjects = () => allProjects.slice(0, 3);
export const hasMoreProjects = () => allProjects.length > 3;
