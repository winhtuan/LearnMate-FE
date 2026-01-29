import ResourceItem from './ResourceItem';

export default function ResourcesList({ resources }) {
  return (
    <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Resources</h3>
      <ul className="space-y-3">
        {resources.map(resource => (
          <ResourceItem key={resource.id} resource={resource} />
        ))}
      </ul>
    </div>
  );
}
