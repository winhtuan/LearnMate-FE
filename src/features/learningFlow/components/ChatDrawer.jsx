export default function ChatDrawer({ isOpen, onClose, teacher }) {
    if (!teacher) return null;

    return (
        <>
            {/* Drawer Overlay */}
            <div
                className={`fixed inset-0 z-40 flex justify-end transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={onClose}></div>

                {/* Drawer Panel */}
                <div className={`relative flex h-full w-full max-w-[440px] flex-col bg-white shadow-2xl transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"} border-l border-slate-200 group/drawer`}>

                    {/* 1. Drawer Header */}
                    <header className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div
                                    className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 ring-2 ring-white"
                                    style={{ backgroundImage: `url("${teacher.image}")` }}
                                ></div>
                                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h2 className="text-slate-900 text-sm font-bold leading-tight">{teacher.name}</h2>
                                <p className="text-slate-500 text-xs font-normal leading-normal">{teacher.subjects?.[0] || "Tutor"} • Active now</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
                                <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                            </button>
                            <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
                                <span className="material-symbols-outlined text-[20px]">close</span>
                            </button>
                        </div>
                    </header>

                    {/* 2. Chat History (Scrollable) */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin bg-slate-50/50">
                        {/* Date Separator */}
                        <div className="flex justify-center py-2">
                            <span className="text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Today</span>
                        </div>

                        {/* Teacher Message */}
                        <div className="flex items-end gap-3 group">
                            <div
                                className="bg-center bg-no-repeat bg-cover rounded-full h-8 w-8 shrink-0 mb-1"
                                style={{ backgroundImage: `url("${teacher.image}")` }}
                            ></div>
                            <div className="flex flex-col items-start gap-1 max-w-[85%]">
                                <div className="flex items-center gap-2 px-1">
                                    <span className="text-xs text-slate-500">{teacher.name}</span>
                                    <span className="text-[10px] text-slate-400">2:28 PM</span>
                                </div>
                                <div className="p-3 bg-white border border-slate-100 rounded-2xl rounded-bl-sm text-sm text-slate-800 shadow-sm leading-relaxed">
                                    Hi there! I saw you were interested in {teacher.subjects?.[0] || "Calculus"}. Are you looking to focus on specific topics?
                                </div>
                            </div>
                        </div>

                        {/* System Message */}
                        <div className="flex flex-col items-center gap-1 py-2">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-100/50">
                                <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                                <p className="text-xs text-slate-500">Trial Lesson Request Sent • 2:30 PM</p>
                            </div>
                        </div>

                        {/* User Message */}
                        <div className="flex items-end gap-3 justify-end group">
                            <div className="flex flex-col items-end gap-1 max-w-[85%]">
                                <div className="flex items-center gap-2 px-1 flex-row-reverse">
                                    <span className="text-xs text-slate-500">Me</span>
                                    <span className="text-[10px] text-slate-400">2:32 PM</span>
                                </div>
                                <div className="p-3 bg-primary text-white rounded-2xl rounded-br-sm text-sm shadow-sm leading-relaxed">
                                    Yes, I need help with {teacher.subjects?.[0] || "Calculus"} specifically. I have a test coming up next week!
                                </div>
                            </div>
                            <div
                                className="bg-center bg-no-repeat bg-cover rounded-full h-8 w-8 shrink-0 mb-1 bg-slate-200"
                                style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8zHex-gd7df7noadxM1RTLjrkEjk4mKXs8JX-gWBrnnP4I6tytiDl86finATvh4fIOlq9J5tQfAQjuhViDiTQHXZnJK4y93EbrWWC8JlK-PqqIuBgQKdrQJNnu9AYyy38urfAIUicqAbhnv0h7uu1Sj2L8gu7JI1qoNZltqtpQLs1NosczCdqMTa_CfH_53CCpWWV0VO-bzSZ5agH8JyZs2JgPhS2mjNt51j7veRfJBaMtCF87B-rKzlw900RxIiAJewb3YK4Ak8")` }}
                            ></div>
                        </div>

                        {/* Teacher Message (Typing Indicator) */}
                        <div className="flex items-end gap-3 group">
                            <div
                                className="bg-center bg-no-repeat bg-cover rounded-full h-8 w-8 shrink-0 mb-1"
                                style={{ backgroundImage: `url("${teacher.image}")` }}
                            ></div>
                            <div className="flex flex-col items-start gap-1 max-w-[85%]">
                                <div className="p-3 bg-white border border-slate-100 rounded-2xl rounded-bl-sm text-sm text-slate-800 shadow-sm leading-relaxed">
                                    <div className="flex gap-1 items-center h-4">
                                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Footer Input Area */}
                    <footer className="p-4 bg-white border-t border-slate-100 shrink-0 z-20">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-end gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                                <button className="p-2 text-slate-400 hover:text-primary rounded-lg hover:bg-slate-100 transition-colors shrink-0" title="Attach file">
                                    <span className="material-symbols-outlined text-[20px]">attach_file</span>
                                </button>
                                <textarea
                                    className="w-full bg-transparent border-none p-2 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-0 resize-none max-h-32 scrollbar-thin outline-none"
                                    placeholder="Type a message..."
                                    rows="1"
                                    style={{ minHeight: "40px" }}
                                ></textarea>
                                <button className="p-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm shrink-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[20px]">send</span>
                                </button>
                            </div>
                            <div className="flex justify-between items-center px-1">
                                <p className="text-[10px] text-slate-400">Enter to send, Shift + Enter for new line</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
