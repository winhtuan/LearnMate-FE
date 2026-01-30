import { Link } from "react-router-dom";
import { teacherNavigation, defaultUser } from "../../data/teacherNav.data";

export default function TeacherHeader({ activeNav = null, user = defaultUser }) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white/80 backdrop-blur-md px-10 py-3">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <Link to="/tutorDashboard/dashboard" className="flex items-center gap-4 text-slate-900">
          <div className="size-4 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">LearnMate</h2>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-9">
          {teacherNavigation.map((item) => (
            <Link
              key={item.key}
              to={item.href}
              className={`text-sm font-medium leading-normal transition-colors ${
                activeNav === item.key ? 'text-primary font-semibold' : 'text-slate-900 hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        {/* Search Bar */}
        <label className="flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-slate-400 flex border-none bg-slate-100 items-center justify-center pl-4 rounded-l-lg">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 border-none bg-slate-100 text-slate-900 focus:outline-0 focus:ring-0 h-full placeholder:text-slate-400 px-4 rounded-r-lg text-sm font-normal"
              placeholder="Search"
            />
          </div>
        </label>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors relative">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors">
            <span className="material-symbols-outlined text-[20px]">settings</span>
          </button>
        </div>

        {/* User Avatar */}
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all"
          style={{ backgroundImage: `url("${user.avatar}")` }}
          title={user.name}
        />
      </div>
    </header>
  );
}
