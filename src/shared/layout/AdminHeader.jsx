import { adminDashboardData } from '@/features/admin_dashboard/data/admin_dashboard.data';

const defaultUser = adminDashboardData.user;

export default function AdminHeader({ user = defaultUser }) {
    return (
        <header className="h-16 bg-white border-b border-border-light flex items-center justify-between px-6 shrink-0 z-50 fixed top-0 w-full">
            <div className="flex items-center gap-3 w-64">
                <div className="bg-primary size-8 rounded-lg flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-xl">school</span>
                </div>
                <h1 className="text-[#121516] text-xl font-extrabold tracking-tight">LearnMate</h1>
            </div>
            <div className="flex-1 flex justify-center">
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Admin Dashboard Overview</h2>
            </div>
            <div className="flex items-center justify-end gap-6 w-64">
                <div className="flex items-center gap-4">
                    <button className="relative p-2 rounded-lg text-[#6a7981] hover:bg-gray-100 transition-all">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <div className="h-6 w-[1px] bg-border-light"></div>
                    <div className="relative group">
                        <button className="flex items-center gap-3 py-1 px-2 rounded-lg hover:bg-gray-100 transition-all">
                            <div
                                className="size-8 rounded-full bg-cover bg-center border border-border-light bg-slate-200"
                                style={user.avatar ? { backgroundImage: `url("${user.avatar}")` } : undefined}
                            />
                            <div className="text-left hidden md:block">
                                <p className="text-xs font-bold leading-tight">{user.name}</p>
                                <p className="text-[10px] text-[#6a7981] font-medium">{user.role}</p>
                            </div>
                            <span className="material-symbols-outlined text-sm text-[#6a7981]">expand_more</span>
                        </button>
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-border-light py-2 hidden group-hover:block">
                            <a className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50" href="#">
                                <span className="material-symbols-outlined text-lg">account_circle</span>
                                <span>Profile</span>
                            </a>
                            <div className="border-t border-border-light my-1"></div>
                            <a className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50" href="#">
                                <span className="material-symbols-outlined text-lg">logout</span>
                                <span>Logout</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
