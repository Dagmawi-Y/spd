'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github, ArrowLeft, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

interface Project {
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

const allProjects: Project[] = [
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
  },
  {
    id: '3',
    title: 'EcoTracker',
    description: 'Mobile app for tracking personal carbon footprint and sustainability goals with gamification elements.',
    author: 'Elena Rodriguez',
    cohort: 'Cohort 1',
    category: 'Mobile App',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Chart.js'],
    githubUrl: 'https://github.com/example/ecotracker',
    imageUrl: '/api/placeholder/600/400'
  },
  {
    id: '4',
    title: 'DevPortfolio Builder',
    description: 'A no-code platform for developers to create stunning portfolio websites with integrated GitHub stats.',
    author: 'Alex Kim',
    cohort: 'Cohort 1',
    category: 'Web App',
    technologies: ['Next.js', 'Tailwind', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/example/devportfolio',
    liveUrl: 'https://devportfolio-builder.com',
    imageUrl: '/api/placeholder/600/400'
  },
  {
    id: '5',
    title: 'CryptoTracker Pro',
    description: 'Advanced cryptocurrency portfolio tracker with real-time alerts and technical analysis tools.',
    author: 'David Park',
    cohort: 'Cohort 1',
    category: 'FinTech',
    technologies: ['Vue.js', 'Express', 'Redis', 'WebSocket'],
    githubUrl: 'https://github.com/example/cryptotracker',
    liveUrl: 'https://cryptotracker-pro.com',
    imageUrl: '/api/placeholder/600/400'
  },
  {
    id: '6',
    title: 'StudyBuddy',
    description: 'Collaborative study platform with flashcards, quizzes, and peer-to-peer learning features.',
    author: 'Maya Patel',
    cohort: 'Cohort 1',
    category: 'EdTech',
    technologies: ['React', 'Django', 'PostgreSQL', 'WebRTC'],
    githubUrl: 'https://github.com/example/studybuddy',
    imageUrl: '/api/placeholder/600/400'
  }
];

const categories = ['All', 'Web App', 'Mobile App', 'AI/ML', 'FinTech', 'EdTech'];
const cohorts = ['All', 'Cohort 1'];

export default function PrevCohortsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCohort, setSelectedCohort] = useState('All');

  const filteredProjects = allProjects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const cohortMatch = selectedCohort === 'All' || project.cohort === selectedCohort;
    return categoryMatch && cohortMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
                Previous Cohorts
              </h1>
              <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                Explore all the amazing projects built by our previous cohort participants. Get inspired by what you could build next.
              </p>
            </div>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filter Projects
              </CardTitle>
              <CardDescription>
                Filter by category or cohort to find specific types of projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">Cohort</label>
                  <Select value={selectedCohort} onValueChange={setSelectedCohort}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cohort" />
                    </SelectTrigger>
                    <SelectContent>
                      {cohorts.map((cohort) => (
                        <SelectItem key={cohort} value={cohort}>
                          {cohort}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                        <ExternalLink className="w-8 h-8" />
                      </div>
                      <p className="text-sm">Project Screenshot</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-black/80 text-white text-xs rounded-md font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        by {project.author} • {project.cohort}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3 pt-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No projects found</h3>
              <p className="text-gray-600 mb-8">
                Try adjusting your filters to see more projects.
              </p>
              <Button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedCohort('All');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Stats */}
          <Card className="mt-16">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-black mb-2">{allProjects.length}</h3>
                  <p className="text-muted-foreground">Projects Built</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-black mb-2">1</h3>
                  <p className="text-muted-foreground">Cohorts Completed</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-black mb-2">100%</h3>
                  <p className="text-muted-foreground">Completion Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}