import React, { useState } from 'react';
import ClassDetailLayout from '../components/ClassDetailLayout';
import { materialTutorDetailData } from '../data/materialTutorDetail.data';
import MaterialsToolbar from '../components/MaterialsToolbar';
import MaterialsGrid from '../components/MaterialsGrid';
import StorageStatsCards from '../components/StorageStatsCards';
import FoldersNavigationCard from '../components/FoldersNavigationCard';
import RecentUploadsCard from '../components/RecentUploadsCard';

export default function MaterialTutorDetail() {
    const {
        materials,
        storage,
        totalFiles,
        folders,
        recentUploads
    } = materialTutorDetailData;

    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('Sort by: Name');

    return (
        <ClassDetailLayout activeTab="materials">
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
        </ClassDetailLayout>
    );
}
