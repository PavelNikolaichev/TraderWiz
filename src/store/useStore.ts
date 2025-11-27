import { create } from "zustand";
import type { MarketDataResponse } from "../types";

interface MarketState {
  latestMarketData: MarketDataResponse | null;
  marketHistory: MarketDataResponse[];
  isConnected: boolean;
  addMarketData: (data: MarketDataResponse) => void;
  setConnectionStatus: (status: boolean) => void;
}

export const useStore = create<MarketState>((set) => ({
  latestMarketData: null,
  marketHistory: [],
  isConnected: false,
  addMarketData: (data) =>
    set((state) => {
      const MAX_HISTORY = 200;
      const newHistory = [...state.marketHistory, data];
      if (newHistory.length > MAX_HISTORY) {
        newHistory.shift();
      }
      return {
        latestMarketData: data,
        marketHistory: newHistory,
      };
    }),
  setConnectionStatus: (isConnected) => set({ isConnected }),
}));
