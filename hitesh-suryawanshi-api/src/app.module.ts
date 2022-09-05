import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './user/app.controller';
import { AppRepositoity } from './user/app.repository';
import { AppService } from './user/app.service';
import { AppLogger } from './logger/app-logger.logger';
import { LogsMiddleware } from './middlewares/logger.middleware';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'ui'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppRepositoity],
})
export class AppModule {
  logger: AppLogger;
  constructor() {
    this.logger = new AppLogger(AppModule.name);
    this.logger.log('Initializing App Module');
  }
  configure(consumer: MiddlewareConsumer) {
    //Custom Logger middleware
    consumer.apply(LogsMiddleware).forRoutes('*');
  }
}
