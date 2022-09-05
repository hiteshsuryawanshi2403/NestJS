import { HttpException, HttpStatus } from '@nestjs/common';
import { AppResponse } from './../common/types/app-response.dto';

export class NotAcceptableException extends HttpException {
  constructor(message: string, errorMessage?: string) {
    const response: AppResponse = {
      statusCode: HttpStatus.NOT_ACCEPTABLE,
      success: false,
      message,
      data: null,
      error: {
        statusCode: HttpStatus.NOT_ACCEPTABLE,
        name: 'Not Acceptable',
        message: errorMessage,
      },
    };
    super(response, HttpStatus.OK);
  }
}
