import { useState } from 'react';

export default function GradingPanel({ grading, actions }) {
    const [score, setScore] = useState(grading.score);
    const [privateNoteEnabled, setPrivateNoteEnabled] = useState(grading.privateNote.enabled);

    return (
        <div className="flex-1 flex flex-col h-1/2 xl:h-full xl:w-5/12 bg-white dark:bg-slate-900">
            {/* Scrollable Grading Form */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 xl:p-8">
                <div className="max-w-2xl mx-auto space-y-8">
                    {/* Score Input Section */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                                Grade
                            </h3>
                            <span className="text-xs font-medium text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded dark:text-emerald-400">
                                Pass: &gt;{grading.passingThreshold}
                            </span>
                        </div>
                        <div className="flex items-end gap-3">
                            <div className="relative flex-1">
                                <input
                                    type="number"
                                    value={score}
                                    onChange={(e) => setScore(e.target.value)}
                                    placeholder="0"
                                    className="w-full text-4xl font-bold bg-transparent border-b-2 border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-0 px-0 py-2 text-slate-900 dark:text-white placeholder:text-slate-300 transition-colors"
                                />
                            </div>
                            <span className="text-2xl text-slate-400 font-medium pb-3 select-none">
                                / {grading.maxScore}
                            </span>
                        </div>
                    </div>

                    {/* Feedback Editor */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                                Feedback
                            </h3>

                            {/* Formatting Toolbar */}
                            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                                {grading.formattingTools.map((tool, index) => (
                                    <div key={index} className="flex items-center">
                                        <button
                                            className={`p-1 rounded transition-all ${tool.special
                                                    ? 'text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary'
                                                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                                                } hover:bg-white dark:hover:bg-slate-700`}
                                            title={tool.label}
                                        >
                                            <span className="material-symbols-outlined text-[18px]">
                                                {tool.icon}
                                            </span>
                                        </button>
                                        {index === 2 && (
                                            <div className="w-px h-3 bg-slate-300 dark:bg-slate-600 mx-1" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Feedback Content */}
                        <div className="min-h-[240px] w-full p-0 text-base leading-relaxed text-slate-700 dark:text-slate-300 bg-transparent border-none focus:ring-0 resize-none outline-none font-display">
                            {grading.feedback.paragraphs.map((para, index) => (
                                <p key={index} className="mb-4">
                                    {para.includes('Chicago Style') ? (
                                        <>
                                            {para.split('Chicago Style')[0]}
                                            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-1 rounded">
                                                Chicago Style
                                            </span>
                                            {para.split('Chicago Style')[1]}
                                        </>
                                    ) : (
                                        para
                                    )}
                                </p>
                            ))}
                            <p className="text-slate-400">{grading.feedback.placeholder}</p>
                        </div>
                    </div>

                    {/* Private Note Toggle */}
                    <div className="flex items-start gap-3 p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 rounded-lg">
                        <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-500 mt-0.5" style={{ fontSize: '20px' }}>
                            lock
                        </span>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                                {grading.privateNote.title}
                            </p>
                            <p className="text-xs text-yellow-700 dark:text-yellow-300/80 mt-1">
                                {grading.privateNote.description}
                            </p>
                        </div>
                        <div className="ml-auto">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={privateNoteEnabled}
                                    onChange={(e) => setPrivateNoteEnabled(e.target.checked)}
                                    className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-500" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Footer */}
            <div className="flex-shrink-0 p-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between gap-4 z-20">
                <button className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    {actions.returnToStudent}
                </button>
                <div className="flex gap-3">
                    <button className="px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        {actions.saveDraft}
                    </button>
                    <button className="px-8 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-white font-medium text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">check</span>
                        {actions.saveGrade}
                    </button>
                </div>
            </div>
        </div>
    );
}
