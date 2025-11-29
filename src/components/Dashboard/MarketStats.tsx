import { useMarketData } from '../../hooks/useMarketData';
import { DollarSign, Activity, TrendingUp, TrendingDown } from 'lucide-react';

export const MarketStats = () => {
    const marketData = useMarketData();

    if (!marketData || !marketData.data) {
        return (
            <>
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-pulse h-32"></div>
                ))}
            </>
        );
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

    const StatCard = ({ title, value, subValue, icon: Icon, colorClass, bgClass }: any) => (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2 tracking-tight">{value}</h3>
                    {subValue && <p className={`text-sm font-medium mt-1 ${colorClass}`}>{subValue}</p>}
                </div>
                <div className={`p-3 rounded-lg ${bgClass}`}>
                    <Icon className={`w-6 h-6 ${colorClass}`} />
                </div>
            </div>
        </div>
    );

    return (
        <>
            <StatCard
                title="Total Market Cap"
                value={`$${(totalMarketCap / 1000000000).toFixed(2)}B`}
                subValue="Global Cap"
                icon={DollarSign}
                colorClass="text-blue-600"
                bgClass="bg-blue-50"
            />
            <StatCard
                title="24h Volume"
                value={`$${(totalVolume24h / 1000000000).toFixed(2)}B`}
                subValue="Global Volume"
                icon={Activity}
                colorClass="text-indigo-600"
                bgClass="bg-indigo-50"
            />
            <StatCard
                title="Best Performer (24h)"
                value={bestPerformer.symbol}
                subValue={`+${parseFloat(bestPerformer.changePercent24Hr).toFixed(2)}%`}
                icon={TrendingUp}
                colorClass="text-emerald-600"
                bgClass="bg-emerald-50"
            />
            <StatCard
                title="Worst Performer (24h)"
                value={worstPerformer.symbol}
                subValue={`${parseFloat(worstPerformer.changePercent24Hr).toFixed(2)}%`}
                icon={TrendingDown}
                colorClass="text-rose-600"
                bgClass="bg-rose-50"
            />
        </>
    );
};
