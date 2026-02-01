export default function Pagination() {
  return (
    <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
      <p className="text-sm text-slate-500">
        Showing <span className="font-medium text-slate-900">1</span> to{" "}
        <span className="font-medium text-slate-900">5</span> of{" "}
        <span className="font-medium text-slate-900">12</span> results
      </p>
      <div className="flex gap-2">
        <button
          className="px-3 py-1 text-sm border border-slate-200 rounded hover:bg-slate-50 text-slate-500 disabled:opacity-50 cursor-pointer"
          disabled
        >
          Previous
        </button>
        <button className="px-3 py-1 text-sm border border-slate-200 rounded hover:bg-slate-50 text-slate-700 cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
}
