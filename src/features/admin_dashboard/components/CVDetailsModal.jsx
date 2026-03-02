import Modal from "@/components/ui/modal";

// Feature-specific modal built on top of the base Modal primitive.
// Uses size="xl" (max-w-2xl) with a scrollable body and action footer.
const CVDetailsModal = ({ cv, onClose }) => (
  <Modal
    open={!!cv}
    onClose={onClose}
    title="Review Application"
    size="xl"
    footer={
      cv && (
        <div className="flex gap-4">
          <button className="flex-1 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-2xl text-sm font-bold hover:bg-slate-100 transition-all">
            Request More Info
          </button>
          <button className="flex-1 py-2.5 bg-rose-600 text-white rounded-2xl text-sm font-bold hover:bg-rose-700 transition-all shadow-lg shadow-rose-200">
            Reject Application
          </button>
          <button className="flex-1 py-2.5 bg-emerald-600 text-white rounded-2xl text-sm font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
            Approve Teacher
          </button>
        </div>
      )
    }
  >
    {cv && (
      <div className="max-h-[55vh] overflow-y-auto space-y-8 pr-1">
        {/* Applicant header */}
        <div className="flex items-center gap-6">
          <div className="size-20 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-sm shrink-0">
            <img src={cv.avatar} alt={cv.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-2xl font-black text-slate-900">{cv.name}</p>
            <p className="text-slate-500 font-medium">{cv.email}</p>
          </div>
          <div className="ml-auto flex flex-col items-end gap-1 shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Status
            </span>
            <span
              className={`px-3 py-1 rounded-full text-[11px] font-bold border ${
                cv.statusType === "pending"
                  ? "bg-amber-50 text-amber-700 border-amber-100"
                  : "bg-slate-50 text-slate-700 border-slate-100"
              }`}
            >
              {cv.status}
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Subject Area
            </p>
            <p className="text-base font-bold text-slate-800">{cv.subject}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Total Experience
            </p>
            <p className="text-base font-bold text-slate-800">{cv.experience}</p>
          </div>
        </div>

        {/* Credentials */}
        <div className="space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Credentials & Background
          </p>
          <div className="space-y-3">
            {cv.credentials.map((content, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div className="size-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-sm">verified</span>
                </div>
                <p className="text-sm font-medium text-slate-600 leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CV attachment */}
        <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100 flex items-center gap-6">
          <div className="size-14 rounded-2xl bg-white flex items-center justify-center text-sky-600 shadow-sm shrink-0">
            <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-sky-900">
              Professional_CV_{cv.name.replace(" ", "_")}.pdf
            </p>
            <p className="text-xs text-sky-600 font-medium">Verified Attachment • 2.4 MB</p>
          </div>
          <button className="px-4 py-2 bg-sky-600 text-white rounded-xl text-xs font-bold hover:bg-sky-700 transition-colors shadow-sm">
            View Document
          </button>
        </div>
      </div>
    )}
  </Modal>
);

export default CVDetailsModal;
