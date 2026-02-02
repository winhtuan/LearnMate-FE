import { useState } from 'react';
import React from 'react';
import TeacherHeader from '@/shared/components/layout/TeacherHeader';
import MaterialHeader from '@/features/teacher/components/management/MaterialHeader';
import MaterialsToolbar from '@/features/teacher/components/management/MaterialsToolbar';
import FileUploadZone from '@/features/teacher/components/management/FileUploadZone';
import PendingUploadItem from '@/features/teacher/components/management/PendingUploadItem';
import UploadActionBar from '@/features/teacher/components/management/UploadActionBar';
import { uploadMaterialData } from '@/features/teacher/data/management/uploadMaterial.data';

export default function UploadMaterialPage() {
    const {
        navigation,
        user,
        breadcrumbs,
        pageTitle,
        pageDescription,
        uploadZone,
        pendingUploads: initialUploads,
        materialSettings,
        actionBar
    } = uploadMaterialData;

    const [pendingUploads, setPendingUploads] = useState(initialUploads);

    const handleRemoveUpload = (uploadId) => {
        setPendingUploads(prev => prev.filter(upload => upload.id !== uploadId));
    };

    const handleClearAll = () => {
        setPendingUploads([]);
    };

    const handleCancel = () => {
        console.log('Cancel upload');
        // Navigate back or reset state
    };

    const handlePublish = () => {
        console.log('Publishing materials');
        // API call to publish materials
    };

    return (
        <div className="bg-background-light min-h-screen font-display text-[#0e141b]">
            <div className="flex flex-col min-h-screen">
                <MaterialHeader navigation={navigation} user={user} />

                <main className="flex-1 flex flex-col max-w-[1440px] mx-auto w-full px-10 py-6 gap-6">
                    <Breadcrumb items={breadcrumbs} />

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Content: Upload Zone and Pending List */}
                        <div className="flex-1 flex flex-col gap-6">
                            {/* Page Heading */}
                            <div className="flex flex-col gap-1">
                                <h1 className="text-[#0e141b] text-3xl font-black leading-tight tracking-[-0.033em]">
                                    {pageTitle}
                                </h1>
                                <p className="text-[#4e7397] text-base">{pageDescription}</p>
                            </div>

                            {/* Drag & Drop Zone */}
                            <FileUploadZone uploadZone={uploadZone} />

                            {/* Pending Uploads Section */}
                            {pendingUploads.length > 0 && (
                                <div className="flex flex-col bg-white rounded-xl shadow-sm border border-slate-200">
                                    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                                        <h2 className="text-[#0e141b] text-lg font-bold">
                                            Pending Uploads ({pendingUploads.length})
                                        </h2>
                                        <button
                                            onClick={handleClearAll}
                                            className="text-xs text-red-500 font-semibold hover:underline"
                                        >
                                            Clear all
                                        </button>
                                    </div>
                                    <div className="divide-y divide-slate-100">
                                        {pendingUploads.map((upload) => (
                                            <PendingUploadItem
                                                key={upload.id}
                                                upload={upload}
                                                categories={materialSettings.categories}
                                                onRemove={handleRemoveUpload}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Sidebar: Material Settings */}
                        <aside className="w-full lg:w-80 flex flex-col gap-6">
                            <MaterialSettingsSidebar settings={materialSettings} />
                        </aside>
                    </div>

                    {/* Spacer for fixed bar */}
                    <div className="h-24" />
                </main>

                {/* Fixed Action Bar */}
                <UploadActionBar
                    actionBar={actionBar}
                    onCancel={handleCancel}
                    onPublish={handlePublish}
                />
            </div>
        </div>
    );
}
