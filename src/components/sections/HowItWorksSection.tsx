import React from 'react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Apply & get selected",
      description: "Submit application. We look for motivation and potential, not just skills."
    },
    {
      number: 2,
      title: "Build with mentorship",
      description: "3 months. Real project. Weekly check-ins. Industry best practices."
    },
    {
      number: 3,
      title: "Present & showcase",
      description: "Demo your project. Add to portfolio. Join the community."
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 md:space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            How It Works
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line - hidden on mobile, visible on larger screens */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-border transform translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative">
                    {/* Step number circle */}
                    <div className="flex justify-center mb-6">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold relative z-10">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Step content */}
                    <div className="text-center space-y-4">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Mobile connector line */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden flex justify-center mt-8">
                        <div className="w-0.5 h-8 bg-border"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}