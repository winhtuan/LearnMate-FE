import { Link } from "react-router-dom";

export default function EarningHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7f3eb] dark:border-[#1f422b] bg-white dark:bg-[#162e20] px-6 py-3 lg:px-10">
      <div className="flex items-center gap-4 text-[#0d1b12] dark:text-[#f0fdf4]">
        <div className="size-8 flex items-center justify-center text-[#13ec5b]">
          <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">LearnMate</h2>
      </div>
      
      {/* Desktop Nav Links */}
      <div className="hidden md:flex flex-1 justify-center gap-8">
        <Link to="#" className="text-[#0d1b12] dark:text-[#f0fdf4]/70 hover:text-[#13ec5b] dark:hover:text-[#13ec5b] text-sm font-medium leading-normal transition-colors">Dashboard</Link>
        <Link to="#" className="text-[#0d1b12] dark:text-[#f0fdf4]/70 hover:text-[#13ec5b] dark:hover:text-[#13ec5b] text-sm font-medium leading-normal transition-colors">Classes</Link>
        <Link to="#" className="text-[#0d1b12] dark:text-[#f0fdf4] text-sm font-bold leading-normal border-b-2 border-[#13ec5b] pb-0.5">Finance</Link>
        <Link to="#" className="text-[#0d1b12] dark:text-[#f0fdf4]/70 hover:text-[#13ec5b] dark:hover:text-[#13ec5b] text-sm font-medium leading-normal transition-colors">Messages</Link>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-[#e7f3eb] dark:bg-[#1f422b] text-[#0d1b12] dark:text-[#f0fdf4] hover:bg-[#13ec5b]/20 transition-colors">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
        </button>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-[#13ec5b]/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj4bLmpr_rZmxVp5utxIsGn2_Nc0DDUkqmCT5mqjtg-_UIGmvlBtzVjw-wiDEG-X3pxrAG5dZOXdl47JSlpE0zbUnfoHTOyMo9Z4GX1RqvX-rUrvU7NaYmgE6LLmAhrCcbUtcVk03YW8LEszPNnYUJfU-wEFmEr-UAtcwOx2iqUnR5_foBjQa7T1OB8Yq5Wl6dherapGF2VlqZbS8vijI1axOpfwaJlAaKTs-TqQW6miScj2q4MzjLdoUr9bI3J0KkLDO5__1TBYM")' }}></div>
      </div>
    </header>
  );
}
