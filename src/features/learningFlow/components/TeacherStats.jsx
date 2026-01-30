export default function TeacherStats() {
    const stats = [
        { label: "Years Exp.", value: "8" },
        { label: "Students", value: "200+" },
        { label: "Hours", value: "1.5k" },
        { label: "Response", value: "100%", color: "text-green-600" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                    <div className={`text-2xl font-bold ${stat.color || "text-slate-900"}`}>{stat.value}</div>
                    <div className="text-xs font-medium uppercase tracking-wider text-slate-500">{stat.label}</div>
                </div>
            ))}
        </div>
    );
}
