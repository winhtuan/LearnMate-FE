/**
 * Spinner – inline loading indicator
 *
 * size  : sm | md | lg
 * label : accessible screen-reader text (default "Loading")
 */
export default function Spinner({ size = "md", label = "Loading", className = "" }) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-[3px]",
  };

  return (
    <span role="status" aria-label={label} className={`inline-block ${className}`}>
      <span
        className={`block animate-spin rounded-full border-current border-t-transparent ${
          sizes[size] ?? sizes.md
        }`}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}
