/**
 * Field – standardized form input primitive
 *
 * label       : visible label text
 * id          : links label ↔ input
 * type        : any valid <input> type (default "text")
 * required    : appends * to label
 * error       : error message shown below input (also applies error ring)
 * helperText  : subtle hint shown below input (hidden when error is present)
 * leftIcon    : ReactNode placed inside the left edge of the input
 * rightIcon   : ReactNode placed inside the right edge of the input
 * rightSlot   : legacy alias for rightIcon (backward-compat)
 *
 * All other standard <input> props are forwarded transparently.
 */
export default function Field({
  label,
  id,
  type = "text",
  value,
  onChange,
  onKeyDown,
  placeholder,
  required = false,
  error = "",
  helperText = "",
  leftIcon = null,
  rightIcon = null,
  rightSlot = null,   // legacy alias
  autoFocus = false,
  autoComplete,
  disabled = false,
  className = "",
  inputClassName = "",
  ...rest
}) {
  const rightContent = rightIcon ?? rightSlot;
  const hasLeft = Boolean(leftIcon);
  const hasRight = Boolean(rightContent);

  return (
    <div className={`mb-6 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          {label}
          {required && (
            <span className="ml-0.5 text-rose-500" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <div className="relative">
        {hasLeft && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            {leftIcon}
          </div>
        )}

        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          disabled={disabled}
          required={required}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={
            error ? `${id}-error` : helperText ? `${id}-hint` : undefined
          }
          className={[
            "w-full py-3 bg-slate-50 border-2 rounded-lg transition-all",
            "focus:outline-none focus:border-slate-900",
            hasLeft ? "pl-10" : "pl-4",
            hasRight ? "pr-12" : "pr-4",
            error
              ? "border-rose-400 focus:border-rose-500 bg-rose-50/30"
              : "border-slate-200",
            disabled ? "opacity-50 cursor-not-allowed" : "",
            inputClassName,
          ]
            .filter(Boolean)
            .join(" ")}
          {...rest}
        />

        {hasRight && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-auto">
            {rightContent}
          </div>
        )}
      </div>

      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-rose-600">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-slate-400">
          {helperText}
        </p>
      )}
    </div>
  );
}
