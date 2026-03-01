import { EnvConfig } from './../config/envConfigValidation.js';
import pino from 'pino';
import path from 'path';
import fs from 'fs';

const isProduction = EnvConfig.NODE_ENV === 'production';
const logDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

const logFilePath = path.join(logDir, 'app.log');

let logger;

if (isProduction) {
  // Production: log to file only
  logger = pino({
    level: 'info',
    redact: ['req.headers.authorization', 'req.body.password'],
  }, pino.destination(logFilePath));
} else {
  // Development: log to console and optionally file using transport
  logger = pino(
    {
      level: 'debug',
      redact: ['req.headers.authorization', 'req.body.password'],
    },
    pino.transport({
      targets: [
        {
          target: 'pino-pretty', // console pretty printing
          options: {
            colorize: true,
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname',
            singleLine: true,
            levelFirst: true,
          },
        },
        {
          target: 'pino/file', // log to file in dev as well
          options: { destination: logFilePath },
        },
      ],
    })
  );
}

export { logger };
