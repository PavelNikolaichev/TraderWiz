// TODO: resolve licensing issues with lightweight-charts
import { createChart, LineSeries } from "lightweight-charts";
import React from "react";

export type PriceData = {
    time: string | number;
    price: number;
}

export type ChartComponentProps = {
    data: PriceData[];
}

// TODO: check out the performance, pretty much sure it should be optimized to not recreate charts.
// https://tradingview.github.io/lightweight-charts/docs
export const ChartComponent = ({ data }: ChartComponentProps) => {
    const chartRef = React.useRef<HTMLDivElement | null>(null);
    React.useEffect(() => {
        if (chartRef.current) {
            const chart = createChart(chartRef.current, { width: chartRef.current.clientWidth, height: chartRef.current.clientHeight });
            const lineSeries = chart.addSeries(LineSeries);
            lineSeries.setData(data.map(d => ({ time: d.time as any, value: d.price })));
            return () => {
                chart.remove();
            };
        }
    }, [data]);

    return (
        <div className="flex items-center justify-center w-full h-full">
            {/* Chart rendering logic goes here */}
            {data && data.length > 0 ? (
                <div id="chart" className="w-full h-full" ref={chartRef} />
            ) : (
                <p className="text-gray-400">No data available</p>
            )}
        </div>
    );
}
