import pino from "pino/browser";

const logger = pino({
  browser: {
    asObject: true, // logs as objects instead of JSON strings
  },
  level: import.meta.env.VITE_LOG_LEVEL || "info",
});

logger.debug({ msg: "Logger initialized", level: logger.level });

export default logger;
