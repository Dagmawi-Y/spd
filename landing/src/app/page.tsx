"use client"

import { HeroSection } from '@/components/sections/HeroSection';
import { Navbar } from '@/components/ui/Navbar';
import AboutSection from '@/components/sections/AboutSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import { PreviousCohortsSection } from '@/components/sections/PreviousCohortsSection';
import { ApplySection } from '@/components/sections/ApplySection';
import { FAQSection } from '@/components/sections/FAQSection';
import { Footer } from '@/components/sections/Footer';
import { EtherealShadow } from '@/components/ui/ethereal-shadow';
import { FadeIn, fadeInVariants } from '@/components/ui/motion';

export default function Home() {
  return (
    <FadeIn 
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background"
    >
      <EtherealShadow className="min-h-screen">
        <Navbar />
        <main id="main-content" role="main">
          <HeroSection />
          
          <AboutSection />
          <HowItWorksSection />
          
          <PreviousCohortsSection />
          
          <ApplySection />
          
          <FAQSection />
        </main>
        
        <Footer />
      </EtherealShadow>
    </FadeIn>
  );
}
