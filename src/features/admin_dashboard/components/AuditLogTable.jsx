import Table from "@/components/ui/table";

const ACTION_CLASS = {
  success: "bg-emerald-50 text-emerald-700 border-emerald-100",
  warning: "bg-amber-50 text-amber-700 border-amber-100",
  info: "bg-blue-50 text-blue-700 border-blue-100",
};

const ACTION_DOT = {
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  info: "bg-blue-500",
};

// Actor avatar color cycles by index — passed as rowIndex from render
const ACTOR_COLORS = [
  "bg-indigo-50 text-indigo-600 border-indigo-100",
  "bg-rose-50 text-rose-600 border-rose-100",
  "bg-sky-50 text-sky-600 border-sky-100",
];

const COLUMNS = [
  {
    key: "timestamp",
    header: "Timestamp",
    sortable: true,
    width: "w-52",
    render: (log) => (
      <div className="flex flex-col">
        <span className="text-sm font-bold text-slate-700">{log.date}</span>
        <span className="text-[10px] font-semibold text-slate-400 font-mono uppercase tracking-tight">
          {log.time}
        </span>
      </div>
    ),
  },
  {
    key: "actor",
    header: "Actor",
    sortable: true,
    render: (log, idx) => (
      <div className="flex items-center gap-3">
        <div
          className={`size-8 rounded-lg flex items-center justify-center font-bold text-[10px] border ${
            ACTOR_COLORS[idx % 3]
          }`}
        >
          {log.actorInitials}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-700 leading-none">{log.actor}</span>
          <span className="text-[11px] font-medium text-slate-400 mt-1">{log.actorEmail}</span>
        </div>
      </div>
    ),
  },
  {
    key: "action",
    header: "Action",
    render: (log) => {
      const status = log.status ?? "info";
      return (
        <div
          className={`inline-flex items-center px-2.5 py-1 rounded-full border ${
            ACTION_CLASS[status] ?? ACTION_CLASS.info
          }`}
        >
          <span
            className={`size-1.5 rounded-full mr-2 ${ACTION_DOT[status] ?? ACTION_DOT.info}`}
          />
          <span className="text-[10px] font-bold uppercase tracking-wider">{log.action}</span>
        </div>
      );
    },
  },
  {
    key: "targetId",
    header: "Target ID",
    render: (log) => (
      <span className="font-mono text-[10px] px-2 py-1 bg-slate-50 rounded-md border border-slate-200 text-slate-600 font-medium">
        {log.targetId}
      </span>
    ),
  },
  {
    key: "ipAddress",
    header: "IP Address",
    render: (log) => (
      <span className="font-mono text-[10px] text-slate-500 font-medium">{log.ipAddress}</span>
    ),
  },
  {
    key: "details",
    header: "Details",
    align: "right",
    render: () => (
      <button className="p-2 text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-slate-50">
        <span className="material-symbols-outlined text-[20px]">visibility</span>
      </button>
    ),
  },
];

const AuditLogTable = ({ logs }) => (
  <Table
    columns={COLUMNS}
    data={logs}
    keyExtractor={(_, i) => i}
    pagination={{
      page: 1,
      pageSize: logs.length,
      total: logs.length * 40,
      onPageChange: () => {},
    }}
  />
);

export default AuditLogTable;
