export default function SearchBar({ placeholder = "Search...", onSearch }) {
  return (
    <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2.5 shadow-sm border border-slate-100 w-full max-w-md focus-within:ring-2 focus-within:ring-primary/20 transition-shadow">
      <span className="material-symbols-outlined text-slate-400">search</span>
      <input
        className="bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-400 w-full text-sm"
        placeholder={placeholder}
        type="text"
        onChange={(e) => onSearch && onSearch(e.target.value)}
      />
    </div>
  );
}
