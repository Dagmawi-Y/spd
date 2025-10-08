import { HeroSection } from '@/components/sections/HeroSection';
import { Navbar } from '@/components/ui/Navbar';
import AboutSection from '@/components/sections/AboutSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import { PreviousCohortsSection } from '@/components/sections/PreviousCohortsSection';
import { ApplySection } from '@/components/sections/ApplySection';
import { FAQSection } from '@/components/sections/FAQSection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>
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
    </>
  );
}
