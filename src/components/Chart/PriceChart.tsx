import { useChartData } from '@hooks/useChartData';
import { useChartSettings } from '../../store/useChartSettings';
import { ChartComponent } from './ChartComponent';

export const PriceChart = () => {
    const { symbol } = useChartSettings();
    const data = useChartData(symbol);

    return (
        <>
            <h3 className="text-lg font-semibold mb-4">{symbol} Price Chart</h3>
            <div className={`flex-1 flex items-center justify-center bg-gray-50 rounded border border-dashed border-gray-300 overflow-hidden`}>
                <ChartComponent data={data} key={symbol} />
            </div>
        </>
    );
};