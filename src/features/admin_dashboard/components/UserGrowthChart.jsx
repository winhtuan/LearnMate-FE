import React from 'react';

const UserGrowthChart = () => {
    return (
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-border-light shadow-sm">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-lg font-bold">User Growth (30 Days)</h3>
                    <p className="text-sm text-[#6a7981]">Total registered users trend</p>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-bold text-primary">12,450</p>
                    <p className="text-xs text-green-500 font-bold">+12.5% increase</p>
                </div>
            </div>
            <div className="h-64 relative w-full overflow-hidden">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                    <path
                        d="M0,35 C10,32 20,38 30,30 C40,22 50,28 60,15 C70,12 80,18 90,8 L100,5"
                        fill="none"
                        stroke="#2d6f8f"
                        strokeLinecap="round"
                        strokeWidth="0.5"
                    ></path>
                    <path
                        d="M0,35 C10,32 20,38 30,30 C40,22 50,28 60,15 C70,12 80,18 90,8 L100,5 L100,40 L0,40 Z"
                        fill="url(#chartGradient)"
                        opacity="0.1"
                    ></path>
                    <defs>
                        <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#2d6f8f"></stop>
                            <stop offset="100%" stopColor="#2d6f8f" stopOpacity="0"></stop>
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 border-b border-gray-300">
                    <div className="border-t border-gray-400 w-full h-0"></div>
                    <div className="border-t border-gray-400 w-full h-0"></div>
                    <div className="border-t border-gray-400 w-full h-0"></div>
                </div>
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-bold text-[#6a7981] uppercase tracking-widest px-1">
                <span>Day 1</span>
                <span>Day 7</span>
                <span>Day 14</span>
                <span>Day 21</span>
                <span>Day 30</span>
            </div>
        </div>
    );
};

export default UserGrowthChart;
