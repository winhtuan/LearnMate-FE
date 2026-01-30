export default function AssignmentEditor() {
  return (
    <div className="w-full lg:flex-1 min-w-0 flex flex-col gap-6">
      {/* Document Card */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
        <div className="p-8 sm:p-10 flex flex-col gap-6">
          {/* Title Input */}
          <div className="group relative">
            <input
              className="w-full bg-transparent border-0 border-b border-transparent focus:border-slate-200 dark:focus:border-slate-700 focus:ring-0 px-0 py-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-600 transition-all duration-200"
              placeholder="Untitled Assignment"
              type="text"
            />
          </div>
          {/* Rich Text Editor Mockup */}
          <div className="relative min-h-[200px] group">
            <textarea
              className="w-full h-full min-h-[240px] bg-transparent border-0 focus:ring-0 p-0 text-base leading-relaxed text-slate-700 dark:text-slate-300 placeholder-slate-400 resize-none form-textarea"
              placeholder="Type '/' for commands or start writing instructions...

Describe the objectives of this assignment and provide any necessary context for your students."
            ></textarea>
            {/* Formatting Float (Mockup) */}
            <div className="absolute top-0 right-0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 flex items-center gap-1 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-lg p-1">
              <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-500">
                <span className="material-symbols-outlined text-lg">
                  format_bold
                </span>
              </button>
              <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-500">
                <span className="material-symbols-outlined text-lg">
                  format_italic
                </span>
              </button>
              <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-500">
                <span className="material-symbols-outlined text-lg">
                  format_list_bulleted
                </span>
              </button>
              <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-500">
                <span className="material-symbols-outlined text-lg">link</span>
              </button>
            </div>
          </div>
          {/* Attachments Section */}
          <div className="mt-4">
            <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-3">
              <span className="material-symbols-outlined text-lg text-slate-400">
                attachment
              </span>
              Attachments
            </h3>
            <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 py-8 px-6 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group/dropzone">
              <div className="h-10 w-10 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-full flex items-center justify-center mb-3 group-hover/dropzone:scale-110 transition-transform">
                <span className="material-symbols-outlined">cloud_upload</span>
              </div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-slate-500 mt-1">
                PDF, DOCX, PNG or JPG (max. 10MB)
              </p>
            </div>
            {/* Uploaded File Mockup (Example) */}
            <div className="mt-3 flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg">
                    picture_as_pdf
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    Worksheet_Algebra_v2.pdf
                  </span>
                  <span className="text-xs text-slate-500">2.4 MB</span>
                </div>
              </div>
              <button className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-xl">
                  delete
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Grading Criteria Block */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 sm:p-10 transition-colors duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-primary">
              fact_check
            </span>
            Grading Criteria
          </h3>
          <span className="text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
            Rubric
          </span>
        </div>
        <div className="space-y-3">
          {/* Header Row */}
          <div className="grid grid-cols-12 gap-4 text-xs font-semibold uppercase tracking-wider text-slate-500 px-2">
            <div className="col-span-8 sm:col-span-9">Criterion</div>
            <div className="col-span-3 sm:col-span-2 text-right">Points</div>
          </div>
          {/* Row 1 */}
          <div className="group flex items-start gap-4 p-2 -mx-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <div className="grid grid-cols-12 gap-4 w-full items-center">
              <div className="col-span-8 sm:col-span-9">
                <input
                  className="w-full bg-transparent border-0 p-0 text-sm font-medium text-slate-900 dark:text-white focus:ring-0 placeholder-slate-400"
                  type="text"
                  defaultValue="Content Accuracy"
                />
                <input
                  className="w-full bg-transparent border-0 p-0 text-xs text-slate-500 focus:ring-0 mt-0.5"
                  type="text"
                  defaultValue="All problems are solved correctly following the methods taught."
                />
              </div>
              <div className="col-span-3 sm:col-span-2 text-right">
                <input
                  className="w-full text-right bg-transparent border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-sm font-medium focus:border-primary focus:ring-1 focus:ring-primary"
                  type="number"
                  defaultValue="40"
                />
              </div>
              <div className="col-span-1 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-slate-400 hover:text-red-500 cursor-pointer">
                  <span className="material-symbols-outlined text-lg">
                    close
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="group flex items-start gap-4 p-2 -mx-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <div className="grid grid-cols-12 gap-4 w-full items-center">
              <div className="col-span-8 sm:col-span-9">
                <input
                  className="w-full bg-transparent border-0 p-0 text-sm font-medium text-slate-900 dark:text-white focus:ring-0 placeholder-slate-400"
                  type="text"
                  defaultValue="Clarity of Steps"
                />
                <input
                  className="w-full bg-transparent border-0 p-0 text-xs text-slate-500 focus:ring-0 mt-0.5"
                  placeholder="Description (optional)"
                  type="text"
                />
              </div>
              <div className="col-span-3 sm:col-span-2 text-right">
                <input
                  className="w-full text-right bg-transparent border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-sm font-medium focus:border-primary focus:ring-1 focus:ring-primary"
                  type="number"
                  defaultValue="30"
                />
              </div>
              <div className="col-span-1 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-slate-400 hover:text-red-500 cursor-pointer">
                  <span className="material-symbols-outlined text-lg">
                    close
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Add Button */}
          <button className="flex items-center gap-2 text-sm text-primary font-medium hover:underline mt-2 px-2 cursor-pointer">
            <span className="material-symbols-outlined text-lg">
              add_circle
            </span>
            Add Criterion
          </button>
        </div>
        {/* Total Points Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <span className="text-sm font-medium text-slate-500">
            Total Score Calculation
          </span>
          <div className="text-lg font-bold text-slate-900 dark:text-white">
            70 <span className="text-sm font-normal text-slate-500">pts</span>
          </div>
        </div>
      </div>
    </div>
  );
}
