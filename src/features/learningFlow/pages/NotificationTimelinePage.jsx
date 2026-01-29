import { useState } from "react";
import NotificationSidebar from "../components/NotificationSidebar";
import NotificationItem from "../components/NotificationItem";
import { notificationsData } from "../data/notifications.data";

export default function NotificationTimelinePage() {
    const { sections } = notificationsData;
    const [isUnreadFilter, setIsUnreadFilter] = useState(false);

    // Filter logic to hide read items when toggle is active
    const displayedSections = sections.map(section => ({
        ...section,
        items: isUnreadFilter
            ? section.items.filter(item => !item.read)
            : section.items
    })).filter(section => section.items.length > 0);

    return (
        <div className="bg-background-light font-display min-h-screen flex overflow-hidden">
            <NotificationSidebar />

            {/* Main Content Area */}
            <main className="flex-1 ml-0 md:ml-32 h-screen overflow-y-auto scroll-smooth">
                <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-16">

                    {/* Header Section */}
                    <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 animate-fade-in-up">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                                Notifications
                            </h1>
                            <p className="text-slate-500 text-lg font-light">
                                Stay updated with your latest alerts and deadlines.
                            </p>
                        </div>

                        {/* Filter Toggle */}
                        <label className="flex items-center cursor-pointer select-none group">
                            <div className="relative">
                                <input
                                    className="sr-only"
                                    type="checkbox"
                                    checked={isUnreadFilter}
                                    onChange={() => setIsUnreadFilter(!isUnreadFilter)}
                                />
                                <div className={`block w-14 h-8 rounded-full transition-colors duration-300 ${isUnreadFilter ? "bg-primary" : "bg-slate-200"}`}></div>
                                <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 shadow-sm flex items-center justify-center ${isUnreadFilter ? "translate-x-6" : "translate-x-0"}`}>
                                    {isUnreadFilter ? (
                                        <span className="material-symbols-outlined text-[14px] text-primary">check</span>
                                    ) : (
                                        <span className="material-symbols-outlined text-[14px] text-slate-400">filter_list</span>
                                    )}
                                </div>
                            </div>
                            <span className={`ml-3 text-sm font-semibold transition-colors ${isUnreadFilter ? "text-primary" : "text-slate-600 group-hover:text-primary"}`}>
                                Filter Unread
                            </span>
                        </label>
                    </header>

                    {/* Timeline Container */}
                    <div className="flex flex-col gap-12 relative">
                        {/* Vertical Line (Decoration) */}
                        <div className="absolute left-[27px] top-4 bottom-4 w-px bg-slate-200 -z-10"></div>

                        {displayedSections.map((section, index) => (
                            <section key={index}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 flex justify-center">
                                        <span className="material-symbols-outlined text-slate-400">{section.icon}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{section.title}</h2>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {section.items.map((item) => (
                                        <NotificationItem key={item.id} notification={item} />
                                    ))}
                                </div>
                            </section>
                        ))}

                        {/* Bottom Spacer */}
                        <div className="h-20"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}
