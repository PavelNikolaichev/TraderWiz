import { useEffect, useState } from "react";
import logger from "@utils/logger";

export const useMarketStream = (url: string) => {
  // TODO: improve typing in here - serialize the data state.
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      logger.debug({ msg: "Received market data event", event });
      const parsedData = JSON.parse(event.data);
      logger.debug({ msg: "Parsed market data", data: parsedData });
      setPriceData(parsedData);
    };

    eventSource.onerror = (error) => {
      logger.error({ msg: "EventSource failed", error });
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [url]);

  return priceData;
};
