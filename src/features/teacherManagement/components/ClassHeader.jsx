export default function ClassHeader({ navigation, user }) {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7edf3] bg-white px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-[#0d141b]">
          <div className="size-4 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">LearnMate</h2>
        </div>
        <div className="flex items-center gap-9">
          {navigation.map((item, index) => (
            <a
              key={index}
              className={`text-sm font-medium leading-normal ${
                item.active ? 'text-primary font-semibold' : 'text-[#0d141b]'
              }`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <label className="flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-[#4c739a] flex border-none bg-[#e7edf3] items-center justify-center pl-4 rounded-l-lg">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 border-none bg-[#e7edf3] text-[#0d141b] focus:outline-0 focus:ring-0 h-full placeholder:text-[#4c739a] px-4 rounded-r-lg text-sm font-normal"
              placeholder="Search"
            />
          </div>
        </label>
        <div className="flex gap-2">
          <button className="flex items-center justify-center rounded-lg size-10 bg-[#e7edf3] text-[#0d141b]">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
          </button>
          <button className="flex items-center justify-center rounded-lg size-10 bg-[#e7edf3] text-[#0d141b]">
            <span className="material-symbols-outlined text-[20px]">settings</span>
          </button>
        </div>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200"
          style={{ backgroundImage: `url("${user.avatar}")` }}
        />
      </div>
    </header>
  );
}
