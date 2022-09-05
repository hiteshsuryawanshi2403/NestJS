import { Logger } from '@nestjs/common';

export class AppLogger extends Logger {
  constructor(context?: string) {
    super(context);
  }
  log(message: string, details?: any, ...restArgs: string[]) {
    const detailStr = details ? JSON.stringify(details) : '';
    super.log(`${message}: {${detailStr}}`, ...restArgs);
  }

  warn(message: string, details?: any, ...restArgs: string[]) {
    const detailStr = details ? JSON.stringify(details) : '';
    super.warn(`${message}: {${detailStr}}`, ...restArgs);
  }

  error(message: string, details?: any, ...restArgs: string[]) {
    const detailStr = details ? JSON.stringify(details) : '';
    super.error(`${message}: {${detailStr}}`, ...restArgs);
  }

  debug(message: string, details?: any, ...restArgs: string[]) {
    const detailStr = details ? JSON.stringify(details) : '';
    super.debug(`${message}: {${detailStr}}`, ...restArgs);
  }
}
