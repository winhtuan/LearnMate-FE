import { Link } from "react-router-dom";

export default function TeacherHeader() {
  const currentUser = {
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPL1phuec4ofr09PYGA21DLiKEin5C-t2Fl2bhy5torxxKkQas4rzy5TLRykkcfLA9OTukGIbvnM5x6bm5xvFAQOzhXGPvYQp31osYuFIq7JAFvsdoQVciIDApoBg4jyGh1cQhLSBfZ7AG4ycpt18WkMcSaPHapd30QnUk1QFhOE5soGfx8Sltkaaz9vv8tRLemS3rEYABmIgNLckWoThhgotR7yZQxmqb7huLOz88sqHteSRrCe-mtKj8cHabRPSkGw9jVWQ4S1Q"
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">school</span>
            </div>
            <h2 className="text-slate-900 text-lg font-bold tracking-tight hidden sm:block">LearnMate</h2>
          </div>
          <div className="flex-1 max-w-md hidden md:flex">
            <label className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input 
                className="block w-full pl-10 pr-3 py-2 border-none rounded-lg bg-slate-100 text-sm placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all" 
                placeholder="Search students, classes, or assignments..." 
                type="text"
              />
            </label>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
              <Link to="/teacher1/studentmanageview" className="text-primary">Students</Link>
              <Link to="/teacher1/liveclass" className="hover:text-primary transition-colors">Classes</Link>
            </nav>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
              <button className="relative p-1 text-slate-400 hover:text-slate-600">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div 
                className="h-9 w-9 rounded-full bg-slate-200 bg-cover bg-center ring-2 ring-white cursor-pointer" 
                style={{ backgroundImage: `url("${currentUser.avatar}")` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
