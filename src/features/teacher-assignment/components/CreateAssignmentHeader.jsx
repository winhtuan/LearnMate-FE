import { Link } from "react-router-dom";

export default function CreateAssignmentHeader() {
  return (
    <header className="sticky top-16 z-40 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Back & Title Context */}
          <div className="flex items-center gap-4">
            <Link to="/teacher-assignment" className="flex items-center justify-center p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 cursor-pointer">
              <span className="material-symbols-outlined text-xl">
                arrow_back_ios_new
              </span>
            </Link>
            <div className="flex flex-col">
              <h1 className="text-base font-semibold text-slate-900 dark:text-white leading-tight">
                Create Assignment
              </h1>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Algebra 101 • Fall Semester
              </span>
            </div>
          </div>
          {/* Center: Auto-save status (Hidden on mobile) */}
          <div className="hidden md:flex items-center text-xs font-medium text-slate-400 dark:text-slate-500">
            <span className="material-symbols-outlined text-sm mr-1">
              cloud_done
            </span>
            Saved just now
          </div>
          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center justify-center h-9 px-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
              Save Draft
            </button>
            <button className="flex items-center justify-center h-9 px-4 rounded-lg bg-primary text-white text-sm font-bold shadow-sm hover:bg-blue-600 transition-colors gap-2 cursor-pointer">
              <span>Assign</span>
              <span className="material-symbols-outlined text-[18px]">
                send
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
