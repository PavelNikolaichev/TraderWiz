import { useMarketData } from '../../hooks/useMarketData';

export const MarketTicker = () => {
    const marketData = useMarketData();

    if (!marketData) {
        return <div className="p-4 text-gray-500">Loading market data...</div>;
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-base font-semibold mb-3">Live Market Data</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-xs">
                    <thead>
                        <tr>
                            <th className="px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">24h</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {marketData.data.slice(0, 5).map((coin) => (
                            <tr key={coin.id}>
                                <td className="px-3 py-2 whitespace-nowrap font-medium text-gray-900">{coin.name}</td>
                                <td className="px-3 py-2 whitespace-nowrap text-gray-500">${parseFloat(coin.priceUsd).toFixed(2)}</td>
                                <td className={`px-3 py-2 whitespace-nowrap ${parseFloat(coin.changePercent24Hr) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {parseFloat(coin.changePercent24Hr).toFixed(2)}%
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
