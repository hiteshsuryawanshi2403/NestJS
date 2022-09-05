import { AppResponse } from './../common/types/app-response.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

export class BadRequestException extends HttpException {
  constructor(message: string, errorMessage?: string) {
    const response: AppResponse = {
      statusCode: HttpStatus.BAD_REQUEST,
      success: false,
      message,
      data: null,
      error: {
        name: 'Bad Request',
        statusCode: HttpStatus.BAD_REQUEST,
        message: errorMessage,
      },
    };
    super(response, HttpStatus.OK);
  }
}
