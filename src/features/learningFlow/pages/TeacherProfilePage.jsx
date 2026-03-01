import StudentHeader from '@/shared/layout/StudentHeader';
import TeacherHero from "../components/TeacherHero";
import TeacherStats from "../components/TeacherStats";
import TeacherAbout from "../components/TeacherAbout";
import TeacherReviews from "../components/TeacherReviews";
import BookingSidebar from "../components/BookingSidebar";

export default function TeacherProfilePage() {
    return (
        <div className="bg-background-light font-display min-h-screen">
            {/* Navigation - Reusing Header component */}
            <StudentHeader activeTab="tutors" />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* LEFT COLUMN: Profile Info & Content (8 cols) */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <TeacherHero />
                        <TeacherStats />
                        <TeacherAbout />
                        <TeacherReviews />
                    </div>

                    {/* RIGHT COLUMN: Sticky Sidebar (4 cols) */}
                    <div className="lg:col-span-4">
                        <BookingSidebar />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 mt-12 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-slate-500">
                        <span className="material-symbols-outlined text-xl">school</span>
                        <span className="font-bold text-slate-700">LearnMate</span>
                        <span className="text-sm">© 2023</span>
                    </div>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <a className="hover:text-primary" href="#">Privacy Policy</a>
                        <a className="hover:text-primary" href="#">Terms of Service</a>
                        <a className="hover:text-primary" href="#">Help Center</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
