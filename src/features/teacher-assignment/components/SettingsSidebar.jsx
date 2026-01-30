export default function SettingsSidebar() {
  return (
    <aside className="w-full lg:w-80 shrink-0 lg:sticky lg:top-24 space-y-6">
      {/* Publishing Settings Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 transition-colors duration-300">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">
          Publishing Settings
        </h2>
        <div className="space-y-6">
          {/* Class Selector */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              Assign to
            </label>
            <div className="relative">
              <select className="w-full pl-3 pr-10 py-2.5 text-sm bg-slate-50 border-slate-200 rounded-lg focus:ring-primary focus:border-primary text-slate-900">
                <option>Algebra 101 (All Students)</option>
                <option>Geometry B</option>
                <option>Adv. Calculus</option>
              </select>
            </div>
          </div>
          {/* Due Date */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              Due Date
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-[20px]">
                calendar_month
              </span>
              <input
                className="w-full pl-10 pr-3 py-2.5 text-sm bg-slate-50 border-slate-200 rounded-lg focus:ring-primary focus:border-primary text-slate-900"
                type="datetime-local"
              />
            </div>
          </div>
          {/* Visibility */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Visibility
            </label>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                <input
                  defaultChecked
                  className="h-4 w-4 text-primary border-slate-300 focus:ring-primary bg-transparent text-blue-600 form-radio"
                  name="visibility"
                  type="radio"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-900">
                    Publish Immediately
                  </span>
                  <span className="text-xs text-slate-500">
                    Students notified now
                  </span>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                <input
                  className="h-4 w-4 text-primary border-slate-300 focus:ring-primary bg-transparent text-blue-600 form-radio"
                  name="visibility"
                  type="radio"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-900">
                    Schedule for Later
                  </span>
                  <span className="text-xs text-slate-500">
                    Auto-publish on date
                  </span>
                </div>
              </label>
            </div>
          </div>
          <hr className="border-slate-100" />
          {/* Summary Points */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Max Points</span>
            <span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">
              70 pts
            </span>
          </div>
        </div>
      </div>
      {/* Teacher Tips */}
      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 transition-colors duration-300">
        <div className="flex gap-3">
          <span className="material-symbols-outlined text-primary text-xl">
            lightbulb
          </span>
          <div className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-primary block mb-1">Pro Tip</strong>
            Adding a clear rubric helps students understand expectations and
            reduces grade disputes later.
          </div>
        </div>
      </div>
    </aside>
  );
}
