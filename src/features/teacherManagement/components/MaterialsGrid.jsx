import MaterialCard from './MaterialCard';

export default function MaterialsGrid({ materials }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {materials.map((material) => (
                <MaterialCard key={material.id} data={material} />
            ))}

            {/* Add Material Button */}
            <button className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl p-8 hover:bg-slate-50 hover:border-primary/50 transition-all group">
                <div className="size-12 rounded-full bg-slate-100 text-slate-400 group-hover:text-primary flex items-center justify-center mb-3 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">add</span>
                </div>
                <span className="text-sm font-semibold text-slate-500 group-hover:text-slate-700">
                    Add Material
                </span>
            </button>
        </div>
    );
}
