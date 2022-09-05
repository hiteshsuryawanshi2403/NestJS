import { AppResponse } from './../../common/types/app-response.dto';
import {
  Catch,
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';

@Catch()
export class GlobalExceptionsFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const error =
      exception instanceof HttpException
        ? exception
        : new InternalServerErrorException('Internal Server Error');

    const errorResponse: any = error.getResponse();
    const responseData: AppResponse = {
      statusCode: errorResponse?.error?.statusCode || errorResponse?.statusCode,
      success: false,
      message: errorResponse?.response?.message ?? error.message,
      data: null,
      error: {
        message: errorResponse?.error?.message ?? errorResponse?.message,
        name: errorResponse?.error?.name,
        statusCode: errorResponse?.error?.statusCode,
        stack: exception instanceof HttpException ? undefined : exception.stack,
      },
    };
    response.status(error.getStatus()).json(responseData);

    const logger = new Logger(exception.name);
    logger.error(
      `[${(exception as any).code}] ${exception.message}`,
      exception.stack,
    );
  }
}
