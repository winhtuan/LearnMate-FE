export default function NotificationItem({ notification }) {
    const { type, title, subTitle, message, time, urgentLabel, icon, colorClass, read } = notification;

    // Helper to map color names to Tailwind classes
    const getColors = (color) => {
        const colors = {
            red: {
                bg: "bg-red-50",
                border: "border-red-200",
                text: "text-red-500",
                hoverBorder: "hover:border-red-200",
                hoverShadow: "hover:shadow-red-500/5",
                iconBg: "bg-red-50",
                iconText: "text-red-500",
                dot: "bg-red-500",
                urgentBg: "bg-red-50",
                urgentText: "text-red-500",
            },
            blue: {
                bg: "bg-blue-50",
                border: "border-slate-100", // Default border
                text: "text-primary",
                hoverBorder: "hover:border-primary/30",
                hoverShadow: "hover:shadow-primary/5",
                iconBg: "bg-blue-50",
                iconText: "text-primary",
                dot: "bg-primary",
            },
            green: {
                bg: "bg-green-50",
                border: "border-slate-100",
                text: "text-green-600",
                hoverBorder: "hover:border-green-200",
                hoverShadow: "hover:shadow-green-500/5",
                iconBg: "bg-green-50",
                iconText: "text-green-600",
                dot: "bg-green-500",
            },
            yellow: {
                bg: "bg-yellow-50",
                border: "border-slate-100",
                text: "text-yellow-600",
                hoverBorder: "hover:border-yellow-200",
                hoverShadow: "hover:shadow-yellow-500/5",
                iconBg: "bg-yellow-50",
                iconText: "text-yellow-600",
                dot: "bg-yellow-500",
            },
            slate: {
                bg: "bg-slate-50",
                border: "border-slate-100",
                text: "text-slate-500",
                hoverBorder: "hover:border-primary/30",
                hoverShadow: "hover:shadow-primary/5",
                iconBg: "bg-slate-50",
                iconText: "text-slate-500",
                dot: "bg-slate-500",
            },
        };
        return colors[color] || colors.slate;
    };

    const c = getColors(colorClass);

    return (
        <div
            className={`group relative flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 ${c.hoverBorder} hover:shadow-lg ${c.hoverShadow} transition-all duration-300 cursor-default ${read ? "opacity-75 hover:opacity-100" : ""}`}
        >
            {/* Icon */}
            <div className="relative shrink-0 z-10">
                <div className={`w-14 h-14 rounded-full ${c.iconBg} flex items-center justify-center border-4 border-white ${c.iconText} shadow-sm`}>
                    <span className="material-symbols-outlined">{icon}</span>
                </div>
                {!read && (
                    <span className={`absolute top-1 right-1 w-3 h-3 ${c.dot} rounded-full border-2 border-white`}></span>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 py-1">
                <div className="flex justify-between items-start">
                    <h3 className={`text-lg font-semibold text-slate-900 group-hover:${c.text.replace('text-', 'text-')} transition-colors`}>
                        {title}
                    </h3>
                    {urgentLabel ? (
                        <span className={`text-xs font-medium ${c.urgentText || c.text} ${c.urgentBg || c.bg} px-2 py-1 rounded-full`}>
                            {urgentLabel}
                        </span>
                    ) : subTitle && (
                        <span className="text-xs font-medium text-slate-400">{subTitle}</span>
                    )}
                </div>
                <p className="text-slate-500 text-sm mt-1">{message}</p>
                <div className="text-xs text-slate-400 mt-2 font-medium">{time}</div>
            </div>

            {/* Hover Actions */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white pl-4 shadow-[-10px_0_20px_white]">
                <button className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors" title="Mark as read">
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                </button>
                <button className="p-2 rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors" title="Delete">
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                </button>
            </div>
        </div>
    );
}
