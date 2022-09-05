import { HttpException, HttpStatus } from '@nestjs/common';
import { AppResponse } from './../common/types/app-response.dto';

export class NotFoundException extends HttpException {
  constructor(message: string, errorMessage?: string) {
    const response: AppResponse = {
      statusCode: HttpStatus.NOT_FOUND,
      success: false,
      message,
      data: null,
      error: {
        name: 'Not Found',
        statusCode: HttpStatus.NOT_FOUND,
        message: errorMessage,
      },
    };
    super(response, HttpStatus.OK);
  }
}
