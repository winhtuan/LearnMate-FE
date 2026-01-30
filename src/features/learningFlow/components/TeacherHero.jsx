export default function TeacherHero() {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Avatar */}
                <div className="relative shrink-0">
                    <div className="size-32 rounded-full overflow-hidden border-4 border-slate-50 shadow-md">
                        <img
                            alt="Profile picture of Sarah Jenkins"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9fikTWjwCYXSC2dkNocaG4alArvDisons9RHdh9YBVNsRPxXfhWca-UeicyeoKwPCQ52ieHO4MxhIRQFxl-58WC9_pyWuZ0x_onLEo6Cj5GbFiW6QaGpsDaqL89HgBVEmZs7WnQ3Ptjd8xmPnbHRVZQnwfgyY_DidYGqd4US4L5YEdMpOSInwOZFme0qgHm6o0iavKzjTlbKxKwYHNrtid33EDy37OffUx2SqLji2ZlPWlaC4mINBi82DwuKH35kNE01UnqGQaec"
                        />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-green-500 border-2 border-white size-5 rounded-full" title="Online Now"></div>
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0 pt-2">
                    <div className="flex items-center gap-2 mb-1">
                        <h1 className="text-2xl font-bold text-slate-900 truncate">Sarah Jenkins</h1>
                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-blue-700/10">
                            <span className="material-symbols-outlined text-[14px] filled">verified</span>
                            Verified
                        </span>
                    </div>
                    <p className="text-base text-slate-500 font-medium mb-3">Expert Math & Physics Tutor | 8+ Years Experience</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-4">
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-yellow-400 text-[20px] filled">star</span>
                            <span className="font-bold text-slate-900">4.9</span>
                            <span className="text-slate-400">(120 reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[18px] text-slate-400">location_on</span>
                            New York, USA
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[18px] text-slate-400">translate</span>
                            English, Spanish
                        </div>
                    </div>
                    {/* Short Bio Snippet */}
                    <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                        I specialize in making complex math and physics concepts accessible to high school and college students.
                        My goal is not just to improve grades, but to build confidence and genuine interest in STEM subjects.
                    </p>
                </div>
            </div>
        </div>
    );
}
