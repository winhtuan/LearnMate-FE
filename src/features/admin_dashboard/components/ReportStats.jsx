import React from 'react';

const ReportStats = ({ metrics }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className={`p-2 rounded-lg ${metric.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                                metric.color === 'orange' ? 'bg-orange-50 text-orange-600' :
                                    metric.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                                        'bg-emerald-50 text-emerald-600'
                            }`}>
                            <span className="material-symbols-outlined">{metric.icon}</span>
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${metric.trend.startsWith('+') ? 'text-green-500 bg-green-50' : 'text-red-500 bg-red-50'
                            }`}>
                            {metric.trend}
                        </span>
                    </div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{metric.label}</p>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">{metric.value}</h3>
                    <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full transition-all duration-1000 ${metric.color === 'blue' ? 'bg-blue-500' :
                                metric.color === 'orange' ? 'bg-orange-500' :
                                    metric.color === 'purple' ? 'bg-purple-500' :
                                        'bg-emerald-500'
                            }`} style={{ width: `${metric.progress}%` }}></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReportStats;
