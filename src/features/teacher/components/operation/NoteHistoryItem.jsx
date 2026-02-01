export default function NoteHistoryItem({ data }) {
  const { author, role, date, content, avatar, initials, initialsColor, tags, isPrivate, isImportant } = data;

  return (
    <div className="relative z-10 group pb-8 last:pb-0">
      <div className="flex gap-4">
        <div className="shrink-0 size-12 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-center">
          {avatar ? (
            <div 
              className="size-8 rounded-full bg-slate-200 dark:bg-slate-600 bg-cover bg-center" 
              style={{ backgroundImage: `url("${avatar}")` }}
            ></div>
          ) : (
            <div className={`size-8 rounded-full bg-${initialsColor || 'indigo'}-100 dark:bg-${initialsColor || 'indigo'}-900 flex items-center justify-center text-${initialsColor || 'indigo'}-600 dark:text-${initialsColor || 'indigo'}-300 font-bold text-xs`}>
              {initials}
            </div>
          )}
        </div>
        <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-100 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {author} <span className="font-normal text-slate-500 ml-1">• {role}</span>
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{date}</p>
            </div>
            <div className="flex gap-2">
              {isImportant && (
                <span className="material-symbols-outlined text-amber-400 text-[16px]" title="High Importance">star</span>
              )}
              {isPrivate && (
                <span className="material-symbols-outlined text-slate-300 text-[16px]" title="Private">lock</span>
              )}
              <button className="text-slate-300 hover:text-slate-500">
                <span className="material-symbols-outlined text-[16px]">more_horiz</span>
              </button>
            </div>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            {content}
          </p>
          {tags && tags.length > 0 && (
            <div className="mt-3 flex gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                    tag.type === "error" 
                      ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400" 
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
