
const UserStats = ({ stats }) => {
    const colorClasses = {
        blue: 'text-primary',
        emerald: 'text-emerald-600',
        orange: 'text-orange-600',
    };

    const iconColorClasses = {
        blue: 'text-primary/40',
        emerald: 'text-emerald-500/40',
        orange: 'text-orange-500/40',
    };

    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <p className={`text-xs font-bold uppercase tracking-wider ${colorClasses[stat.color] || 'text-slate-500'}`}>
                            {stat.label}
                        </p>
                        <span className={`material-symbols-outlined ${iconColorClasses[stat.color] || 'text-slate-400'}`}>
                            {stat.icon}
                        </span>
                    </div>
                    <p className="text-3xl font-extrabold text-slate-900">{stat.value}</p>
                </div>
            ))}
        </div>
    );
};

export default UserStats;
