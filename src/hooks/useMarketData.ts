import { useStore } from "../store/useStore";

export const useMarketData = () => {
  const marketData = useStore((state) => state.latestMarketData);
  return marketData;
};
