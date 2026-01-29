export default function InstructorCard({ instructor }) {
  return (
    <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900 mb-4">Instructor</h3>
      <div className="flex items-center gap-4 mb-6">
        <div className="size-14 rounded-full bg-slate-200 overflow-hidden">
          <img alt={instructor.name} className="w-full h-full object-cover" src={instructor.avatar} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900">{instructor.name}</h4>
          <p className="text-sm text-slate-500">{instructor.department}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-600">
          <span className="material-symbols-outlined text-[18px]">mail</span>
          Email
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-600">
          <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
          Office Hrs
        </button>
      </div>
    </div>
  );
}
