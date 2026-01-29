import { Link } from "react-router-dom";

export default function TopHeader({ user, navigation }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">school</span>
            </div>
            <h2 className="text-slate-900 text-lg font-bold tracking-tight hidden sm:block">
              LearnMate
            </h2>
            <span className="text-xs font-medium text-slate-500 hidden md:block border-l border-slate-300 pl-3 ml-3">
              Teacher Portal
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  item.active
                    ? "text-primary"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
            <button className="relative p-1 text-slate-400 hover:text-slate-600 cursor-pointer">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-2">
              <div
                className="size-9 rounded-full bg-slate-200 bg-cover bg-center ring-2 ring-white cursor-pointer"
                style={{ backgroundImage: `url("${user.avatar}")` }}
              ></div>
              {user.name && (
                <span className="text-sm font-medium text-slate-700 hidden sm:block">
                  {user.name}
                </span>
              )}
              <span className="material-symbols-outlined text-slate-400">
                expand_more
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
