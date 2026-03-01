import pino from "pino"

const isProduction = process.env.NODE_ENV === "production"

export const logger = pino(
  isProduction
    ? {
        level: "info",
        timestamp: pino.stdTimeFunctions.isoTime,
        redact: ["req.headers.authorization", "req.body.password"],
      }
    : {
        level: "debug",
        transport: {
          target: "pino-pretty",
          options: {
            colorize: true,
            translateTime: "SYS:standard",
            ignore: "pid,hostname",
          },
        },
        timestamp: pino.stdTimeFunctions.isoTime,
      }
)
