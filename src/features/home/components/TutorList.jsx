import React from 'react';
import { Link } from 'react-router-dom';
import TutorCard from './TutorCard';
import { tutors } from '@/features/home/data/homeData';

function TutorList() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Find Your Perfect Tutor</h2>
            <p className="text-slate-600">Hand-picked, top-rated experts available right now.</p>
          </div>
          <Link to="/tutors" className="text-primary font-bold hover:underline flex items-center gap-2 group">
            View all 2,400+ tutors
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutors.map((tutor, index) => (
            <TutorCard
              key={index}
              name={tutor.name}
              subject={tutor.subject}
              tags={tutor.tags}
              price={tutor.price}
              rating={tutor.rating}
              image={tutor.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(TutorList);
