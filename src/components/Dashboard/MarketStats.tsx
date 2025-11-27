export type MarketStatsProps = {
    totalBalance: string;
    profit24h: string;
    activeTrades: number;
    winRate: string;
};

export const MarketStats = ({
    totalBalance,
    profit24h,
    activeTrades,
    winRate,
}: MarketStatsProps) => (
    <>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">Total Balance</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">{totalBalance}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">24h Profit</h3>
            <p className="text-2xl font-bold text-green-600 mt-2">{profit24h}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">Active Trades</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">{activeTrades}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">Win Rate</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">{winRate}</p>
        </div>
    </>
);
