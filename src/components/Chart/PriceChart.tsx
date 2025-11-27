import { ChartComponent, type PriceData } from "./ChartComponent";

export type PriceChartProps = {
    title: string;
    data: PriceData[];
}

export const PriceChart = ({ title, data }: PriceChartProps) => {
    return (
        <>
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            <div className="flex-1 flex items-center justify-center bg-gray-50 rounded border border-dashed border-gray-300 overflow-hidden">
                <ChartComponent data={data} />
            </div>
        </>
    );
};