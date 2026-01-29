import { teacherPerformanceData } from "../data/teacherPerformance.data";
import PerformanceHeader from "../components/PerformanceHeader";
import PerformanceFilters from "../components/PerformanceFilters";
import PerformanceKPICards from "../components/PerformanceKPICards";
import PerformanceCharts from "../components/PerformanceCharts";
import PerformanceWatchlist from "../components/PerformanceWatchlist";

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
