import React from 'react';

function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="size-9 text-primary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor" />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">LearnMate</span>
          </div>
          <nav className="hidden md:flex gap-10 items-center">
            <a className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors" href="#">Find Tutors</a>
            <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#">How it Works</a>
            <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#">Resources</a>
            <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#">Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-slate-900 px-4 py-2">Log in</button>
            <button className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-blue-600 transition-all shadow-sm">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
