import React, { useState } from 'react';
import ClassCard from '../components/ClassCard';
import FilterChips from '../components/FilterChips';
import { teacherClassesData } from '../data/teacherClasses.data';

export default function TutorManagementClass() {
    const { user, pageTitle, pageDescription, classes, navLinks } = teacherClassesData;
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('Active');

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col font-display">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 w-full bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800">
                <div className="px-4 md:px-8 lg:px-12 flex h-16 items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-2xl">school</span>
                        </div>
                        <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">LearnMate</h2>
                    </div>

                    {/* Navigation Links (Desktop) */}
                    <nav className="hidden md:flex items-center gap-8 ml-12 mr-auto">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                className={link.active
                                    ? "text-primary font-semibold text-sm leading-normal border-b-2 border-primary py-5"
                                    : "text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
                                }
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-slate-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                            <span className="material-symbols-outlined text-[24px]">notifications</span>
                            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-surface-dark"></span>
                        </button>
                        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>
                        <button className="flex items-center gap-3 group">
                            <div
                                className="bg-center bg-no-repeat bg-cover rounded-full size-9 border border-gray-200 dark:border-gray-700"
                                style={{ backgroundImage: `url('${user.avatar}')` }}
                            />
                            <span className="hidden lg:block text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                                {user.name}
                            </span>
                            <span className="material-symbols-outlined text-slate-400 text-sm hidden lg:block">expand_more</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-8">
                {/* Page Header & Actions */}
                <div className="flex flex-col gap-8 mb-10">
                    {/* Title Section */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="space-y-1">
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{pageTitle}</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-base">{pageDescription}</p>
                        </div>
                    </div>

                    {/* Controls Toolbar (Search, Filter, Create) */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-1">
                        <div className="flex flex-col md:flex-row w-full lg:w-auto items-start md:items-center gap-4 flex-1">
                            {/* Search Bar */}
                            <div className="relative w-full md:w-80 group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
                                </div>
                                <input
                                    className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-surface-dark text-slate-900 dark:text-white pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 shadow-sm transition-all"
                                    placeholder="Search for a class..."
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Filter Chips */}
                            <FilterChips activeFilter={activeFilter} onFilterChange={setActiveFilter} />
                        </div>

                        {/* Primary Action */}
                        <button className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition-all w-full lg:w-auto">
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            Create New Class
                        </button>
                    </div>
                </div>

                {/* Classes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {classes.map((classData) => (
                        <ClassCard key={classData.id} classData={classData} />
                    ))}

                    {/* Empty State / New Card Placeholder */}
                    <div className="group relative flex flex-col justify-center items-center bg-gray-50 dark:bg-surface-dark/30 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-5 min-h-[200px] hover:border-primary hover:bg-white dark:hover:bg-surface-dark transition-all duration-200 cursor-pointer text-slate-400 hover:text-primary">
                        <span className="material-symbols-outlined text-[32px] mb-2 transition-transform group-hover:scale-110">add_circle</span>
                        <span className="text-sm font-semibold">Create another class</span>
                    </div>
                </div>
            </main>
        </div>
    );
}
