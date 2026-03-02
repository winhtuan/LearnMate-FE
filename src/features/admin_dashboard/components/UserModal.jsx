import { useState, useEffect } from "react";
import Modal from "@/components/ui/modal";
import Button from "@/components/ui/button";

const FIELD_CLASS =
  "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all";

const INITIAL = { name: "", email: "", role: "Student", status: "Active" };

const UserModal = ({ isOpen, onClose, onSave, user, mode = "create" }) => {
  const [formData, setFormData] = useState(INITIAL);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: reset form when modal opens or user/mode changes
    setFormData(
      user && mode === "edit"
        ? {
            name: user.name || "",
            email: user.email || "",
            role: user.role || "Student",
            status: user.status || "Active",
          }
        : INITIAL
    );
  }, [user, mode, isOpen]);

  const set = (key) => (e) => setFormData((f) => ({ ...f, [key]: e.target.value }));

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title={mode === "create" ? "Create New User" : "Edit User Details"}
      size="md"
      footer={
        <div className="flex items-center justify-end gap-3">
          <Button variant="outline" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" form="user-modal-form">
            {mode === "create" ? "Create User" : "Save Changes"}
          </Button>
        </div>
      }
    >
      {/* form linked to footer submit button via the `form` HTML attribute */}
      <form
        id="user-modal-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSave(formData);
        }}
        className="space-y-4"
      >
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-700">Full Name</label>
          <input
            required
            value={formData.name}
            onChange={set("name")}
            className={FIELD_CLASS}
            placeholder="e.g. John Doe"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-700">Email Address</label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={set("email")}
            className={FIELD_CLASS}
            placeholder="john.doe@example.com"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700">User Role</label>
            <select value={formData.role} onChange={set("role")} className={FIELD_CLASS}>
              <option>Student</option>
              <option>Teacher</option>
              <option>Admin</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700">Account Status</label>
            <select value={formData.status} onChange={set("status")} className={FIELD_CLASS}>
              <option>Active</option>
              <option>Blocked</option>
              <option>Pending</option>
            </select>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default UserModal;
