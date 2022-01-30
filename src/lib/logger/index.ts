import winston from 'winston';
import {consoleFormat} from 'winston-console-format';

export default winston.createLogger({
  levels: winston.config.syslog.levels,
  transports: [
    new winston.transports.Console({
      level: process.env.LOG_LEVEL || 'info',
      format: winston.format.combine(
        winston.format.colorize({all: true}),
        winston.format.padLevels(),
        consoleFormat({
          showMeta: true,
          inspectOptions: {
            depth: Infinity,
            colors: true,
            maxArrayLength: Infinity,
            breakLength: 120,
            compact: Infinity,
          },
        }),
      ),
    }),
  ],
});
