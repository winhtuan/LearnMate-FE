function Header({ profileImageUrl }) {
  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="size-8 text-primary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">LearnMate</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a className="text-sm font-medium text-slate-900 border-b-2 border-primary pb-0.5" href="#">Dashboard</a>
            <a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Courses</a>
            <a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Calendar</a>
            <a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Messages</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-slate-100 rounded-lg px-3 py-1.5 w-64">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
              <input className="bg-transparent border-none text-sm text-slate-900 placeholder-slate-400 focus:ring-0 w-full ml-2" placeholder="Search..." type="text" />
            </div>
            <div className="size-8 rounded-full bg-slate-200 bg-cover bg-center ring-2 ring-white cursor-pointer" data-alt="Profile picture of a student" style={{ backgroundImage: `url('${profileImageUrl}')` }} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
