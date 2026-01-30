import React from 'react';

const StatCard = ({ metric }) => {
    const { label, value, trend, trendUp, icon, color, isAlert } = metric;

    const colorClasses = {
        blue: 'bg-blue-50 text-blue-600',
        green: 'bg-green-50 text-green-600',
        red: 'bg-red-50 text-red-600',
        indigo: 'bg-indigo-50 text-indigo-600',
        orange: 'bg-orange-50 text-orange-600',
    };

    return (
        <div
            className={`bg-white p-5 rounded-xl border border-border-light shadow-sm ${isAlert ? 'border-l-4 border-l-red-500' : ''
                }`}
        >
            <div className="flex items-center justify-between mb-4">
                <div className={`size-10 rounded-lg flex items-center justify-center ${colorClasses[color]}`}>
                    <span className="material-symbols-outlined">{icon}</span>
                </div>
                <span className={`${trendUp ? 'text-green-500' : 'text-red-500'} text-xs font-bold flex items-center`}>
                    {trend}
                    <span className="material-symbols-outlined text-xs">
                        {trendUp ? 'arrow_upward' : 'arrow_downward'}
                    </span>
                </span>
            </div>
            <p className="text-[#6a7981] text-sm font-medium">{label}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
    );
};

export default StatCard;
