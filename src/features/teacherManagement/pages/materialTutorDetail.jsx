import React, { useState } from 'react';
import { materialTutorDetailData } from '../data/materialTutorDetail.data';
import MaterialHeader from '../components/MaterialHeader';
import Breadcrumb from '../components/Breadcrumb';
import MaterialPageHeader from '../components/MaterialPageHeader';
import MaterialTabNavigation from '../components/MaterialTabNavigation';
import MaterialsToolbar from '../components/MaterialsToolbar';
import MaterialsGrid from '../components/MaterialsGrid';
import StorageStatsCards from '../components/StorageStatsCards';
import FoldersNavigationCard from '../components/FoldersNavigationCard';
import RecentUploadsCard from '../components/RecentUploadsCard';

export default function MaterialTutorDetail() {
    const {
        className,
        period,
        semester,
        room,
        breadcrumbs,
        navigation,
        tabs,
        materials,
        storage,
        totalFiles,
        folders,
        recentUploads,
        user
    } = materialTutorDetailData;

    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('Sort by: Name');

    return (
        <div className="bg-background-light font-display text-slate-900 antialiased min-h-screen flex flex-col">
            <MaterialHeader navigation={navigation} user={user} />

            <main className="flex-1 px-4 md:px-8 py-8 w-full max-w-[1400px] mx-auto flex flex-col gap-8">
                <Breadcrumb items={breadcrumbs} />

                <MaterialPageHeader
                    className={className}
                    period={period}
                    semester={semester}
                    room={room}
                />

                <MaterialTabNavigation tabs={tabs} />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-6">
                        <MaterialsToolbar
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            viewMode={viewMode}
                            setViewMode={setViewMode}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        />

                        <MaterialsGrid materials={materials} />
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-6">
                        <StorageStatsCards storage={storage} totalFiles={totalFiles} />
                        <FoldersNavigationCard folders={folders} />
                        <RecentUploadsCard recentUploads={recentUploads} />
                    </aside>
                </div>
            </main>
        </div>
    );
}
