/**
 * EmptyState – shown when a list or page has no content
 *
 * icon        : ReactNode (large icon/illustration)
 * title       : primary message
 * description : secondary hint text
 * action      : ReactNode (e.g. a Button)
 */
export default function EmptyState({ icon, title, description, action, className = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 text-center ${className}`}>
      {icon && (
        <div className="mb-4 text-slate-300 [&>*]:h-14 [&>*]:w-14">{icon}</div>
      )}
      {title && (
        <h3 className="text-base font-semibold text-slate-700 mb-1">{title}</h3>
      )}
      {description && (
        <p className="text-sm text-slate-400 mb-5 max-w-xs">{description}</p>
      )}
      {action}
    </div>
  );
}
