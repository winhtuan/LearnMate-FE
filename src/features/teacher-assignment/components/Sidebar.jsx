import { Link } from "react-router-dom";

export default function Sidebar({ user, navigation }) {
  return (
    <aside className="w-full md:w-64 bg-surface-light border-r border-slate-200 flex flex-col shrink-0 h-screen overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 shadow-sm"
            style={{ backgroundImage: `url("${user.avatar}")` }}
          ></div>
          <div className="flex flex-col">
            <h1 className="text-slate-900 text-base font-bold leading-tight">
              {user.name}
            </h1>
            <p className="text-slate-500 text-xs font-medium">{user.role}</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          {navigation.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <span
                className={`material-symbols-outlined text-[20px] ${
                  item.active
                    ? "font-variation-settings-'FILL'1"
                    : "text-slate-400 group-hover:text-primary transition-colors"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-sm ${
                  item.active
                    ? "font-bold"
                    : "font-medium group-hover:text-primary transition-colors"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-6 border-t border-slate-200">
        <Link
          to="#"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">logout</span>
          <span className="text-sm font-medium">Log Out</span>
        </Link>
      </div>
    </aside>
  );
}
