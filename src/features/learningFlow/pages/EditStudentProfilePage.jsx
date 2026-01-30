import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../shared/components/Header";
import { studentProfileData } from "../data/studentProfile.data";

export default function EditStudentProfilePage() {
    const navigate = useNavigate();
    const { user } = studentProfileData;

    // Local state for form fields - initialized with data from studentProfile.data
    const [formData, setFormData] = useState({
        fullName: user.name,
        phone: user.phone,
        bio: "Life-long learner and passionate educator focusing on digital arts and UI design. I love exploring new tools and sharing knowledge with the community.", // This field wasn't in the data file, using default from HTML
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSave = () => {
        // In a real app, this would send an API request
        console.log("Saving profile:", formData);

        // Show simplified toast simulation or just navigate back
        // For now, let's just navigate back to profile after a brief delay
        setTimeout(() => {
            navigate("/student-profile");
        }, 500);
    };

    return (
        <div className="bg-background-light text-slate-900 font-display antialiased overflow-x-hidden min-h-screen flex flex-col">
            <Header activeTab="" />

            {/* Main Content */}
            <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl flex flex-col gap-6">
                    {/* Breadcrumbs */}
                    <nav className="flex text-sm text-slate-500">
                        <ol className="flex items-center gap-2">
                            <li><Link className="hover:text-primary transition-colors" to="/dashboard">Home</Link></li>
                            <li><span className="material-symbols-outlined text-base">chevron_right</span></li>
                            <li><Link className="hover:text-primary transition-colors" to="/settings">Settings</Link></li>
                            <li><span className="material-symbols-outlined text-base">chevron_right</span></li>
                            <li className="font-medium text-slate-900">Profile</li>
                        </ol>
                    </nav>

                    {/* Page Heading */}
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Update Profile</h1>
                        <p className="text-base text-slate-500">Manage your personal identity and account details.</p>
                    </div>

                    {/* Form Container */}
                    <div className="rounded-xl border border-slate-200 bg-surface-light shadow-sm bg-white">
                        {/* Profile Header / Avatar Upload */}
                        <div className="p-6 sm:p-8 border-b border-slate-200">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                <div className="relative group">
                                    <div
                                        className="h-24 w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden border-4 border-slate-100 shadow-inner bg-cover bg-center"
                                        style={{ backgroundImage: `url("${user.avatar}")` }}
                                    >
                                    </div>
                                    <button aria-label="Upload new photo" className="absolute bottom-0 right-0 p-2 bg-primary hover:bg-blue-600 text-white rounded-full shadow-lg transition-transform hover:scale-105">
                                        <span className="material-symbols-outlined text-xl">photo_camera</span>
                                    </button>
                                </div>
                                <div className="flex-1 text-center sm:text-left space-y-3">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">Profile Photo</h3>
                                        <p className="text-sm text-slate-500">Upload a new avatar. Recommended size 400x400px.</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                                        <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-lg">upload</span>
                                            Upload New
                                        </button>
                                        <button className="px-4 py-2 text-red-500 hover:bg-red-50 text-sm font-semibold rounded-lg transition-colors">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Fields */}
                        <div className="p-6 sm:p-8 space-y-8">
                            {/* Read Only Section */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 border-b border-slate-100 pb-2">
                                    <span className="material-symbols-outlined text-slate-400">lock</span>
                                    Account Information <span className="text-xs font-normal text-slate-400 ml-auto uppercase tracking-wide">Read Only</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">User ID</label>
                                        <div className="relative">
                                            <input
                                                className="w-full h-11 rounded-lg border-slate-200 bg-slate-100 text-slate-500 px-4 text-sm font-medium cursor-not-allowed focus:ring-0 focus:border-slate-200"
                                                disabled
                                                type="text"
                                                defaultValue="84920-XM"
                                            />
                                            <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400 text-lg">lock</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Email Address</label>
                                        <div className="relative">
                                            <input
                                                className="w-full h-11 rounded-lg border-slate-200 bg-slate-100 text-slate-500 px-4 text-sm font-medium cursor-not-allowed focus:ring-0 focus:border-slate-200"
                                                disabled
                                                type="email"
                                                defaultValue={user.email}
                                            />
                                            <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400 text-lg">lock</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Editable Section */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 border-b border-slate-100 pb-2">
                                    <span className="material-symbols-outlined text-slate-400">edit</span>
                                    Personal Details
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700" htmlFor="fullName">Full Name</label>
                                        <input
                                            className="w-full h-11 rounded-lg border-slate-200 bg-white text-slate-900 px-4 text-base focus:border-primary focus:ring-primary transition-shadow shadow-sm placeholder:text-slate-400"
                                            id="fullName"
                                            type="text"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700" htmlFor="phone">Phone Number</label>
                                        <input
                                            className="w-full h-11 rounded-lg border-slate-200 bg-white text-slate-900 px-4 text-base focus:border-primary focus:ring-primary transition-shadow shadow-sm placeholder:text-slate-400"
                                            id="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <div className="flex justify-between">
                                            <label className="text-sm font-medium text-slate-700" htmlFor="bio">Bio</label>
                                            <span className="text-xs text-slate-400">Max 500 characters</span>
                                        </div>
                                        <textarea
                                            className="w-full rounded-lg border-slate-200 bg-white text-slate-900 p-4 text-base focus:border-primary focus:ring-primary transition-shadow shadow-sm placeholder:text-slate-400 resize-y min-h-[120px]"
                                            id="bio"
                                            rows="4"
                                            value={formData.bio}
                                            onChange={handleChange}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Footer */}
                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 rounded-b-xl flex flex-col-reverse sm:flex-row items-center justify-end gap-3">
                            <button
                                onClick={() => navigate("/student-profile")}
                                className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-100 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-primary text-white font-medium text-sm hover:bg-blue-600 shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined text-[18px]">save</span>
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
