export default function MaterialHeader({ navigation, user }) {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
            <div className="flex h-16 items-center justify-between px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
                <div className="flex items-center gap-8">
                    <a className="flex items-center gap-3 text-slate-900 group" href="#">
                        <div className="size-9 text-primary group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-full h-full drop-shadow-sm" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor" />
                            </svg>
                        </div>
                        <span className="text-lg font-bold tracking-tight">LearnMate</span>
                    </a>
                    <nav className="hidden md:flex items-center gap-1">
                        {navigation.map((item, index) => (
                            <a
                                key={index}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${item.active
                                        ? 'text-slate-900 bg-slate-100'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                    }`}
                                href={item.href}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative hidden sm:block group">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px] group-focus-within:text-primary transition-colors">
                            search
                        </span>
                        <input
                            className="h-10 w-64 rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="Search..."
                            type="text"
                        />
                    </div>
                    <button className="relative rounded-full size-10 overflow-hidden ring-2 ring-white shadow-sm transition-transform hover:scale-105 active:scale-95">
                        <div
                            className="bg-center bg-no-repeat bg-cover h-full w-full"
                            style={{ backgroundImage: `url("${user.avatar}")` }}
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}
