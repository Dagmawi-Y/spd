"use client";

import Image from "next/image";
import { Button } from "@/components/ui";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { useState, useRef } from "react";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = project.imageUrl.length;

  const next = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 relative">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center space-y-4 pt-14">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          {project.title}
        </h1>
        <p className="text-muted-foreground text-lg">
          by {project.author.join(", ")} • {project.cohort}
        </p>
        <span className="inline-block bg-muted text-muted-foreground text-sm px-3 py-1 rounded-md font-medium">
          {project.category}
        </span>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center mt-8">
        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute left-0 z-20 bg-background/80 p-2 rounded-full shadow hover:bg-accent transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          ref={containerRef}
          className="flex gap-5 overflow-hidden px-4 py-4"
        >
          {project.imageUrl.map((img, i) => (
            <div
              key={i}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              className="relative flex-shrink-0 w-[250px] md:w-[280px] h-[400px] md:h-[480px] rounded-xl shadow-lg border border-muted/20 overflow-hidden transition-transform duration-500 ease-out"
            >
              <Image
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                fill
                className="object-contain"
                priority={i === currentIndex}
              />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute right-0 z-20 bg-background/80 p-2 rounded-full shadow hover:bg-accent transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {project.imageUrl.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentIndex ? "bg-foreground scale-125" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-center space-y-6 mt-10">
        <h2 className="text-2xl font-semibold text-foreground">About This Project</h2>
        <p className="text-muted-foreground text-lg leading-relaxed text-justify md:text-center">
          {project.briefDescription}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <h3 className="text-xl font-semibold text-foreground mb-3">Technologies Used</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Highlights */}
      {project.highlights && (
        <div className="max-w-3xl mx-auto mt-10">
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Project Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {project.highlights.map((highlight, i) => (
              <div
                key={i}
                className="p-4 bg-muted rounded-lg shadow-sm text-muted-foreground"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
