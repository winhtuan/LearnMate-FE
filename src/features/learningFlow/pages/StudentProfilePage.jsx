import Header from "../../../shared/components/Header";
import { studentProfileData } from "../data/studentProfile.data";
import { useNavigate } from "react-router-dom";

export default function StudentProfilePage() {
    const navigate = useNavigate();
    const { user, completedCourses } = studentProfileData;

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900 selection:bg-primary/20 selection:text-primary">
            <Header activeTab="" />
            <main className="flex-1 py-8 sm:py-12">
                <div className="mx-auto flex max-w-5xl flex-col px-4 sm:px-6 lg:px-8">
                    {/* Profile Header */}
                    <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-start gap-6">
                            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-sm">
                                <img
                                    alt="User avatar"
                                    className="h-full w-full object-cover"
                                    src={user.avatar}
                                />
                            </div>
                            <div className="flex flex-col pt-2">
                                <h1 className="text-3xl font-bold tracking-tight text-slate-900">{user.name}</h1>
                                <div className="mt-2 flex items-center gap-3">
                                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20">
                                        {user.role}
                                    </span>
                                    <span className="flex items-center text-sm text-slate-500">
                                        <span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                        {user.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => navigate("/student-profile/edit")} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-0 sm:w-auto transition-colors">
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                            Edit Profile
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-1">
                        {/* Basic Information */}
                        <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
                            <div className="border-b border-slate-100 px-6 py-4">
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                                    <span className="material-symbols-outlined text-slate-400">person</span>
                                    Basic Information
                                </h3>
                            </div>
                            <div className="px-6 py-2">
                                <dl className="divide-y divide-slate-100">
                                    <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-3 sm:gap-4">
                                        <dt className="text-sm font-medium text-slate-500">Email Address</dt>
                                        <dd className="text-sm font-medium text-slate-900 sm:col-span-2">{user.email}</dd>
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-3 sm:gap-4">
                                        <dt className="text-sm font-medium text-slate-500">Phone Number</dt>
                                        <dd className="text-sm font-medium text-slate-900 sm:col-span-2">{user.phone}</dd>
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-3 sm:gap-4">
                                        <dt className="text-sm font-medium text-slate-500">Date Joined</dt>
                                        <dd className="text-sm font-medium text-slate-900 sm:col-span-2">{user.dateJoined}</dd>
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-3 sm:gap-4">
                                        <dt className="text-sm font-medium text-slate-500">Language Preference</dt>
                                        <dd className="text-sm font-medium text-slate-900 sm:col-span-2">{user.language}</dd>
                                    </div>
                                </dl>
                            </div>
                        </section>

                        {/* Completed Courses */}
                        <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
                            <div className="border-b border-slate-100 px-6 py-4">
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                                    <span className="material-symbols-outlined text-slate-400">workspace_premium</span>
                                    Completed Courses
                                </h3>
                            </div>
                            <div className="px-6 py-2">
                                <ul className="divide-y divide-slate-100">
                                    {completedCourses.map((course) => (
                                        <li key={course.id} className="flex flex-col py-4 sm:flex-row sm:items-center sm:justify-between gap-4">
                                            <div className="flex items-start gap-4">
                                                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${course.iconColorInfo.bg} ${course.iconColorInfo.text}`}>
                                                    <span className="material-symbols-outlined text-[20px]">{course.icon}</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <h4 className="text-sm font-semibold text-slate-900">{course.title}</h4>
                                                    <p className="text-sm text-slate-500">Instructor: {course.instructor}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                                <span className="material-symbols-outlined text-[18px] text-slate-400">event_available</span>
                                                <span>Completed: {course.completedDate}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
