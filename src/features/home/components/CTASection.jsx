import React from 'react';
import { ctaData } from '@/features/home/data/homeData';

// Hoist static SVG background
const BACKGROUND_SVG = (
  <svg className="h-full w-full" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 100 100">
    <path d="M0 100 C 20 0 50 0 100 100 Z" />
  </svg>
);

function CTASection() {
  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {BACKGROUND_SVG}
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
          {ctaData.title}
        </h2>
        <p className="text-blue-100 text-lg mb-10">
          {ctaData.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {ctaData.buttons.map((btn, index) => (
            <button 
              key={index}
              className={
                btn.variant === 'primary' 
                  ? "bg-white text-primary hover:bg-blue-50 px-10 py-4 rounded-xl font-bold transition-all shadow-xl"
                  : "bg-blue-700 text-white border border-blue-500 hover:bg-blue-800 px-10 py-4 rounded-xl font-bold transition-all"
              }
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(CTASection);
