import logger from "@utils/logger";
import { useMarketStream } from "./useMarketStream";
export const useMarketData = () => {
  logger.info("Fetching market data...");
  // Fetch market data logic here
  const marketData = useMarketStream("https://example.com/market-stream");
  logger.info("Market data fetched successfully. Beginning serialization...");
  return marketData;
};
