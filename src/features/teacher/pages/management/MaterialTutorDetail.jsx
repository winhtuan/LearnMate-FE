import React, { useState } from 'react';
import TeacherHeader from '@/shared/components/layout/TeacherHeader';
import MaterialPageHeader from '@/features/teacher/components/management/MaterialPageHeader';
import MaterialSettingsSidebar from '@/features/teacher/components/management/MaterialSettingsSidebar';
import FoldersNavigationCard from '@/features/teacher/components/management/FoldersNavigationCard';
import StorageStatsCards from '@/features/teacher/components/management/StorageStatsCards';
import RecentUploadsCard from '@/features/teacher/components/management/RecentUploadsCard';
import MaterialsGrid from '@/features/teacher/components/management/MaterialsGrid';
import { materialTutorDetailData } from '@/features/teacher/data/management/materialTutorDetail.data';

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
