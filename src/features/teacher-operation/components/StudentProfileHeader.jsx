export default function StudentProfileHeader({ student }) {
  if (!student) return null;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 mb-8 relative overflow-hidden group">
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-700"></div>
      <div className="flex flex-col md:flex-row gap-6 relative z-10">
        <div className="shrink-0">
          <div 
            className="h-24 w-24 md:h-32 md:w-32 rounded-xl bg-slate-200 bg-cover bg-center shadow-inner" 
            style={{ backgroundImage: `url("${student.avatar}")` }}
          ></div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-1">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{student.name}</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wide">
              {student.status}
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">school</span> {student.grade}
            </span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span>ID #{student.id}</span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">cake</span> {student.dob}
            </span>
          </p>
          <div className="mt-4 flex items-center gap-4">
            <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/30 rounded-lg px-4 py-2 flex items-center gap-3 w-fit">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-1.5 rounded-full text-emerald-600 dark:text-emerald-400">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Learning Status</p>
                <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">{student.learningStatus?.label}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
            <span className="material-symbols-outlined text-[18px]">alternate_email</span>
            {student.email}
          </div>
        </div>
        <div className="flex md:flex-col justify-center gap-3 mt-4 md:mt-0 md:w-48">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-200 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">
            <span className="material-symbols-outlined text-[18px]">mail</span>
            Email Student
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-lg font-medium text-sm transition-colors shadow-sm shadow-blue-200 dark:shadow-none">
            <span className="material-symbols-outlined text-[18px]">edit</span>
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
