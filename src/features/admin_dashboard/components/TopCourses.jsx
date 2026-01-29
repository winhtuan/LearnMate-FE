import React from 'react';

const TopCourses = ({ courses }) => {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
            <div className="p-6 border-b border-slate-100">
                <h4 className="text-lg font-bold text-slate-900">Top Courses</h4>
                <p className="text-sm text-slate-500">By completion & rating</p>
            </div>
            <div className="p-6 flex flex-col gap-5 flex-1">
                {courses.map((course, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                        <div
                            className="h-12 w-12 rounded-lg bg-slate-100 bg-cover bg-center border border-slate-100 shadow-sm"
                            style={{ backgroundImage: `url('${course.image}')` }}
                        ></div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-slate-900 truncate group-hover:text-primary transition-colors">{course.title}</p>
                            <p className="text-[11px] font-medium text-slate-500 mt-0.5">{course.enrolled} enrolled</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-black text-primary">{course.rating}</p>
                            <div className="flex text-yellow-400">
                                <span className="material-symbols-outlined text-[12px] font-fill">star</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-6 border-t border-slate-100">
                <button className="w-full py-2 bg-slate-50 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-100 transition-colors border border-slate-200">
                    View All Course Reports
                </button>
            </div>
        </div>
    );
};

export default TopCourses;
