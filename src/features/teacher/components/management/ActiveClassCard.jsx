import { Link } from "react-router-dom";

export default function ActiveClassCard({ data }) {
    const { title, time, description, status, studentCount, studentAvatars, thumbnail } = data;

    return (
        <div className="bg-white rounded-lg border border-primary/20 shadow-[0_0_0_1px_rgba(19,127,236,0.1)] overflow-hidden">
            <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-3">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            {status}
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-1">{title}</h4>
                        <p className="text-slate-500 text-sm mb-4">{time} • {description}</p>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex -space-x-2">
                                {studentAvatars.map((avatar, index) => (
                                    <div
                                        key={index}
                                        className="size-8 rounded-full border-2 border-white bg-cover"
                                        style={{ backgroundImage: `url('${avatar}')` }}
                                    />
                                ))}
                            </div>
                            <span className="text-xs text-slate-500 font-medium">+ {studentCount} students</span>
                        </div>
                    </div>
                    <div
                        className="hidden sm:block w-32 h-32 rounded-lg bg-slate-100 bg-cover bg-center shrink-0"
                        style={{ backgroundImage: `url('${thumbnail}')` }}
                    />
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                    <Link 
                        to="/teacher-ops/live-class"
                        className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm shadow-blue-500/30"
                    >
                        <span className="material-symbols-outlined text-[20px]">videocam</span>
                        Join Video Call
                    </Link>
                    <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-medium px-4 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">content_copy</span>
                        Copy Link
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-medium px-4 py-2.5 rounded-lg hover:bg-slate-50 transition-colors ml-auto">
                        <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
