export default function AssignmentHeader() {
  return (
    <header className="bg-surface-light border-b border-slate-200 px-6 py-5 md:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Assignments
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Manage and track student assignments across all your classes.
            </p>
          </div>
          <button className="bg-primary hover:bg-blue-600 text-white font-semibold py-2.5 px-5 rounded-lg shadow-sm shadow-blue-200 flex items-center gap-2 transition-all active:scale-95 cursor-pointer">
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span>Create Assignment</span>
          </button>
        </div>
      </div>
    </header>
  );
}
