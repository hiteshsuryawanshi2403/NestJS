import { AppResponse } from './../common/types/app-response.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

export class InternalServerErrorException extends HttpException {
  constructor(message: string) {
    const response: AppResponse = {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: 'Internal Server Error',
      data: null,
      error: {
        name: 'Internal Server Error',
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message,
      },
    };
    super(response, HttpStatus.OK);
  }
}
