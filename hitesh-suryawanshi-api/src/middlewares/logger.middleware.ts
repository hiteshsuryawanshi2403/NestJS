import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AppLogger } from '../logger/app-logger.logger';

@Injectable()
export class LogsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    new AppLogger('Request').log(`${req.method}: ${req.originalUrl}`);
    next();
    if (req.originalUrl === '/') {
      return;
    }
    const responseLogger = new AppLogger('Response');
    if (res.statusCode < 400) {
      return responseLogger.log(
        `${req.method}: ${req.originalUrl} ---> ${res.statusCode}`,
      );
    }
    if (res.statusCode >= 400 && res.statusCode < 500) {
      return responseLogger.warn(
        `${req.method}: ${req.originalUrl} ---> ${res.statusCode}`,
      );
    }
    if (res.statusCode >= 500) {
      return responseLogger.error(
        `${req.method}: ${req.originalUrl} ---> ${res.statusCode}`,
      );
    }
  }
}
