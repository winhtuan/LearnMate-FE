function StudyStreak({ streak }) {
  return (
    <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-5 text-white flex items-center justify-between shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundImage: 'linear-gradient(to bottom right, #f59e0b, #ea580c)' }}>
      <div>
        <p className="text-xs text-amber-100 font-medium uppercase tracking-wide">Study Streak</p>
        <p className="text-2xl font-bold mt-1">{streak}</p>
      </div>
      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
        <span className="material-symbols-outlined">trending_up</span>
      </div>
    </div>
  );
}

export default StudyStreak;
