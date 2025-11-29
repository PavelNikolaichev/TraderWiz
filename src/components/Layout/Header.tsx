import { TrendingUp } from 'lucide-react';

export const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-10">
            {/* Logo Area */}
            <div className="flex items-center gap-2">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                    <TrendingUp className="text-white h-6 w-6" />
                </div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">TraderWiz</h1>
            </div>
        </header>
    )
}
