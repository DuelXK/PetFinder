import path from 'path';
import winston from 'winston';

export const logger: any = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(
          (info) => `${info.timestamp} [${info.level}] - ${info.message}`
        )
      ),
    }),

    new winston.transports.File({
      filename: path.join('logs', 'info.log'),
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(
          (info) => `${info.timestamp} [${info.level}] - ${info.message}`
        )
      ),
      maxsize: 200000,
    }),
  ],
});