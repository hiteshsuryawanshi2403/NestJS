import { ResponseStatus } from './../common/types/response-status.enum';
import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetUserDocs, GetUserAllDocs } from './apidocs/app.decorator';
import { AppService } from './app.service';
import { AppResponse } from './../common/types/app-response.dto';
import { AppLogger } from './../logger/app-logger.logger';
import { User } from './../common/types/user.dto';

@ApiTags('User-Controller')
@Controller('posts')
export class AppController {
  logger: AppLogger;
  constructor(private readonly appService: AppService) {
    this.logger = new AppLogger(AppController.name);
  }

  @Get(':id')
  @GetUserDocs()
  async getUserData(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<AppResponse> {
    this.logger.debug('Fetching user information' + id);
    const result: User = await this.appService.getUserData(id);
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: ResponseStatus.SUCCESS,
      data: [result],
      error: null,
    };
  }
  @Get()
  @GetUserAllDocs()
  async getUserAllData(): Promise<AppResponse> {
    this.logger.debug('Fetching user informations');
    const result = await this.appService.getUserAllData();
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: ResponseStatus.SUCCESS,
      data: result,
      error: null,
    };
  }
}
