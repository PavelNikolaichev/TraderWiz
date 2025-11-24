import { useState } from "react"
import { SidebarOpen, SidebarClose } from 'lucide-react'

export const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <>
            <aside className={`w-64 bg-gray-100 p-4 ${isCollapsed ? "hidden" : "block"}`}>
                <nav>
                    <ul>
                        <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Dashboard</a></li>
                        <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Portfolio</a></li>
                        <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Market News</a></li>
                        <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Settings</a></li>
                    </ul>
                </nav>
            </aside>
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-2 bg-gray-100 rounded hover:bg-gray-300"
            >
                {isCollapsed ? <SidebarOpen /> : <SidebarClose />}
            </button>
        </>
    )
}