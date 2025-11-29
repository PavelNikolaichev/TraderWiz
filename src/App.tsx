import { Header } from '@components/Layout/Header'
import { Body } from '@components/Layout/Body'
import { Footer } from '@components/Layout/Footer'
import { useMarketStream } from './hooks/useMarketStream'

import './App.css'
import logger from '@utils/logger'


function App() {
  const MARKET_STREAM_URL = import.meta.env.VITE_MARKET_STREAM_URL;
  if (!MARKET_STREAM_URL) {
    // Don't expose VITE_ prefix to ensure security
    logger.error({ msg: "MARKET_STREAM_URL is not defined in environment variables" });
  }
  useMarketStream(MARKET_STREAM_URL);

  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
