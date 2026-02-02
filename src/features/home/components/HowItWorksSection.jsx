import React from 'react';
import StepCard from './StepCard';
import { steps } from '@/features/home/data/homeData';

function HowItWorksSection() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="how-it-works">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">Your Path to Mastery</h2>
          <p className="text-slate-400">Three simple steps to start your learning journey with us.</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-slate-800" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {steps.map((step, index) => (
              <StepCard 
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(HowItWorksSection);
