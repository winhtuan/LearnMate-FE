import { useState } from "react";
import Table from "@/components/ui/table";
import CVDetailsModal from "./CVDetailsModal";

const STATUS_CLASS = {
  pending: "bg-amber-50 text-amber-700 border-amber-100",
  approved: "bg-emerald-50 text-emerald-700 border-emerald-100",
  rejected: "bg-rose-50 text-rose-700 border-rose-100",
};

const COLUMNS = [
  {
    key: "applicant",
    header: "Applicant",
    render: (cv) => (
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-full bg-slate-100 border border-slate-200 overflow-hidden shrink-0">
          <img src={cv.avatar} alt={cv.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900">{cv.name}</p>
          <p className="text-xs text-slate-500">{cv.email}</p>
        </div>
      </div>
    ),
  },
  {
    key: "subject",
    header: "Subject Area",
    render: (cv) => (
      <span className="text-sm font-medium text-slate-700">{cv.subject}</span>
    ),
  },
  {
    key: "experience",
    header: "Experience",
    cellClass: "text-slate-600",
  },
  {
    key: "appliedDate",
    header: "Date Applied",
    cellClass: "text-slate-500",
  },
  {
    key: "status",
    header: "Status",
    render: (cv) => (
      <span
        className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
          STATUS_CLASS[cv.statusType] ?? "bg-slate-50 text-slate-700 border-slate-100"
        }`}
      >
        {cv.status}
      </span>
    ),
  },
  {
    key: "actions",
    header: "Actions",
    align: "right",
    // render defined inside component to capture setSelectedCV — see CVTable body
  },
];

const CVTable = ({ cvs }) => {
  const [selectedCV, setSelectedCV] = useState(null);

  const columns = [
    ...COLUMNS.slice(0, -1),
    {
      key: "actions",
      header: "Actions",
      align: "right",
      render: (cv) => (
        <button
          onClick={() => setSelectedCV(cv)}
          className="text-primary hover:text-primary/80 font-bold text-sm"
        >
          Review CV
        </button>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} data={cvs} keyExtractor={(cv) => cv.id} />

      <CVDetailsModal cv={selectedCV} onClose={() => setSelectedCV(null)} />
    </>
  );
};

export default CVTable;
