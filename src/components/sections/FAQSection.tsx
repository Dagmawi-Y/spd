import React from 'react';
import { FAQAccordion } from '../ui/faq-accordion';

const faqData = [
  {
    id: 'who-can-apply',
    question: 'Who can apply?',
    answer: 'Anyone motivated to learn and build. Beginners, self-taught devs, bootcamp grads, CS students - all welcome.'
  },
  {
    id: 'is-it-free',
    question: 'Is it free?',
    answer: 'Completely free. No fees, no costs, no catches.'
  },
  {
    id: 'time-commitment',
    question: 'Time commitment?',
    answer: '3 months, 10-15 hours/week. Project work, mentorship sessions, community activities.'
  },
  {
    id: 'remote-or-in-person',
    question: 'Remote or in-person?',
    answer: 'Fully remote. Work from anywhere in the world.'
  },
  {
    id: 'what-projects',
    question: 'What projects?',
    answer: 'Real-world projects that solve actual problems. Web apps, mobile apps, dev tools, open source.'
  },
  {
    id: 'mentorship-format',
    question: 'How does mentorship work?',
    answer: '1-on-1 sessions, group discussions, code reviews. Personalized to your needs and goals.'
  },
  {
    id: 'selection-process',
    question: 'How are people selected?',
    answer: 'Based on motivation and commitment, not current skill level. Show passion and willingness to work.'
  },
  {
    id: 'after-program',
    question: 'What happens after?',
    answer: 'Completed project, new skills, dev community connections. Many land jobs or start their own projects.'
  }
];

export const FAQSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
            FAQ
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto font-medium">
            Quick answers to common questions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqData} />
        </div>
      </div>
    </section>
  );
};