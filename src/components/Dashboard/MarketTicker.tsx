import { useStore } from '@store/useStore';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const MarketTicker = () => {
    const store = useStore();
    const marketData = store.latestMarketData;

    if (!marketData) {
        return (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="h-10 bg-gray-100 rounded"></div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
                <h3 className="font-bold text-gray-900">Live Markets</h3>
                <div className="flex items-center gap-2">
                    {store.isConnected && (
                        <>
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-medium text-green-600">Live</span>
                        </>
                    )}
                    {!store.isConnected && (
                        <span className="text-xs font-medium text-red-600">Offline</span>
                    )}
                </div>
            </div>

            <div className="overflow-auto flex-1 custom-scrollbar">
                <table className="min-w-full divide-y divide-gray-100">
                    <thead className="bg-gray-50 sticky top-0">
                        <tr>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Asset</th>
                            <th className="px-3 py-2 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-3 py-2 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">24h %</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-50">
                        {marketData.data.slice(0, 15).map((coin) => {
                            const isPositive = parseFloat(coin.changePercent24Hr) >= 0;
                            return (
                                <tr key={coin.id} className="hover:bg-gray-50 transition-colors group cursor-pointer">
                                    <td className="px-3 py-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="font-medium text-gray-900 text-sm">{coin.symbol}</div>
                                            <div className="text-xs text-gray-500 ml-2 hidden sm:block">{coin.name}</div>
                                        </div>
                                    </td>
                                    <td className="px-3 py-2 whitespace-nowrap text-right text-xs font-medium text-gray-900">
                                        ${parseFloat(coin.priceUsd) < 1
                                            ? parseFloat(coin.priceUsd).toFixed(4)
                                            : parseFloat(coin.priceUsd).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                    <td className={`px-3 py-2 whitespace-nowrap text-right text-xs font-medium`}>
                                        <div className={`flex items-center justify-end gap-1 ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                                            {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                            {Math.abs(parseFloat(coin.changePercent24Hr)).toFixed(2)}%
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
