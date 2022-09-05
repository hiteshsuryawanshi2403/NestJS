import { AppResponse } from './../common/types/app-response.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor(message: string, errorMessage?: string) {
    const response: AppResponse = {
      statusCode: HttpStatus.FORBIDDEN,
      success: false,
      message,
      data: null,
      error: {
        name: 'Forbidden',
        statusCode: HttpStatus.FORBIDDEN,
        message: errorMessage,
      },
    };
    super(response, HttpStatus.OK);
  }
}
