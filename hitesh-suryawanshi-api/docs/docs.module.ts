import { AppController } from './../src/user/app.controller';
import { AppService } from '../src/user/app.service';
import { Module } from '@nestjs/common';
import { autoMockProvider } from './helpers/mocks.helper';

@Module({
  imports: [],
  providers: [...autoMockProvider([AppService])],
  controllers: [AppController],
})
export class DocsModule {}
