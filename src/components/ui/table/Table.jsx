import { useMemo } from "react";
import EmptyState from "@/components/feedback/empty-state";

// ─── Pagination ───────────────────────────────────────────────────────────────

function buildPageList(page, totalPages) {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
  if (page <= 4) return [1, 2, 3, 4, 5, "…", totalPages];
  if (page >= totalPages - 3)
    return [1, "…", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  return [1, "…", page - 1, page, page + 1, "…", totalPages];
}

function Pagination({ page, pageSize, total, onPageChange }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const from = Math.min((page - 1) * pageSize + 1, total);
  const to = Math.min(page * pageSize, total);
  const pages = useMemo(() => buildPageList(page, totalPages), [page, totalPages]);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 px-6 py-4 bg-slate-50/50">
      <p className="text-xs font-medium text-slate-500">
        Showing {from}–{to} of {total}
      </p>

      <div className="flex items-center gap-1">
        {/* Prev */}
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Previous page"
        >
          <span className="material-symbols-outlined text-[18px]">chevron_left</span>
        </button>

        {pages.map((p, i) =>
          p === "…" ? (
            <span key={`ellipsis-${i}`} className="px-1 text-xs text-slate-400 select-none">
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              aria-current={p === page ? "page" : undefined}
              className={[
                "flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold transition",
                p === page
                  ? "bg-slate-900 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100",
              ].join(" ")}
            >
              {p}
            </button>
          )
        )}

        {/* Next */}
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Next page"
        >
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
        </button>
      </div>
    </div>
  );
}

// ─── Sort icon ─────────────────────────────────────────────────────────────────

function SortIcon({ active, dir }) {
  return (
    <span className="inline-flex flex-col leading-none ml-1 -mb-0.5">
      <span
        className={[
          "material-symbols-outlined text-[14px] leading-none",
          active && dir === "asc" ? "text-slate-900" : "text-slate-300",
        ].join(" ")}
      >
        arrow_drop_up
      </span>
      <span
        className={[
          "material-symbols-outlined text-[14px] leading-none",
          active && dir === "desc" ? "text-slate-900" : "text-slate-300",
        ].join(" ")}
      >
        arrow_drop_down
      </span>
    </span>
  );
}

// ─── Skeleton row ──────────────────────────────────────────────────────────────

function SkeletonRow({ colCount }) {
  return (
    <tr>
      {Array.from({ length: colCount }).map((_, i) => (
        <td key={i} className="px-6 py-4">
          <div className="h-4 rounded bg-slate-100 animate-pulse" style={{ width: `${60 + (i % 3) * 15}%` }} />
        </td>
      ))}
    </tr>
  );
}

// ─── Table ─────────────────────────────────────────────────────────────────────

/**
 * Table – generic data table primitive
 *
 * columns[]
 *   key        : unique string identifier
 *   header     : column heading text (or ReactNode)
 *   align      : "left" | "center" | "right"  (default "left")
 *   sortable   : bool
 *   render     : (row, index) => ReactNode  — custom cell renderer
 *                if omitted, renders row[key] as plain text
 *   headerClass: extra className for <th>
 *   cellClass  : extra className for <td>
 *   width      : Tailwind w-* class applied to both th and td
 *
 * data        : array of row objects
 * keyExtractor: (row, index) => string | number  (default: index)
 * loading     : shows skeleton rows instead of data
 * skeletonRows: number of skeleton rows shown while loading (default 5)
 * emptyState  : ReactNode shown when data is empty and not loading
 *
 * sortKey     : currently active sort column key
 * sortDir     : "asc" | "desc"
 * onSort      : (key) => void  — called with column key when header clicked
 *
 * pagination  : { page, pageSize, total, onPageChange }
 *               omit to hide the pagination footer
 *
 * className   : added to the outermost wrapper div
 */
export default function Table({
  columns = [],
  data = [],
  keyExtractor,
  loading = false,
  skeletonRows = 5,
  emptyState,
  sortKey,
  sortDir = "asc",
  onSort,
  pagination,
  className = "",
}) {
  const alignClass = { left: "text-left", center: "text-center", right: "text-right" };

  const defaultEmpty = (
    <EmptyState
      title="No data found"
      description="Nothing to display yet."
    />
  );

  return (
    <div className={`bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* Head */}
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              {columns.map((col) => {
                const isActive = sortKey === col.key;
                const canSort = col.sortable && onSort;
                return (
                  <th
                    key={col.key}
                    scope="col"
                    onClick={canSort ? () => onSort(col.key) : undefined}
                    className={[
                      "px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap",
                      alignClass[col.align ?? "left"],
                      canSort ? "cursor-pointer select-none hover:text-slate-700" : "",
                      col.width ?? "",
                      col.headerClass ?? "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <span className="inline-flex items-center gap-0.5">
                      {col.header}
                      {canSort && <SortIcon active={isActive} dir={sortDir} />}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-slate-100">
            {loading
              ? Array.from({ length: skeletonRows }).map((_, i) => (
                  <SkeletonRow key={i} colCount={columns.length} />
                ))
              : data.length === 0
              ? (
                  <tr>
                    <td colSpan={columns.length} className="py-0">
                      {emptyState ?? defaultEmpty}
                    </td>
                  </tr>
                )
              : data.map((row, rowIndex) => {
                  const key = keyExtractor ? keyExtractor(row, rowIndex) : rowIndex;
                  return (
                    <tr
                      key={key}
                      className="group hover:bg-slate-50 transition-colors"
                    >
                      {columns.map((col) => (
                        <td
                          key={col.key}
                          className={[
                            "px-6 py-4 text-sm text-slate-700",
                            alignClass[col.align ?? "left"],
                            col.width ?? "",
                            col.cellClass ?? "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          {col.render ? col.render(row, rowIndex) : (row[col.key] ?? "—")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && !loading && (
        <Pagination {...pagination} />
      )}
    </div>
  );
}
