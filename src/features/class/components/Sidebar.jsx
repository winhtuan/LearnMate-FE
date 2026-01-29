export default function Sidebar({ user, navigation, logoText = "LearnMate" }) {
  return (
    <nav className="group fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col justify-between h-auto py-8 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[3rem] w-[88px] hover:w-64 transition-[width] duration-300 ease-out overflow-hidden border border-slate-100">
      <div className="flex flex-col gap-2 w-full px-4">
        <div className="flex items-center gap-4 mb-8 px-2">
          <div className="size-10 flex items-center justify-center bg-primary rounded-full shrink-0 text-white shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined text-[24px]">school</span>
          </div>
          <span className="text-xl font-bold tracking-tight whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 text-slate-900">{logoText}</span>
        </div>
        {navigation.map((item, index) => (
          <a
            key={index}
            className={`flex items-center gap-4 p-3 rounded-full transition-colors group/item ${
              item.active
                ? 'bg-primary/10 text-primary'
                : 'hover:bg-slate-100 text-slate-500 hover:text-primary'
            }`}
            href={item.href}
          >
            <span className={`material-symbols-outlined text-[28px] shrink-0 w-8 text-center ${item.active ? 'fill-current' : ''}`}>{item.icon}</span>
            <span className={`text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${item.active ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-2 w-full px-4 mt-8">
        <div className="h-px w-full bg-slate-100 mb-2"></div>
        <a className="flex items-center gap-4 p-3 rounded-full hover:bg-slate-100 transition-colors group/item text-slate-500 hover:text-primary" href="#">
          <span className="material-symbols-outlined text-[28px] shrink-0 w-8 text-center">settings</span>
          <span className="font-medium text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Settings</span>
        </a>
        <a className="flex items-center gap-4 p-1 rounded-full hover:bg-slate-100 transition-colors mt-2" href="#">
          <div className="size-10 rounded-full bg-slate-200 shrink-0 overflow-hidden border-2 border-white shadow-sm" data-alt="User avatar">
            <img alt="Profile" className="w-full h-full object-cover" src={user.avatar} />
          </div>
          <div className="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
            <span className="font-bold text-sm text-slate-900 truncate">{user.name}</span>
            <span className="text-xs text-slate-500 truncate">{user.role}</span>
          </div>
        </a>
      </div>
    </nav>
  );
}
