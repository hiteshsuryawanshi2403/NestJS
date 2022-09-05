import { ConflictException } from './../exceptions/conflict.exception';
/* eslint-disable prettier/prettier */
import { User } from './../common/types/user.dto';
import { AppRepositoity } from './app.repository';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;
  let appRepositoity: AppRepositoity;
  let app: INestApplication;
  const id = 1;
  const user: User = {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [AppService, AppRepositoity],
    }).compile();
    appRepositoity = module.get<AppRepositoity>(AppRepositoity);
    appService = module.get<AppService>(AppService);
    app = module.createNestApplication();
    await app.init();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(appService).toBeDefined();
  });
  it('It should return user information', async () => {
    appService.getUserData = jest.fn().mockReturnValue(user);
    const result = await appRepositoity.getUserData(id);
    expect(result).toEqual(user);
  });
  it('It should return error for user does not exits in DB ', async () => {
    try {
      await appService.getUserData(100);
    } catch (error) {
      expect(error.message).toBe('User: 100 not found ');
    }
  });
  it('It should return error for user does not contain title for record ', async () => {
    const userTemp = {
      userId: 1,
      id: 1,
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    };
    appRepositoity.getUserData = jest.fn().mockReturnValue(userTemp);
    try {
      await appService.getUserData(id);
    } catch (error) {
      expect(error).toBeInstanceOf(ConflictException);
    }
  });
});
