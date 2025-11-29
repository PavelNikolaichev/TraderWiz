import { useMarketData } from '../../hooks/useMarketData';

export const MarketStats = () => {
    const marketData = useMarketData();

    if (!marketData || !marketData.data) {
        return <div className="p-4 text-gray-500">Loading market data...</div>;
    }

    const assets = marketData.data;

    const totalMarketCap = assets.reduce(
        (sum: number, asset) => sum + parseFloat(asset.marketCapUsd || '0'), 0
    );
    const totalVolume24h = assets.reduce(
        (sum: number, asset) => sum + parseFloat(asset.volumeUsd24Hr || '0'), 0
    );

    const bestPerformer = assets.reduce(
        (best: typeof assets[0], asset) => parseFloat(asset.changePercent24Hr) > parseFloat(best.changePercent24Hr) ? asset : best,
        assets[0]
    );
    const worstPerformer = assets.reduce(
        (worst: typeof assets[0], asset) => parseFloat(asset.changePercent24Hr) < parseFloat(worst.changePercent24Hr) ? asset : worst,
        assets[0]
    );

    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-gray-500 text-sm font-medium">Total Market Cap</h3>
                <p className="text-xl font-bold text-gray-900 mt-2">${totalMarketCap.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-gray-500 text-sm font-medium">24h Volume</h3>
                <p className="text-xl font-bold text-blue-600 mt-2">${totalVolume24h.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-gray-500 text-sm font-medium">Best Performer (24h)</h3>
                <p className="text-xl font-bold text-green-600 mt-2">{bestPerformer.name} ({bestPerformer.symbol}): {parseFloat(bestPerformer.changePercent24Hr).toFixed(2)}%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-gray-500 text-sm font-medium">Worst Performer (24h)</h3>
                <p className="text-xl font-bold text-red-600 mt-2">{worstPerformer.name} ({worstPerformer.symbol}): {parseFloat(worstPerformer.changePercent24Hr).toFixed(2)}%</p>
            </div>
        </>
    );
};
