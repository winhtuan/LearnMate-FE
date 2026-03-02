import Modal from "@/components/ui/modal";
import Button from "@/components/ui/button";

const ICON_CLASSES = {
  danger: "text-red-600 bg-red-50",
  warning: "text-orange-600 bg-orange-50",
  primary: "text-primary bg-primary/10",
};

const ICONS = {
  danger: "delete_forever",
  warning: "block",
  primary: "info",
};

// danger → generic Button "danger" variant
// warning → orange (no standard variant), inline styled
// primary → generic Button "primary" variant
const ActionButton = ({ type, onClick, children }) => {
  if (type === "warning") {
    return (
      <button
        onClick={onClick}
        className="px-6 py-2 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-lg shadow-orange-200 transition-all active:scale-[0.98]"
      >
        {children}
      </button>
    );
  }
  return (
    <Button variant={type === "danger" ? "danger" : "primary"} onClick={onClick}>
      {children}
    </Button>
  );
};

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
  type = "danger",
}) => (
  <Modal
    open={isOpen}
    onClose={onClose}
    title={title}
    size="sm"
    closeOnBackdrop={false}
    footer={
      <div className="flex items-center justify-end gap-3">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <ActionButton type={type} onClick={onConfirm}>
          {confirmText}
        </ActionButton>
      </div>
    }
  >
    <div className="flex items-center gap-4">
      <div
        className={`size-12 shrink-0 rounded-full flex items-center justify-center ${ICON_CLASSES[type]}`}
      >
        <span className="material-symbols-outlined text-2xl">{ICONS[type]}</span>
      </div>
      <p className="text-sm text-slate-500">{message}</p>
    </div>
  </Modal>
);

export default ConfirmModal;
