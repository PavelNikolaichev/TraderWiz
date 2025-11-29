import { useState } from "react"
import {
    LayoutDashboard,
    PieChart,
    Newspaper,
    Settings,
    ChevronLeft,
    ChevronRight,
    LogOut
} from 'lucide-react'
import { clsx } from 'clsx';

export const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', href: '#', active: true },
        // { icon: PieChart, label: 'Portfolio', href: '#' },
        // { icon: Newspaper, label: 'Market News', href: '#' },
        // { icon: Settings, label: 'Settings', href: '#' },
    ];

    return (
        <aside
            className={clsx(
                "bg-slate-900 text-slate-300 flex flex-col transition-all duration-300 ease-in-out border-r border-slate-800",
                isCollapsed ? "w-20" : "w-64"
            )}
        >
            {/* Toggle Button */}
            <div className="flex justify-end p-4">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="px-3 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                    {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4 space-y-2">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className={clsx(
                            "flex items-center px-3 py-3 rounded-lg transition-all duration-200 group",
                            item.active
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                                : "hover:bg-slate-800 hover:text-white"
                        )}
                    >
                        <item.icon size={22} className={clsx("flex-shrink-0", item.active ? "text-white" : "text-slate-400 group-hover:text-white")} />
                        <span className={clsx(
                            "ml-3 font-medium whitespace-nowrap transition-opacity duration-200",
                            isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                        )}>
                            {item.label}
                        </span>
                    </a>
                ))}
            </nav>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-slate-800">
                {/* <button className="flex items-center w-full px-3 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors group">
                    <LogOut size={22} className="flex-shrink-0" />
                    <span className={clsx(
                        "ml-3 font-medium whitespace-nowrap transition-opacity duration-200",
                        isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                    )}>
                        Logout
                    </span>
                </button> */}
            </div>
        </aside>
    )
}