import { NavLink } from 'react-router-dom';
import { adminDashboardData } from '../data/adminDashboard.data';

const Sidebar = () => {
    const { navigation } = adminDashboardData;

    return (
        <aside
            className="w-64 bg-white border-r border-border-light flex flex-col fixed inset-y-0 left-0 pt-16 z-40">
            <nav className="flex-1 px-4 py-6 space-y-1">
                {navigation.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.href}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${isActive
                                ? 'bg-primary/10 text-primary font-semibold'
                                : 'text-[#6a7981] hover:bg-gray-100 dark:hover:bg-gray-800 font-medium'
                            }`
                        }
                    >
                        <span className="material-symbols-outlined">{item.icon}</span>
                        <span className="text-sm">{item.label}</span>
                        {item.badge && (
                            <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold ml-auto">
                                {item.badge}
                            </span>
                        )}
                    </NavLink>
                ))}
            </nav>
            <div className="p-4 border-t border-border-light bg-gray-50">
                <p className="text-[10px] text-[#6a7981] text-center font-bold uppercase tracking-widest">
                    v2.4.1 Enterprise Edition
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;
