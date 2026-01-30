export default function GlobalSideNav({ portal, navigation, user }) {
    return (
        <aside className="hidden xl:flex flex-col w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-shrink-0 z-20">
            {/* Portal Header */}
            <div className="p-6 flex items-center gap-3">
                <div
                    className="bg-center bg-no-repeat bg-cover rounded-full size-10 shadow-sm"
                    style={{ backgroundImage: `url("${portal.logo}")` }}
                    data-alt={`${portal.name} Logo`}
                />
                <div className="flex flex-col">
                    <h1 className="text-slate-900 dark:text-white text-base font-bold leading-tight">
                        {portal.name}
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
                        {portal.subtitle}
                    </p>
                </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
                {navigation.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${item.active
                                ? 'bg-primary/10 text-primary dark:text-blue-400'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                            }`}
                    >
                        <span
                            className={`material-symbols-outlined ${item.filled ? 'fill-1' : ''}`}
                            style={{
                                fontSize: '24px',
                                ...(item.filled && { fontVariationSettings: "'FILL' 1" })
                            }}
                        >
                            {item.icon}
                        </span>
                        <span className="text-sm font-medium">{item.label}</span>
                    </a>
                ))}
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                    <div
                        className="bg-center bg-no-repeat bg-cover rounded-full size-9 border border-slate-200 dark:border-slate-700"
                        style={{ backgroundImage: `url("${user.avatar}")` }}
                        data-alt={`${user.name} profile picture`}
                    />
                    <div className="flex flex-col">
                        <p className="text-slate-900 dark:text-white text-sm font-medium">{user.name}</p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">{user.role}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
