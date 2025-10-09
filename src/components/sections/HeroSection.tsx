'use client';

import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-24 lg:py-32 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50"></div>
        
        {/* Geometric shapes for visual interest */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-muted/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-muted/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-muted/10 rounded-full blur-lg"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="space-y-8 md:space-y-12">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/assets/spd-logo.jpg"
                alt="SPD Logo"
                width={120}
                height={120}
                className="rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
          
          {/* Main Title */}
          <h1 
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
          >
            SPD
          </h1>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            3-month mentorship. Real projects. Career readiness.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-8">
            <Link href="/apply">
              <Button 
                variant="default" 
                size="lg"
                className="rounded-none px-8 py-4 text-lg font-semibold min-w-[200px] h-14"
                aria-label="Apply for Cohort 2 - Navigate to application form"
              >
                Apply for Cohort 2
              </Button>
            </Link>
            <Link href="/prev-cohorts">
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-none px-8 py-4 text-lg font-semibold min-w-[200px] h-14"
                aria-label="See Previous Cohorts - Navigate to showcase section"
              >
                See Previous Cohorts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}