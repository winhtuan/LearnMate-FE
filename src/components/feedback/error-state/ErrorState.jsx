/**
 * ErrorState – shown when something has gone wrong
 *
 * title       : error heading (default "Something went wrong")
 * description : detail text
 * onRetry     : callback – if provided, shows a Retry button
 */
export default function ErrorState({
  title = "Something went wrong",
  description,
  onRetry,
  className = "",
}) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 text-center ${className}`}>
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose-50 text-rose-400">
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
          <path
            d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="text-base font-semibold text-slate-700 mb-1">{title}</h3>
      {description && (
        <p className="text-sm text-slate-400 mb-5 max-w-xs">{description}</p>
      )}
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-sm font-medium text-sky-600 hover:text-sky-700 underline underline-offset-2"
        >
          Try again
        </button>
      )}
    </div>
  );
}
