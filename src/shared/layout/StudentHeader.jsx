import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from '@/app/context/AuthContext';

export default function StudentHeader({ activeTab = "" }) {
    const navigate = useNavigate();
    const { user } = useAuth();

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white/80 backdrop-blur-md px-6 py-3 lg:px-10">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-4 text-slate-900">
                    <div className="size-8 flex items-center justify-center text-primary">
                        <svg className="size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold leading-tight tracking-tight">LearnMate</h2>
                </div>
                <label className="hidden md:flex flex-col min-w-40 h-10 w-64 lg:w-80">
                    <div className="flex w-full flex-1 items-stretch rounded-full h-full bg-slate-100 border border-transparent focus-within:border-primary/50 transition-colors">
                        <div className="text-slate-400 flex items-center justify-center pl-4">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </div>
                        <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-full text-slate-900 focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-slate-400 px-3 text-sm font-normal leading-normal" placeholder="Search for tutors or subjects" defaultValue="" />
                    </div>
                </label>
            </div>
            <div className="flex items-center gap-4 lg:gap-8">
                <nav className="hidden lg:flex items-center gap-6">
                    <NavLink className={`${activeTab === "dashboard" ? "text-primary" : "text-slate-600 hover:text-primary"} text-sm font-medium transition-colors`} to="/dashboard">Dashboard</NavLink>
                    <NavLink className={`${activeTab === "tutors" ? "text-primary" : "text-slate-600 hover:text-primary"} text-sm font-medium transition-colors`} to="/tutors">Tutors</NavLink>
                    <a className={`${activeTab === "schedule" ? "text-primary" : "text-slate-600 hover:text-primary"} text-sm font-medium transition-colors`} href="#">Schedule</a>
                    <a className={`${activeTab === "resources" ? "text-primary" : "text-slate-600 hover:text-primary"} text-sm font-medium transition-colors`} href="#">Resources</a>
                </nav>
                <div className="flex items-center gap-4">
                    <button className="relative text-slate-500 hover:text-slate-800 transition-colors">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <div
                        onClick={() => navigate("/student-profile")}
                        className="bg-center bg-no-repeat bg-cover rounded-full size-9 ring-2 ring-slate-100 cursor-pointer hover:ring-primary transition-all bg-slate-200"
                        style={user?.avatar ? { backgroundImage: `url("${user.avatar}")` } : undefined}
                    />
                </div>
            </div>
        </header>
    );
}
