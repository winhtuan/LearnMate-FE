import React from 'react';
import StepIndicator from '../components/StepIndicator';
import FileUpload from '../components/FileUpload';
import ProfilePreview from '../components/ProfilePreview';
import { tutorRegisterData } from '../data/tutorRegister.data';

export default function TutorRegister() {
    const { steps, header, sections, profilePreview } = tutorRegisterData;

    return (
        <main className="max-w-6xl mx-auto px-6 py-12 bg-background-light text-slate-900 font-display transition-colors duration-200">
            <div className="flex flex-col items-center mb-16">
                <StepIndicator steps={steps} />
                <div className="text-center max-w-2xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">{header.title}</h2>
                    <p className="text-slate-500">{header.subtitle}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Degree & Certification Section */}
                    <section className="md:col-span-2 bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined">{sections.degree.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 leading-none">{sections.degree.title}</h3>
                                <p className="text-xs text-slate-400 mt-1">{sections.degree.subtitle}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FileUpload
                                label="University Diploma"
                                subLabel="Click to upload"
                                secondaryText="PDF, JPG (max. 5MB)"
                                icon="upload_file"
                            />
                            <FileUpload
                                label="Teaching Certificates"
                                subLabel="Drop files here"
                                secondaryText="Professional teaching licenses"
                                icon="verified"
                            />
                        </div>
                    </section>

                    {/* Expertise Section */}
                    <section className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                                <span className="material-symbols-outlined">{sections.expertise.icon}</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">{sections.expertise.title}</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700">Experience</label>
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl h-11 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none text-slate-700">
                                    {sections.expertise.experienceOptions.map((opt) => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700">Subject Focus</label>
                                <input
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl h-11 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-700"
                                    placeholder="e.g. Advanced Calculus"
                                    type="text"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Identity Section */}
                    <section className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                <span className="material-symbols-outlined">{sections.identity.icon}</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">{sections.identity.title}</h3>
                        </div>
                        <p className="text-xs text-slate-500 mb-6 leading-relaxed">{sections.identity.description}</p>
                        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-slate-400">id_card</span>
                                    <span className="text-sm font-bold text-slate-900">Passport/ID</span>
                                </div>
                                <button className="bg-white px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-200 hover:bg-primary hover:text-white transition-all text-slate-700">Upload</button>
                            </div>
                        </div>
                    </section>

                    {/* Submit Section */}
                    <div className="md:col-span-2 flex flex-col gap-6 mt-4">
                        <div className="flex items-start gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
                            <span className="material-symbols-outlined text-primary text-[22px]">info</span>
                            <p className="text-sm text-blue-900/80 leading-relaxed">
                                LearnMate prioritizes security. All documents are encrypted. Reviews are completed within <strong>24-48 hours</strong>.
                            </p>
                        </div>
                        <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200">
                            <div className="flex items-center gap-2">
                                <span className="size-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                <span className="text-xs font-medium text-slate-500">Draft saved automatically</span>
                            </div>
                            <button className="bg-primary hover:bg-blue-600 text-white font-bold py-3.5 px-10 rounded-xl shadow-xl shadow-primary/20 transition-all flex items-center gap-2 group">
                                <span>Submit Certification</span>
                                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Custom Sidebar Component */}
                <ProfilePreview data={profilePreview} />
            </div>

            <footer className="mt-24 pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <p className="font-bold text-slate-600">LearnMate Onboarding</p>
                    <p>© 2023 LearnMate Inc. Secure Portal</p>
                </div>
                <div className="flex gap-8 font-medium">
                    <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                    <a className="hover:text-primary transition-colors" href="#">Tutor Terms</a>
                    <a className="hover:text-primary transition-colors" href="#">Support</a>
                </div>
            </footer>
        </main>
    );
}
