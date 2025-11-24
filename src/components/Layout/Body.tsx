import { Sidebar } from '@components/Layout/Sidebar'

export const Body = () => {
    return (
        <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {/* Top Stats Row */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-gray-500 text-sm font-medium">Total Balance</h3>
                            <p className="text-2xl font-bold text-gray-900 mt-2">$12,345.67</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-gray-500 text-sm font-medium">24h Profit</h3>
                            <p className="text-2xl font-bold text-green-600 mt-2">+$123.45</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-gray-500 text-sm font-medium">Active Trades</h3>
                            <p className="text-2xl font-bold text-gray-900 mt-2">5</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-gray-500 text-sm font-medium">Win Rate</h3>
                            <p className="text-2xl font-bold text-gray-900 mt-2">68%</p>
                        </div>

                        {/* Main Chart Area - Spans 2 columns on large screens, 3 on XL */}
                        <div className="md:col-span-2 lg:col-span-2 xl:col-span-3 bg-white p-6 rounded-lg shadow-sm border border-gray-100 min-h-[400px] flex flex-col">
                            <h3 className="text-lg font-semibold mb-4">Price Chart</h3>
                            <div className="flex-1 flex items-center justify-center bg-gray-50 rounded border border-dashed border-gray-300 overflow-hidden">
                                <p className="text-gray-400">Chart Component Placeholder</p>
                            </div>
                        </div>

                        {/* Side Panel / Recent Activity */}
                        <div className="md:col-span-2 lg:col-span-1 xl:col-span-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span>BTC/USD Buy</span>
                                    <span className="text-green-600">+$50.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>ETH/USD Sell</span>
                                    <span className="text-red-600">-$12.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
