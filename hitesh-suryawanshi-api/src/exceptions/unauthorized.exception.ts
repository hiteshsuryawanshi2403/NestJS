import { HttpException, HttpStatus } from '@nestjs/common';
import { AppResponse } from './../common/types/app-response.dto';

export class UnAuthorizedException extends HttpException {
  constructor(message: string, errorMessage?: string) {
    const response: AppResponse = {
      statusCode: HttpStatus.UNAUTHORIZED,
      success: false,
      message,
      data: null,
      error: {
        name: 'Unauthorized',
        statusCode: HttpStatus.UNAUTHORIZED,
        message: errorMessage,
      },
    };
    super(response, HttpStatus.OK);
  }
}
