export default function LiveClassVideoStage({ teacher, participants }) {
  return (
    <section className="flex flex-1 flex-col relative bg-[#f6f7f8] dark:bg-[#101922] p-4 sm:p-6 gap-4 sm:gap-6 overflow-hidden w-full">
      {/* Main Video Feed (Teacher/Screen Share) */}
      <div className="flex-1 relative rounded-xl overflow-hidden shadow-sm ring-1 ring-slate-200 dark:ring-slate-800 bg-black group isolate">
        {/* Main Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${teacher.screenShareImage}')` }}></div>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>
        {/* Teacher Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
          <span className="size-2 rounded-full bg-red-500 animate-pulse"></span>
          <span>{teacher.name} ({teacher.role})</span>
        </div>
        {/* Picture-in-Picture Self View */}
        <div className="absolute bottom-4 right-4 w-32 sm:w-48 aspect-video bg-slate-800 rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${teacher.avatar}')` }}></div>
        </div>
        {/* Floating Control Bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 dark:border-slate-700 px-4 sm:px-6 py-2.5 rounded-full z-20 transition-all hover:scale-105">
          <div className="flex items-center gap-2 pr-4 border-r border-slate-200 dark:border-slate-700">
            <button className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors tooltip" title="Mute Microphone">
              <span className="material-symbols-outlined text-[20px]">mic</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors tooltip" title="Stop Camera">
              <span className="material-symbols-outlined text-[20px]">videocam</span>
            </button>
          </div>
          <button className="h-10 px-4 rounded-full bg-primary hover:bg-[#1170d2] text-white shadow-lg shadow-primary/25 transition-all flex items-center gap-2 font-medium text-sm">
            <span className="material-symbols-outlined text-[18px]">screen_share</span>
            <span className="hidden sm:inline">Share Screen</span>
          </button>
          <div className="pl-4 border-l border-slate-200 dark:border-slate-700 flex flex-col items-start justify-center gap-0.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Attendance</span>
            <label className="relative inline-flex items-center cursor-pointer group/toggle">
              <input defaultChecked className="sr-only peer" type="checkbox" />
              <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
              <span className="ml-2 text-xs font-bold text-green-600 dark:text-green-400 peer-checked:opacity-100 opacity-50">ON</span>
            </label>
          </div>
        </div>
      </div>
      
      {/* Participant Grid */}
      <div className="h-28 sm:h-36 shrink-0 flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide px-1">
        {participants.map((participant) => (
          <div key={participant.id} className={`relative aspect-video h-full rounded-lg overflow-hidden bg-slate-800 ${participant.isActiveSpeaker ? 'ring-2 ring-primary ring-offset-2 ring-offset-[#f6f7f8] dark:ring-offset-[#101922] shadow-md' : 'shadow-sm'} transition-transform hover:-translate-y-1`}>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${participant.avatar}')` }}></div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-2 pt-6">
              <p className="text-white text-xs font-medium truncate flex items-center gap-1">
                {participant.name} {participant.isActiveSpeaker && <span className="material-symbols-outlined text-[12px] text-primary">equalizer</span>}
              </p>
            </div>
            {participant.isMuted && (
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm p-1 rounded-full text-white/80">
                <span className="material-symbols-outlined text-[12px]">mic_off</span>
              </div>
            )}
          </div>
        ))}
        {/* More participants badge */}
        <div className="relative aspect-video h-full rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-700 cursor-pointer transition-colors">
          <span className="text-lg font-bold">+12</span>
          <span class="text-[10px] uppercase font-bold tracking-wider">More</span>
        </div>
      </div>
    </section>
  );
}
