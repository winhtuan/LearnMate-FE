import React from 'react';
import { Link } from 'react-router-dom';
import StudentAvatars from './StudentAvatars';

function Hero() {
  return (
    <section className="hero-gradient pt-16 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-primary rounded-full mb-6">
              <span className="material-symbols-outlined text-sm">stars</span>
              <span className="text-xs font-bold uppercase tracking-wider">Top Rated Tutoring Platform</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Empowering Learning Through <span className="text-primary">Expert Connection</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Connect with certified world-class tutors for personalized 1-on-1 sessions. Achieve your academic goals with a schedule that fits your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/tutors"
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group"
              >
                Find a Tutor
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link to="/tutor" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center">
                Become a Tutor
              </Link>
            </div>
            <StudentAvatars />
          </div>
          <div className="relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img alt="Tutor and student working together" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGCE6TOiMlYbOipjn-K-GnxVDOAcShWCGnrupIkksMKVNoCQHlYKadcpr31mKVS-gUrav1LhATLZ-mtAYA46dBIp-BxmPHRP04ikjmbNjqoTGoeO2-6HuIjHcHOLzGrZsGLERkS94n5a4hZE3mM5T1L3BPFI_CpTBS67HGD0xmZfHgPZ1nxNKk0UwIG0IWoRJS1__zBQD7g3OcekQD0fHvpfJAKojVymtg1VQlgfqoWMLLCXxWSlL5LkTbrNbK-ei_prQKCVij_AA" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-4">
                <div className="size-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-emerald-600">verified_user</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Certified Tutors</p>
                  <p className="text-xs text-slate-500">Rigorous vetting for every expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Hero);
