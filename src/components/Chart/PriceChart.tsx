import { useChartData } from '@hooks/useChartData';
import { useChartSettings } from '@store/useChartSettings';
import { ChartComponent } from '@components/Chart/ChartComponent';
import ErrorBoundary from '@components/ErrorBoundary';

export const PriceChart = () => {
    const { symbol } = useChartSettings();
    const data = useChartData(symbol);

    return (
        <div className="flex-1 w-full h-full min-h-[400px] relative group">
            {/* Chart Container */}
            <div className="absolute inset-0 bg-white rounded-lg overflow-hidden">
                <ErrorBoundary>
                    <ChartComponent data={data} key={symbol} />
                </ErrorBoundary>
            </div>

            {/* Loading State Overlay (optional, if data is loading) */}
            {data.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                    <div className="flex flex-col items-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
                        <span className="text-sm text-gray-500">Loading chart data...</span>
                    </div>
                </div>
            )}
        </div>
    );
};