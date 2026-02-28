
function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-8 bg-white border border-slate-100 rounded-2xl hover:shadow-xl hover:shadow-slate-100 transition-all group">
      <div className="size-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default FeatureCard;
