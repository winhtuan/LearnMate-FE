import Table from "@/components/ui/table";

// Status badge styles keyed by statusType from the data layer
const STATUS_CLASS = {
  success: "bg-green-100 text-green-700",
  warning: "bg-orange-100 text-orange-700",
};

// Column definitions live inside the component so the `onAction` closure is captured
const makeColumns = (onAction) => [
  {
    key: "id",
    header: "ID",
    width: "w-20",
    cellClass: "font-medium text-slate-500",
  },
  {
    key: "user",
    header: "User Details",
    render: (user) => (
      <div className="flex items-center gap-3">
        <div
          className="size-10 rounded-full bg-primary/10 bg-cover bg-center shrink-0"
          style={{ backgroundImage: `url('${user.avatar}')` }}
        />
        <div>
          <p className="text-sm font-bold text-slate-900">{user.name}</p>
          <p className="text-xs text-slate-500">{user.email}</p>
        </div>
      </div>
    ),
  },
  {
    key: "role",
    header: "Role",
    render: (user) => (
      <span className="text-sm font-medium text-slate-700">{user.role}</span>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (user) => (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
          STATUS_CLASS[user.statusType] ?? ""
        }`}
      >
        {user.status}
      </span>
    ),
  },
  {
    key: "date",
    header: "Created Date",
    cellClass: "text-slate-500",
  },
  {
    key: "actions",
    header: "Actions",
    align: "right",
    render: (user) => (
      <div className="flex items-center justify-end gap-1">
        <button
          onClick={() => onAction("view", user)}
          className="p-1.5 text-slate-400 hover:text-primary transition-colors"
          title="View"
        >
          <span className="material-symbols-outlined text-lg">visibility</span>
        </button>
        <button
          onClick={() => onAction("edit", user)}
          className="p-1.5 text-slate-400 hover:text-blue-500 transition-colors"
          title="Edit"
        >
          <span className="material-symbols-outlined text-lg">edit_note</span>
        </button>
        <button
          onClick={() => onAction("block", user)}
          className="p-1.5 text-slate-400 hover:text-orange-500 transition-colors"
          title="Block"
        >
          <span className="material-symbols-outlined text-lg">lock_open</span>
        </button>
        <button
          onClick={() => onAction("delete", user)}
          className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
          title="Delete"
        >
          <span className="material-symbols-outlined text-lg">delete</span>
        </button>
      </div>
    ),
  },
];

const UserTable = ({ users, onAction }) => {
  const columns = makeColumns(onAction);

  return (
    <>
      {/* Filter toolbar — admin-specific business logic, stays in the feature */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 mb-6 flex flex-wrap items-center gap-4 shadow-sm">
        <div className="flex-1 min-w-[300px]">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <span className="material-symbols-outlined text-xl">search</span>
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/40 text-sm text-slate-900 placeholder:text-slate-500"
              placeholder="Search by name, email or ID..."
              type="text"
            />
          </label>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-9 items-center gap-x-2 rounded-lg bg-white px-4 text-slate-700 border border-slate-200">
            <span className="text-sm font-semibold">Role: All</span>
            <span className="material-symbols-outlined text-lg">expand_more</span>
          </button>
          <button className="flex h-9 items-center gap-x-2 rounded-lg bg-white px-4 text-slate-700 border border-slate-200">
            <span className="text-sm font-semibold">Status: Active</span>
            <span className="material-symbols-outlined text-lg">expand_more</span>
          </button>
          <button
            className="flex h-9 items-center gap-x-2 rounded-lg text-slate-400 hover:text-slate-600 px-2 transition-colors"
            title="Reset Filters"
          >
            <span className="material-symbols-outlined text-xl">filter_list_off</span>
          </button>
        </div>
      </div>

      {/* Generic Table handles thead / tbody / pagination */}
      <Table
        columns={columns}
        data={users}
        keyExtractor={(u, i) => u.id ?? i}
        pagination={{
          page: 1,
          pageSize: users.length,
          total: 1240,
          onPageChange: () => {},
        }}
      />
    </>
  );
};

export default UserTable;
