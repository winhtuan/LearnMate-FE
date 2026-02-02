import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/shared/components/ui/Logo';
import { navigationLinks } from '@/features/home/data/homeData';

function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <nav className="hidden md:flex gap-10 items-center">
            {navigationLinks.map((link, index) => (
              <a 
                key={index}
                className={`text-sm font-semibold ${link.primary ? 'text-slate-900' : 'text-slate-600'} hover:text-primary transition-colors`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-slate-900 px-4 py-2">
              Log in
            </Link>
            <Link to="/register" className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-blue-600 transition-all shadow-sm">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
