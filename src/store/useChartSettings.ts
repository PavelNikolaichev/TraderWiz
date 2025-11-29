import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useStore } from "./useStore";

type ChartSettings = {
  symbol: string;
  setSymbol: (symbol: string) => void;
  symbols: string[];
  refreshSymbols: () => void;
};

function getSymbolsFromMarketHistory(): string[] {
  const marketHistory = useStore.getState().marketHistory;
  const symbolSet = new Set<string>();
  marketHistory.forEach((entry) => {
    if (entry.data) {
      entry.data.forEach((item: any) => {
        if (item.symbol) symbolSet.add(item.symbol);
      });
    }
  });
  return Array.from(symbolSet);
}

export const useChartSettings = create<ChartSettings>()(
  persist(
    (set, get) => {
      const initialSymbols = getSymbolsFromMarketHistory();
      return {
        symbol: initialSymbols[0] || "BTC",
        symbols: initialSymbols,
        setSymbol: (symbol) => set({ symbol }),
        refreshSymbols: () => {
          const symbols = getSymbolsFromMarketHistory();
          set({ symbols });
          // If current symbol is not in the new list, reset to first
          if (!symbols.includes(get().symbol)) {
            set({ symbol: symbols[0] || "BTC" });
          }
        },
      };
    },
    {
      name: "chart-settings-storage",
      partialize: (state) => ({
        symbol: state.symbol,
      }),
    }
  )
);
