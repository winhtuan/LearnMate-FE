export default function TransactionTable({ transactions }) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Date</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Class Details</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Session ID</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Amount</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Status</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {transactions.map((transaction, index) => (
              <tr key={index} className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{transaction.date}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-slate-900 dark:text-white">{transaction.class}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Student: {transaction.student} • {transaction.duration}</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-mono text-xs text-slate-500 dark:text-slate-400">{transaction.id}</td>
                <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{transaction.amount}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${transaction.statusBg} ${transaction.statusColor}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${transaction.dotColor}`}></span>
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-primary transition-colors font-medium inline-flex items-center gap-1 text-xs uppercase tracking-wide">
                    <span className="material-symbols-outlined text-[18px]">description</span>
                    Invoice
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 px-6 py-3 bg-surface-light dark:bg-surface-dark">
        <p className="text-xs text-slate-500 dark:text-slate-400">Showing 1-5 of 42 transactions</p>
        <div className="flex gap-2">
          <button className="rounded-md border border-slate-200 dark:border-slate-800 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50" disabled>Previous</button>
          <button className="rounded-md border border-slate-200 dark:border-slate-800 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Next</button>
        </div>
      </div>
    </div>
  );
}
