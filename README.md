# TraderWiz 📈

TraderWiz is a modern, real-time cryptocurrency dashboard application built with React, TypeScript, and Vite. It provides live market updates and interactive charts to visualize cryptocurrency price movements.

Note, this project requires SSE backend for full functionality, you can use either the mock server provided, or use [the proper backend](https://github.com/PavelNikolaichev/TraderWizFetcher)

## ✨ Features

- **Real-time Data Streaming**: Connects to a live Server-Sent Events (SSE) stream to receive instant price updates for top cryptocurrencies like Bitcoin and Ethereum.
- **Interactive Charts**: Visualizes price history and trends using `lightweight-charts` for high-performance financial charting.
- **Live Market Ticker**: Displays real-time statistics including price, 24h change, and volume.
- **State Management**: robust global state management with `zustand`, featuring data persistence for market history.
- **Responsive Design**: A clean, modern interface built with **Tailwind CSS** that works across devices.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Charting**: [Lightweight Charts](https://tradingview.github.io/lightweight-charts/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: ESLint

## 🚀 Getting Started

Follow these steps to get the project running locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

### Installation

1. **Clone the repository**

2. **Install dependencies:**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Environment Setup:**

   Create a `.env` file in the root directory based on the example:

   ```bash
   cp .env.example .env
   ```

   Ensure your `.env` file points to the local mock server or backend (SSE stream):

   ```env
   VITE_MARKET_STREAM_URL=http://localhost:8000/stream/price-feed
   VITE_LOG_LEVEL=info
   ```

The rest is the usual build and deployment for Vite projects.

## 📂 Project Structure

```text
TraderWiz/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets (images, etc.)
│   ├── components/      # React components
│   │   ├── Chart/       # Charting related components
│   │   ├── Dashboard/   # Dashboard widgets (Stats, Ticker)
│   │   └── Layout/      # Layout components (Header, Sidebar, etc.)
│   ├── hooks/           # Custom React hooks (useChartData, useMarketStream)
│   ├── store/           # Zustand state stores
│   ├── types/           # Type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Entry point
├── mock-server.js       # Node.js mock server for data streaming
├── .env.example         # Environment variables example
├── package.json         # Project dependencies and scripts
└── vite.config.ts       # Vite configuration
```

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run server`: Starts the mock Node.js server for data streaming.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
