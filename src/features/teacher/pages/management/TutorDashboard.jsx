import React from 'react';
import TeacherHeader from '@/shared/components/layout/TeacherHeader';
import MetricCard from '@/features/teacher/components/management/MetricCard';
import ActiveClassCard from '@/features/teacher/components/management/ActiveClassCard';
import ScheduleList from '@/features/teacher/components/management/ScheduleList';
import QuickActions from '@/features/teacher/components/management/QuickActions';
import ActivityFeed from '@/features/teacher/components/management/ActivityFeed';
import { tutorDashboardData } from '@/features/teacher/data/management/tutorDashboard.data';

export default function TutorDashboard() {
    const { user, metrics, activeClass, upcomingClasses, quickActions, activities } = tutorDashboardData;

    return (
        <div className="bg-background-light min-h-screen flex flex-col font-display text-slate-900 overflow-x-hidden">
            {/* Shared Teacher Header */}
            <TeacherHeader activeNav="dashboard" user={user} />

            {/* Main Content */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8">
                {/* Page Heading */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">{user.greeting}</h1>
                    <p className="text-slate-500 font-normal">{user.subtitle}</p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {metrics.map((metric) => (
                        <MetricCard key={metric.id} data={metric} />
                    ))}
                </div>

                {/* Main Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Schedule */}
                    <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-slate-900">Today's Schedule</h3>
                            <button className="text-sm font-medium text-primary hover:text-blue-600 transition-colors">View Calendar</button>
                        </div>

                        {/* Active Class Card */}
                        <ActiveClassCard data={activeClass} />

                        {/* Upcoming Classes List */}
                        <ScheduleList classes={upcomingClasses} />
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-8">
                        {/* Quick Actions */}
                        <QuickActions actions={quickActions} />

                        {/* Recent Activity Feed */}
                        <ActivityFeed activities={activities} />

                        {/* Mini Calendar */}
                        <div className="bg-white border border-slate-200 rounded-lg p-5">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-slate-900">October 2023</h3>
                                <div className="flex gap-1">
                                    <button className="p-1 hover:bg-slate-100 rounded">
                                        <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                                    </button>
                                    <button className="p-1 hover:bg-slate-100 rounded">
                                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-500 mb-2">
                                <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                            </div>
                            <div className="grid grid-cols-7 gap-1 text-center text-sm">
                                <span className="p-1.5 text-slate-300">29</span>
                                <span className="p-1.5 text-slate-300">30</span>
                                <span className="p-1.5 hover:bg-slate-50 rounded cursor-pointer">1</span>
                                <span className="p-1.5 hover:bg-slate-50 rounded cursor-pointer">2</span>
                                <span className="p-1.5 hover:bg-slate-50 rounded cursor-pointer">3</span>
                                <span className="p-1.5 bg-primary text-white rounded-full shadow-sm shadow-primary/40 font-bold">4</span>
                                <span className="p-1.5 hover:bg-slate-50 rounded cursor-pointer">5</span>
                                <span className="p-1.5 hover:bg-slate-50 rounded cursor-pointer relative">6
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
                                </span>
                                <span className="p-1.5 hover:bg-slate-50 rounded cursor-pointer">7</span>
                                <span className="p-1.5 hover:bg-slate-50 rounded cursor-pointer">8</span>
                                <span className="p-1.5 hover:bg-slate-50 rounded cursor-pointer relative">9
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full"></span>
                                </span>
                                <span className="p-1.5 hover:bg-slate-50 rounded cursor-pointer">10</span>
                                <span className="p-1.5 hover:bg-slate-50 rounded cursor-pointer">11</span>
                                <span className="p-1.5 hover:bg-slate-50 rounded cursor-pointer">12</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
