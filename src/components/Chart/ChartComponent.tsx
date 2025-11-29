// TODO: resolve licensing issues with lightweight-charts
import logger from "@utils/logger";
import { createChart, LineSeries } from "lightweight-charts";
import React from "react";

export type PriceData = {
    time: string | number;
    price: number;
}

export type ChartComponentProps = {
    data: PriceData[];
}

export const ChartComponent = ({ data }: ChartComponentProps) => {
    const chartRef = React.useRef<HTMLDivElement | null>(null);
    const chartInstanceRef = React.useRef<ReturnType<typeof createChart> | null>(null);
    const lineSeriesRef = React.useRef<any | null>(null);
    const lastDataRef = React.useRef<PriceData[] | null>(null);

    React.useEffect(() => {
        if (chartRef.current) {
            // The timezone is UTC by default, since processing timezones is computationally expensive we leave it as is for now.
            // For further enquiries check out: https://tradingview.github.io/lightweight-charts/docs/time-zones
            chartInstanceRef.current = createChart(chartRef.current, { width: chartRef.current.clientWidth, height: chartRef.current.clientHeight, autoSize: true, timeScale: { timeVisible: true, secondsVisible: true } });
            lineSeriesRef.current = chartInstanceRef.current.addSeries(LineSeries);
            // Set initial data if available
            if (data && data.length > 0) {
                lineSeriesRef.current.setData(data.map(d => ({ time: d.time as any, value: d.price })));
                lastDataRef.current = data;
                logger.debug("Chart initialized with initial dataset");
            }
        }

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.remove();
            }

            chartInstanceRef.current = null;
            lineSeriesRef.current = null;
        }
    }, []);

    React.useEffect(() => {
        if (chartRef.current && chartInstanceRef.current && lineSeriesRef.current) {
            if (!data || data.length === 0) {
                lineSeriesRef.current.setData([]);
                lastDataRef.current = data;
                return;
            }

            const lastData = lastDataRef.current;
            const latestPoint = data[data.length - 1];

            // Check if we can just update
            if (lastData && lastData.length > 0) {
                const lastPoint = lastData[lastData.length - 1];

                // If the new dataset is just the old one + new points
                if ((latestPoint.time as number) > (lastPoint.time as number)) {
                    const newPoints = data.filter(
                        d => (d.time as number) > (lastPoint.time as number)
                    );
                    newPoints.forEach(p => lineSeriesRef.current.update({ time: p.time as any, value: p.price }));

                    logger.debug(`Chart updated with ${newPoints.length} new points`);
                    lastDataRef.current = data;
                    return;
                } else if (latestPoint.time === lastPoint.time && latestPoint.price !== lastPoint.price) {
                    lineSeriesRef.current.update({ time: latestPoint.time as any, value: latestPoint.price });
                    logger.debug("Chart updated with latest entry (price change)");
                    lastDataRef.current = data;
                    return;
                } else if (data.length === lastData.length && latestPoint.time === lastPoint.time && latestPoint.price === lastPoint.price) {
                    // No change
                    return;
                }
            }

            lineSeriesRef.current.setData(data.map(d => ({ time: d.time as any, value: d.price })));
            lastDataRef.current = data;
            logger.debug("Chart data updated with full dataset");
        }
    }, [data]);

    return (
        <div className="flex items-center justify-center w-full h-full">
            {data && data.length > 0 ? (
                <div id="chart" className="w-full h-full" ref={chartRef} />
            ) : (
                <p className="text-gray-400">No data available</p>
            )}
        </div>
    );
}
