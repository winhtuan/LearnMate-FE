export default function FileUploadZone({ uploadZone }) {
    return (
        <div className="flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 p-2">
            <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 px-6 py-16 hover:border-primary transition-colors cursor-pointer group">
                <div className="size-16 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl">cloud_upload</span>
                </div>
                <div className="flex max-w-[480px] flex-col items-center gap-2">
                    <p className="text-[#0e141b] text-xl font-bold text-center">
                        {uploadZone.title}
                    </p>
                    <p className="text-[#4e7397] text-sm font-normal text-center">
                        {uploadZone.description}
                    </p>
                </div>
                <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                    {uploadZone.buttonText}
                </button>
            </div>
        </div>
    );
}
