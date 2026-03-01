import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import Button from "@/shared/components/ui/Button";

export default function Modal({
  open,
  onClose,
  title,
  description,
  children,
  widthClass = "max-w-md",
}) {
  const ref = useRef(null);

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
        onClick={onClose}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className={`w-full ${widthClass} rounded-3xl bg-white shadow-2xl outline-none`}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={ref}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-8 pt-7 pb-2">
            <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
            <Button
              onClick={onClose}
              variant="redSoft"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-red-800 transition-all duration-200"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          {description && (
            <p className="px-8 pb-4 text-sm text-slate-500">{description}</p>
          )}
          <div className="px-8 pb-8">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}
