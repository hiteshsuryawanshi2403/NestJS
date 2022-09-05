import { AppResponse } from './../common/types/app-response.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

export class ConflictException extends HttpException {
  constructor(message: string, errorMessage?: string) {
    const response: AppResponse = {
      statusCode: HttpStatus.CONFLICT,
      success: false,
      message,
      data: null,
      error: {
        statusCode: HttpStatus.CONFLICT,
        name: 'Conflict',
        message: errorMessage,
      },
    };
    super(response, HttpStatus.OK);
  }
}
