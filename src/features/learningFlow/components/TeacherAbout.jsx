export default function TeacherAbout() {
    const subjects = [
        "Calculus I & II",
        "Linear Algebra",
        "AP Physics C",
        "SAT Math Prep",
        "Trigonometry"
    ];

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 space-y-6">
            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Subjects Taught</h3>
                <div className="flex flex-wrap gap-2">
                    {subjects.map((subject, index) => (
                        <span key={index} className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                            {subject}
                        </span>
                    ))}
                </div>
            </div>
            <div className="border-t border-slate-100 pt-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">About Me</h3>
                <div className="prose prose-slate max-w-none text-sm text-slate-600">
                    <p className="mb-3">
                        Hello! I'm Sarah, a passionate educator with a Master's in Mathematics from NYU. I
                        believe that anyone can master math with the right guidance and practice. My teaching
                        style is interactive and problem-based. I focus on helping students understand the "why"
                        behind formulas, not just memorizing them.
                    </p>
                    <p>
                        I have extensive experience preparing students for standardized tests (SAT, ACT, AP
                        Exams) and college-level coursework. Whether you're struggling to pass or aiming for an
                        A+, I can tailor my lessons to your specific needs and learning pace.
                    </p>
                </div>
            </div>
        </div>
    );
}
