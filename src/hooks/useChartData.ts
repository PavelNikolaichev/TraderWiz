import { useStore } from "../store/useStore";
import type { PriceData } from "../components/Chart/ChartComponent";

export const useChartData = (symbol: string): PriceData[] => {
  const history = useStore((state) => state.marketHistory);

  return history
    .map((entry) => {
      if (!entry.data) {
        return { time: entry.timestamp / 1000, value: 0 };
      }
      const item = entry.data.find((i) => i.symbol === symbol);
      return {
        // Convert ms timestamp to seconds for lightweight-charts
        time: entry.timestamp / 1000,
        value: item ? parseFloat(item.priceUsd) : 0,
      };
    })
    .filter((d) => d.value !== 0)
    .map((d) => ({ time: d.time, price: d.value }));
};
