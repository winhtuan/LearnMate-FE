import { useState } from 'react';

export default function DocumentPreview({ document }) {
    const [zoom, setZoom] = useState(document.zoom || 100);

    const handleZoomIn = () => setZoom(prev => Math.min(prev + 10, 200));
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 10, 50));

    return (
        <div className="flex-1 flex flex-col h-1/2 xl:h-full xl:w-7/12 border-b xl:border-b-0 xl:border-r border-slate-200 dark:border-slate-800 relative bg-slate-100 dark:bg-[#0c131a]">
            {/* Preview Toolbar */}
            <div className="h-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 shadow-sm z-10">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-500 text-lg">
                        {document.icon}
                    </span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                        {document.filename}
                    </span>
                    <span className="text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                        {document.fileSize}
                    </span>
                </div>

                {/* Zoom Controls */}
                <div className="flex items-center gap-1">
                    <button
                        onClick={handleZoomOut}
                        className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="Zoom Out"
                    >
                        <span className="material-symbols-outlined text-[20px]">remove</span>
                    </button>
                    <span className="text-xs font-mono w-10 text-center text-slate-500 dark:text-slate-400">
                        {zoom}%
                    </span>
                    <button
                        onClick={handleZoomIn}
                        className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="Zoom In"
                    >
                        <span className="material-symbols-outlined text-[20px]">add</span>
                    </button>
                    <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-2" />
                    <button
                        className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="Download"
                    >
                        <span className="material-symbols-outlined text-[20px]">download</span>
                    </button>
                </div>
            </div>

            {/* Document Content */}
            <div className="flex-1 overflow-auto p-8 flex justify-center custom-scrollbar">
                <div
                    className="w-full max-w-[800px] bg-white text-slate-900 shadow-lg min-h-[1000px] p-12"
                    style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
                >
                    <div className="space-y-6 select-none pointer-events-none opacity-90">
                        {/* Document Header */}
                        <div className="flex justify-between items-end border-b-2 border-slate-900 pb-4 mb-8">
                            <div>
                                <h1 className="text-3xl font-serif font-bold">
                                    {document.content.title}
                                </h1>
                                <p className="text-lg font-serif italic text-slate-600 mt-2">
                                    {document.content.subtitle}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="font-serif">{document.content.author}</p>
                                <p className="font-serif">{document.content.course}</p>
                                <p className="font-serif">{document.content.date}</p>
                            </div>
                        </div>

                        {/* Paragraphs */}
                        {document.content.paragraphs.map((paragraph, index) => (
                            <p key={index} className="font-serif text-lg leading-relaxed text-justify indent-12">
                                {paragraph}
                            </p>
                        ))}

                        {/* Sections */}
                        {document.content.sections.map((section, index) => (
                            <div key={index}>
                                <h2 className="text-xl font-serif font-bold mt-8 mb-4">
                                    {section.heading}
                                </h2>

                                {section.figure && (
                                    <div className="w-full h-48 bg-slate-200 mb-6 flex items-center justify-center text-slate-400 text-sm font-sans">
                                        {section.figure}
                                    </div>
                                )}

                                {section.content.map((para, pIndex) => (
                                    <p key={pIndex} className="font-serif text-lg leading-relaxed text-justify indent-12 mb-4">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
