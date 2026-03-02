/**
 * Button – standardized UI primitive
 *
 * variant : primary | secondary | outline | danger | ghost
 *           (legacy aliases kept for backward-compat: blue | red | green |
 *            blueSoft | redSoft | greenSoft)
 * size    : sm | md | lg
 * loading : shows an inline spinner and prevents interaction
 * disabled: visually muted + non-interactive
 * fullWidth: stretches to parent width
 * leftIcon / rightIcon: any React node rendered beside the label
 * type    : button | submit | reset
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  leftIcon = null,
  rightIcon = null,
  ...rest
}) {
  const passthrough = Object.fromEntries(
    Object.entries(rest).filter(
      ([k]) => k.startsWith("data-") || k.startsWith("aria-")
    )
  );

  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
  };

  const variants = {
    // Standard
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900",
    secondary:
      "bg-slate-100 text-slate-800 hover:bg-slate-200 focus-visible:ring-slate-400",
    outline:
      "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-400",
    danger:
      "bg-rose-500 text-white hover:bg-rose-600 active:bg-rose-700 focus-visible:ring-rose-500",
    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-400",
    // Legacy aliases (backward-compat)
    blue: "bg-sky-600 text-white hover:bg-sky-700 active:bg-sky-800 focus-visible:ring-sky-600",
    red: "bg-rose-500 text-white hover:bg-rose-600 active:bg-rose-700 focus-visible:ring-rose-500",
    green:
      "bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700 focus-visible:ring-emerald-500",
    blueSoft:
      "bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-100 focus-visible:ring-sky-400",
    redSoft:
      "bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 focus-visible:ring-rose-400",
    greenSoft:
      "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 focus-visible:ring-emerald-400",
  };

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={[
        base,
        sizes[size] ?? sizes.md,
        variants[variant] ?? variants.primary,
        fullWidth ? "w-full" : "",
        isDisabled ? "opacity-50 cursor-not-allowed" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...passthrough}
    >
      {loading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      {children}
      {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
