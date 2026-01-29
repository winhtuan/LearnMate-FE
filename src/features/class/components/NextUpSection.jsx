import TaskCard from './TaskCard';

export default function NextUpSection({ tasks }) {
  return (
    <section className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Next Up</h2>
        <a className="text-sm font-medium text-primary hover:text-primary/80" href="#">View all tasks</a>
      </div>
      <div className="space-y-4">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}
