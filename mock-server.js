// A small mock server to simulate a streaming API for cryptocurrency price data
import http from "http";

const PORT = 8000;

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/stream/price-feed") {
    console.log("Client connected to stream");
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });

    const sendData = () => {
      const data = {
        timestamp: Date.now(),
        data: [
          {
            id: "bitcoin",
            rank: "1",
            symbol: "BTC",
            name: "Bitcoin",
            supply: "19644462.0000000000000000",
            maxSupply: "21000000.0000000000000000",
            marketCapUsd: "1194236276736.6635654896043002",
            volumeUsd24Hr: "32849664684.6684968684968468",
            priceUsd: (60000 + Math.random() * 500 - 250).toFixed(2),
            changePercent24Hr: (Math.random() * 4 - 2).toFixed(2),
            vwap24Hr: "60123.45",
            explorer: "https://blockchain.info/",
            tokens: {},
          },
          {
            id: "ethereum",
            rank: "2",
            symbol: "ETH",
            name: "Ethereum",
            supply: "120070465.0000000000000000",
            maxSupply: null,
            marketCapUsd: "404666666666.6666666666666666",
            volumeUsd24Hr: "15646464646.4646464646464646",
            priceUsd: (3000 + Math.random() * 100 - 50).toFixed(2),
            changePercent24Hr: (Math.random() * 4 - 2).toFixed(2),
            vwap24Hr: "3012.34",
            explorer: "https://etherscan.io/",
            tokens: {},
          },
          {
            id: "solana",
            rank: "5",
            symbol: "SOL",
            name: "Solana",
            supply: "443000000.0000000000000000",
            maxSupply: null,
            marketCapUsd: "65000000000.0000000000000000",
            volumeUsd24Hr: "2000000000.0000000000000000",
            priceUsd: (145 + Math.random() * 5 - 2.5).toFixed(2),
            changePercent24Hr: (Math.random() * 6 - 3).toFixed(2),
            vwap24Hr: "146.50",
            explorer: "https://solscan.io/",
            tokens: {},
          },
        ],
      };
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    };

    const intervalId = setInterval(sendData, 1000);

    req.on("close", () => {
      console.log("Client disconnected");
      clearInterval(intervalId);
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});
