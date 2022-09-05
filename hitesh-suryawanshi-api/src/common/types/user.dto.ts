import { ApiResponseProperty } from '@nestjs/swagger';

export class User {
  @ApiResponseProperty()
  id: number;

  @ApiResponseProperty()
  userId: number;

  @ApiResponseProperty()
  title: string;

  @ApiResponseProperty()
  body: string;
}
