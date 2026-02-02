export default function ActionSidebar({ needsAttention }) {
  return (
    <aside className="w-full lg:w-80 flex flex-col gap-6">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-bold text-slate-900">Needs Attention</h3>
          <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-bold rounded-full">
            {needsAttention.length * 2} ACTIONS
          </span>
        </div>
        <div className="space-y-5">
          {needsAttention.map((student) => (
            <div key={student.id} className="flex items-start gap-3">
              <div
                className="size-9 rounded-full bg-slate-100 flex-shrink-0 bg-cover bg-center"
                style={{ backgroundImage: `url("${student.avatar}")` }}
              ></div>
              <div className="flex-1">
                <p className="text-xs font-bold text-slate-900">
                  {student.name}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {student.issue}
                </p>
                <div className="flex gap-2 mt-2">
                  <button className="text-[10px] font-bold text-primary hover:underline uppercase cursor-pointer">
                    {student.actions[0]}
                  </button>
                  <button className="text-[10px] font-bold text-slate-400 hover:text-slate-600 uppercase cursor-pointer">
                    {student.actions[1]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-6 py-2 text-xs font-bold text-slate-500 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
          VIEW ALL ALERTS
        </button>
      </div>
      <div className="bg-indigo-600 rounded-xl shadow-md p-6 text-white overflow-hidden relative">
        <div className="relative z-10">
          <h4 className="text-sm font-semibold opacity-90">
            Ready for Grading
          </h4>
          <p className="text-3xl font-bold mt-1">24</p>
          <p className="text-[11px] mt-2 opacity-80 leading-relaxed">
            Submissions from 2 active assignments are waiting for your review.
          </p>
          <button className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-bold transition-all w-full cursor-pointer">
            OPEN GRADEBOOK
          </button>
        </div>
        <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[120px] text-white/10 pointer-events-none">
          edit_note
        </span>
      </div>
    </aside>
  );
}
