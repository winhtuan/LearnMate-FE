export default function TeacherDetailPanel({ teacher, onBookClick, onMessageClick }) {
    if (!teacher) return null;

    return (
        <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 flex flex-col gap-6 rounded-xl bg-white border border-slate-200 shadow-sm p-6 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
                <div className="flex flex-col items-center text-center gap-3">
                    <div className="size-24 rounded-full bg-slate-200 bg-cover bg-center border-4 border-slate-50 shadow-md relative" data-alt={`Larger portrait of ${teacher.name}`} style={{ backgroundImage: `url('${teacher.imageDetail || teacher.image}')` }}>
                        {teacher.verified && (
                            <div className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow-sm">
                                <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                            </div>
                        )}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">{teacher.name}</h2>
                        <p className="text-sm text-slate-500">{teacher.superTutor ? "Super Tutor" : "Tutor"} • {teacher.location || "Remote"}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-50">
                        <span className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Response</span>
                        <span className="font-bold text-slate-900 mt-1">{teacher.responseTime || "N/A"}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-50">
                        <span className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Lessons</span>
                        <span className="font-bold text-slate-900 mt-1">{teacher.lessonsCount || "0"}</span>
                    </div>
                </div>
                {teacher.about && (
                    <div className="space-y-2">
                        <h4 className="text-sm font-bold text-slate-900">About</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {teacher.about}
                        </p>
                    </div>
                )}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-slate-900">October 2023</h4>
                        <div className="flex gap-1">
                            <button className="p-1 hover:bg-slate-100 rounded-full transition-colors"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
                            <button className="p-1 hover:bg-slate-100 rounded-full transition-colors"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-xs">
                        <div className="text-slate-400 py-1">Mo</div>
                        <div className="text-slate-400 py-1">Tu</div>
                        <div className="text-slate-400 py-1">We</div>
                        <div className="text-slate-400 py-1">Th</div>
                        <div className="text-slate-400 py-1">Fr</div>
                        <div className="text-slate-400 py-1">Sa</div>
                        <div className="text-slate-400 py-1">Su</div>
                        <div className="text-slate-300 py-2">29</div>
                        <div className="text-slate-300 py-2">30</div>
                        <div className="text-slate-800 py-2 hover:bg-slate-100 rounded-full cursor-pointer">1</div>
                        <div className="text-slate-800 py-2 hover:bg-slate-100 rounded-full cursor-pointer">2</div>
                        <div className="bg-primary text-white font-bold py-2 rounded-full cursor-pointer shadow-sm shadow-primary/30">3</div>
                        <div className="text-slate-800 py-2 hover:bg-slate-100 rounded-full cursor-pointer">4</div>
                        <div className="text-slate-300 py-2">5</div>
                        <div className="text-slate-800 py-2 hover:bg-slate-100 rounded-full cursor-pointer">6</div>
                        <div className="text-slate-800 py-2 hover:bg-slate-100 rounded-full cursor-pointer">7</div>
                        <div className="bg-primary/20 text-primary font-bold py-2 rounded-full cursor-pointer">8</div>
                        <div className="text-slate-800 py-2 hover:bg-slate-100 rounded-full cursor-pointer">9</div>
                        <div className="text-slate-800 py-2 hover:bg-slate-100 rounded-full cursor-pointer">10</div>
                        <div className="text-slate-300 py-2">11</div>
                        <div className="text-slate-300 py-2">12</div>
                    </div>
                    <div className="flex items-center gap-2 justify-center mt-2">
                        <span className="text-xs text-slate-500">Available: <span className="font-bold text-slate-800">3:00 PM, 4:30 PM</span></span>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-2">
                    <button onClick={onBookClick} className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-full transition-all shadow-md shadow-blue-200 flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">calendar_add_on</span>
                        Book Trial Lesson
                    </button>
                    <button onClick={onMessageClick} className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-3 rounded-full transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                        Message {teacher.name.split(' ')[0]}
                    </button>
                </div>
            </div>
        </div>
    );
}
