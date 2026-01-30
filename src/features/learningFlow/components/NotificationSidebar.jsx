import { Link } from "react-router-dom";

export default function NotificationSidebar() {
    const navItems = [
        { icon: "grid_view", title: "Dashboard", href: "#" },
        { icon: "calendar_month", title: "Calendar", href: "#" },
        { icon: "school", title: "Courses", href: "#" },
        { icon: "notifications", title: "Notifications", href: "/notifications", active: true },
        { icon: "person", title: "Profile", href: "#" },
    ];

    return (
        <aside className="hidden md:flex flex-col justify-center fixed left-6 top-0 bottom-0 z-50 pointer-events-none">
            <div className="pointer-events-auto bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full py-6 px-3 flex flex-col items-center gap-6 border border-slate-100">
                {/* Brand Icon */}
                <div className="bg-primary/10 rounded-full p-2 mb-2">
                    <div
                        className="bg-center bg-no-repeat bg-cover rounded-full w-8 h-8"
                        style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOu-9W32qXnyG1qrr0RXlEYVpj9lYW78VGEwJlFLg3KjCSLXriJxjmbZpTiGX-ZyWEn_wKv08fdg-w9rTBPzQ9klAf8yUUwTEUGU7CSKB2LGHRic_zoQL0FE8LDF7EE_vypp2VRE8ugtPl5I7TzmzSTGfZXqeGN86nGU7mLVUIluXtsJypBgLrUQV5-hIo0F75UOkUkQDn-n9XHuIlIf7WAziDNFbvgLokH_6-BmYKpUdEUs4cxB5zqB4WSNrhCYi5MiTlfgLelnc")` }}
                    ></div>
                </div>

                {/* Nav Items */}
                <nav className="flex flex-col gap-2">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.href}
                            title={item.title}
                            className={`group relative flex items-center justify-center p-3 rounded-full transition-all ${item.active
                                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                                    : "text-slate-400 hover:text-primary hover:bg-primary/5"
                                }`}
                        >
                            <span className={`material-symbols-outlined text-[24px] ${item.active ? "font-variation-settings-fill" : ""}`}>
                                {item.icon}
                            </span>
                        </Link>
                    ))}
                </nav>

                {/* Bottom Action */}
                <div className="mt-auto pt-4 border-t border-slate-100 w-full flex justify-center">
                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined text-[24px]">logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
