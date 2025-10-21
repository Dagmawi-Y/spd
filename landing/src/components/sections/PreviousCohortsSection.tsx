'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EtherealShadow } from '@/components/ui/ethereal-shadow';
import { FadeIn, SlideUp, StaggerContainer, fadeInVariants, slideUpVariants, staggerVariants } from '@/components/ui/motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { getFeaturedProjects, hasMoreProjects } from '@/data/projects';

export const PreviousCohortsSection: React.FC = () => {
  const featuredProjects = getFeaturedProjects();
  const showMoreButton = hasMoreProjects();

  return (
    <section 
      id="previous-cohorts" 
      className="py-16 md:py-24 lg:py-32 bg-background scroll-mt-24"
      aria-labelledby="previous-cohorts-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn variants={fadeInVariants} className="text-center mb-16">
          <h2 id="previous-cohorts-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Previous Cohorts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Amazing projects built by our previous cohort participants.
          </p>
        </FadeIn>

        <StaggerContainer
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid gap-8 mb-12 ${
            featuredProjects.length === 1 
              ? 'grid-cols-1 max-w-md mx-auto' 
              : featuredProjects.length === 2 
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {featuredProjects.map((project) => (
            <SlideUp key={project.id} variants={slideUpVariants}>
              <EtherealShadow variant="subtle">
                <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                  
                  {/* Image Section */}
                  <div className="relative w-full aspect-video rounded-t-lg overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
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
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-3 pt-2">
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
              </EtherealShadow>
            </SlideUp>
          ))}
        </StaggerContainer>

        {showMoreButton && (
          <div className="text-center">
            <EtherealShadow>
              <Card className="max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Want to See More?</h3>
                    <p className="text-muted-foreground">
                      Explore all projects from our previous cohorts and get inspired by what you could build.
                    </p>
                    <Link href="/prev-cohorts">
                      <Button size="lg" className="w-full md:w-auto">
                        View All Projects
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </EtherealShadow>
          </div>
        )}
      </div>
    </section>
  );
};
