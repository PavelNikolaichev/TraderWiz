import { useMarketData } from '../../hooks/useMarketData';

export const MarketTicker = () => {
    const marketData = useMarketData();

    if (!marketData) {
        return <div className="p-4 text-gray-500">Loading market data...</div>;
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-6 col-span-full">
            <h3 className="text-lg font-semibold mb-4">Live Market Data</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {marketData.data.map((coin) => (
                            <tr key={coin.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{coin.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${parseFloat(coin.priceUsd).toFixed(2)}</td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm ${parseFloat(coin.changePercent24Hr) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
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
