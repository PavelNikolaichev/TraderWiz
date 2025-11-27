import { useEffect } from "react";
import logger from "@utils/logger";
import { useStore } from "../store/useStore";

export const useMarketStream = (url: string) => {
  const addMarketData = useStore((state) => state.addMarketData);
  const setConnectionStatus = useStore((state) => state.setConnectionStatus);

  useEffect(() => {
    const eventSource = new EventSource(url);

    eventSource.onopen = () => {
      logger.info({ msg: "Market stream connected" });
      setConnectionStatus(true);
    };

    eventSource.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data);
        addMarketData(parsedData);
      } catch (error) {
        logger.error({ msg: "Failed to parse market data", error });
      }
    };

    eventSource.onerror = (error) => {
      logger.error({ msg: "EventSource failed", error });
      setConnectionStatus(false);
      eventSource.close();
    };

    return () => {
      setConnectionStatus(false);
      eventSource.close();
    };
  }, [url, addMarketData, setConnectionStatus]);
};
