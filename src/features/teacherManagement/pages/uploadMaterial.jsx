import { useState } from 'react';
import { uploadMaterialData } from '../data/uploadMaterial.data';
import MaterialHeader from '../components/MaterialHeader';
import Breadcrumb from '../components/Breadcrumb';
import FileUploadZone from '../components/FileUploadZone';
import PendingUploadItem from '../components/PendingUploadItem';
import MaterialSettingsSidebar from '../components/MaterialSettingsSidebar';
import UploadActionBar from '../components/UploadActionBar';

export default function UploadMaterial() {
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
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-[#0e141b] dark:text-slate-200">
            <div className="flex flex-col min-h-screen">
                <MaterialHeader navigation={navigation} user={user} />

                <main className="flex-1 flex flex-col max-w-[1440px] mx-auto w-full px-10 py-6 gap-6">
                    <Breadcrumb items={breadcrumbs} />

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Content: Upload Zone and Pending List */}
                        <div className="flex-1 flex flex-col gap-6">
                            {/* Page Heading */}
                            <div className="flex flex-col gap-1">
                                <h1 className="text-[#0e141b] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
                                    {pageTitle}
                                </h1>
                                <p className="text-[#4e7397] text-base">{pageDescription}</p>
                            </div>

                            {/* Drag & Drop Zone */}
                            <FileUploadZone uploadZone={uploadZone} />

                            {/* Pending Uploads Section */}
                            {pendingUploads.length > 0 && (
                                <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                                    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                                        <h2 className="text-[#0e141b] dark:text-white text-lg font-bold">
                                            Pending Uploads ({pendingUploads.length})
                                        </h2>
                                        <button
                                            onClick={handleClearAll}
                                            className="text-xs text-red-500 font-semibold hover:underline"
                                        >
                                            Clear all
                                        </button>
                                    </div>
                                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
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
