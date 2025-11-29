import { Sidebar } from '@components/Layout/Sidebar'
import { PriceChart } from '@components/Chart/PriceChart'
import { MarketStats } from '@components/Dashboard/MarketStats'
import { MarketTicker } from '@components/Dashboard/MarketTicker'
import { ControlPanel } from '@components/Dashboard/ControlPanel'

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
                        <MarketStats />

                        {/* Main Chart Area - Spans 2 columns on large screens, 3 on XL */}
                        <div className="md:col-span-2 lg:col-span-2 xl:col-span-3 bg-white p-6 rounded-lg shadow-sm border border-gray-100 min-h-[400px] flex flex-col">
                            {/* Price Chart Component */}
                            <ControlPanel />
                            <PriceChart />
                        </div>

                        {/* Live Market Ticker */}
                        <div className="md:col-span-2 lg:col-span-1 xl:col-span-1">
                            <MarketTicker />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
