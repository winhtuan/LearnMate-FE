import React from 'react';

const ViolationStats = ({ stats }) => {
    const colorClasses = {
        orange: 'bg-accent-orange/10 text-accent-orange',
        blue: 'bg-primary/10 text-primary',
        red: 'bg-accent-red/10 text-accent-red',
        slate: 'bg-slate-100 text-slate-600',
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl table-shadow border border-slate-100">
                    <div className="flex justify-between items-start mb-4">
                        <div className={`p-2 rounded-lg ${colorClasses[stat.color] || 'bg-slate-100 text-slate-500'}`}>
                            <span className="material-symbols-outlined">{stat.icon}</span>
                        </div>
                        <span className={`${stat.trendUp ? 'text-green-600' : 'text-red-600'} text-xs font-bold flex items-center gap-1`}>
                            {stat.trend}
                            <span className="material-symbols-outlined text-xs">
                                {stat.trendUp ? 'trending_up' : 'trending_down'}
                            </span>
                        </span>
                    </div>
                    <p className="text-slate-500 text-sm font-semibold">{stat.label}</p>
                    <p className="text-2xl font-extrabold text-slate-900">{stat.value}</p>
                </div>
            ))}
        </div>
    );
};

export default ViolationStats;
