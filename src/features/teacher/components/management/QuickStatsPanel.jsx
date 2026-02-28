export default function QuickStatsPanel({ quickStats }) {
    return (
        <div className="bg-white border border-[#e7edf3] rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-[#0d141b] uppercase tracking-wider mb-4">
                Quick Stats
            </h3>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col p-3 bg-background-light rounded-lg">
                    <span className="text-[10px] font-bold text-[#4c739a] uppercase">Enrolled</span>
                    <span className="text-xl font-bold text-primary">{quickStats.enrolled}</span>
                </div>
                <div className="flex flex-col p-3 bg-background-light rounded-lg">
                    <span className="text-[10px] font-bold text-[#4c739a] uppercase">At Risk</span>
                    <span className="text-xl font-bold text-red-500">{quickStats.atRisk}</span>
                </div>
                <div className="flex flex-col p-3 bg-background-light rounded-lg">
                    <span className="text-[10px] font-bold text-[#4c739a] uppercase">Avg Grade</span>
                    <span className="text-xl font-bold text-green-500">{quickStats.avgGrade}</span>
                </div>
                <div className="flex flex-col p-3 bg-background-light rounded-lg">
                    <span className="text-[10px] font-bold text-[#4c739a] uppercase">Participation</span>
                    <span className="text-xl font-bold text-primary">{quickStats.participation}</span>
                </div>
            </div>
        </div>
    );
}
