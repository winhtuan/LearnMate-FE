import TeacherLayout from "@/features/teacher/components/operation/TeacherLayout";
import EarningHeader from "@/features/teacher/components/operation/EarningHeader";
import EarningFilters from "@/features/teacher/components/operation/EarningFilters";
import EarningStats from "@/features/teacher/components/operation/EarningStats";
import TransactionTable from "@/features/teacher/components/operation/TransactionTable";
import { earningData } from "@/features/teacher/data/operation/earning.data";

export default function Earnings() {
  const { header, stats, transactions } = earningData;

  return (
    <main className="flex-1 flex flex-col h-full overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full p-6 md:p-8 lg:p-10 flex flex-col gap-8">
        {/* Page Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{header.title}</h1>
          <p className="text-slate-500 dark:text-slate-400 text-base">{header.subtitle}</p>
        </div>
        
        <EarningStats stats={stats} />
        <EarningFilters />
        <TransactionTable transactions={transactions} />
      </div>
    </main>
  );
}
