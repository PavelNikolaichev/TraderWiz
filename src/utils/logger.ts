import pino from "pino";

const logger = pino({
  level: import.meta.env.VITE_LOG_LEVEL || "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:standard",
    },
  },
});

export default logger;
