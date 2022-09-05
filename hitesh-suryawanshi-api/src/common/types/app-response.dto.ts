import { ApiResponseProperty } from '@nestjs/swagger';
import { ErrorData } from './error-data.dto';

export class AppResponse {
  @ApiResponseProperty({ deprecated: true })
  status?: boolean;

  @ApiResponseProperty()
  success: boolean;

  @ApiResponseProperty()
  statusCode?: number;

  @ApiResponseProperty()
  message: string;

  @ApiResponseProperty()
  data: any[] | any;

  @ApiResponseProperty()
  error?: ErrorData | null;
}
