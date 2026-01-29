import AssignmentCard from './AssignmentCard';

export default function ActiveAssignmentsSection({ assignments, filters, activeFilter, onFilterChange }) {
  return (
    <section className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Active Assignments</h2>
        <div className="flex items-center gap-2">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                filter.active
                  ? 'text-slate-600 bg-slate-100 hover:bg-slate-200'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
              onClick={() => onFilterChange && onFilterChange(index)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {assignments.map(assignment => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </section>
  );
}
