import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv-safe';
import { Logger } from '@nestjs/common';
import { GlobalExceptionsFilter } from './exceptions/filters/global.exceptions.filter';
async function bootstrap() {
  //Environment Variable Configuration
  dotenv.config({ allowEmptyValues: false });
  const logger = new Logger('Bootstrap');
  logger.log('Starting Application');
  const app = await NestFactory.create(AppModule);
  //Added Custom Exception handler
  app.useGlobalFilters(new GlobalExceptionsFilter());
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
