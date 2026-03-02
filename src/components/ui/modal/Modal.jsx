import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import Button from "@/components/ui/button";

/**
 * Modal – standardized overlay primitive
 *
 * open            : controls visibility
 * onClose         : called on backdrop click, Escape, or close button
 * title           : heading text
 * description     : optional subtitle shown below the heading
 * size            : sm | md | lg | xl  (default "md")
 * footer          : ReactNode rendered in a separated footer area
 * closeOnBackdrop : whether clicking the backdrop fires onClose (default true)
 * children        : modal body content
 *
 * Legacy prop:
 * widthClass      : custom Tailwind max-w-* class (overrides size if provided)
 */
const SIZE_MAP = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
};

export default function Modal({
  open,
  onClose,
  title,
  description,
  children,
  size = "md",
  footer = null,
  closeOnBackdrop = true,
  // legacy
  widthClass,
}) {
  const ref = useRef(null);
  const resolvedWidth = widthClass ?? SIZE_MAP[size] ?? SIZE_MAP.md;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[10000]">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeOnBackdrop ? onClose : undefined}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className={`w-full ${resolvedWidth} rounded-3xl bg-white shadow-2xl outline-none`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
          tabIndex={-1}
          ref={ref}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-8 pt-7 pb-2">
            {title && (
              <h3 id="modal-title" className="text-2xl font-bold text-slate-900">
                {title}
              </h3>
            )}
            <Button
              onClick={onClose}
              variant="redSoft"
              size="sm"
              className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full text-red-800"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {description && (
            <p className="px-8 pb-4 text-sm text-slate-500">{description}</p>
          )}

          {/* Body */}
          <div className="px-8 pb-8">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="border-t border-slate-100 px-8 py-4">{footer}</div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
