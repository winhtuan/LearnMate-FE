import { teacherPerformanceData } from "@/features/teacher/data/operation/teacherPerformance.data";
import TeacherLayout from "@/features/teacher/components/operation/TeacherLayout";
import PerformanceHeader from "@/features/teacher/components/operation/PerformanceHeader";
import PerformanceFilters from "@/features/teacher/components/operation/PerformanceFilters";
import PerformanceKPICards from "@/features/teacher/components/operation/PerformanceKPICards";
import PerformanceCharts from "@/features/teacher/components/operation/PerformanceCharts";
import PerformanceWatchlist from "@/features/teacher/components/operation/PerformanceWatchlist";

export default function TeacherPerformance() {
  const { header, filters, kpiCards, charts, watchlist } = teacherPerformanceData;

  return (
    <main className="flex-1 flex flex-col h-full overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full p-6 md:p-8 lg:p-10 flex flex-col gap-8">
        <PerformanceHeader header={header} />
        <PerformanceFilters filters={filters} />
        <PerformanceKPICards cards={kpiCards} />
        <PerformanceCharts charts={charts} />
        <PerformanceWatchlist watchlist={watchlist} />
        
        <footer className="flex justify-between items-center text-sm text-slate-400 dark:text-slate-500 pt-6 border-t border-slate-200 dark:border-slate-800">
            <p>© 2023 LearnMate Inc.</p>
            <div className="flex gap-4">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Support</a>
            <a className="hover:text-primary transition-colors" href="#">System Status</a>
            </div>
        </footer>
      </div>
    </main>
  );
}
