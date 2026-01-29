import { Link } from "react-router-dom";

export default function Breadcrumb({ items }) {
  return (
    <div className="flex items-center gap-2 text-sm md:text-base">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.active ? (
            <span className="text-slate-900 font-semibold">{item.label}</span>
          ) : (
            <Link className="text-slate-500 hover:text-primary transition-colors" to={item.href}>
              {item.label}
            </Link>
          )}
          {index < items.length - 1 && <span className="text-slate-300">/</span>}
        </div>
      ))}
    </div>
  );
}
