export interface MarketItem {
  id: string;
  name: string;
  rank: string;
  supply: string;
  symbol: string;
  tokens: Record<string, string[]>;
  explorer: string;
  priceUsd: string;
  vwap24Hr: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  changePercent24Hr: string;
}

export interface MarketDataResponse {
  data: MarketItem[];
  timestamp: number;
}
