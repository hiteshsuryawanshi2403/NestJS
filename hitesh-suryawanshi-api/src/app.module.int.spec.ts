import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { GlobalExceptionsFilter } from './exceptions/filters/global.exceptions.filter';

describe('AppModule (integration)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalFilters(new GlobalExceptionsFilter());
    await app.init();
  });

  it('App init', () => {
    expect(app).toBeDefined();
  });
});
