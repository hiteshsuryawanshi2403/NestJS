/* eslint-disable prettier/prettier */
import { User } from './../common/types/user.dto';
import { AppRepositoity } from './app.repository';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppRepositoity', () => {
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
      providers: [AppRepositoity],
    }).compile();
    appRepositoity = module.get<AppRepositoity>(AppRepositoity);
    app = module.createNestApplication();
    await app.init();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(appRepositoity).toBeDefined();
  });
  it('It should return user information', async () => {
    const result = await appRepositoity.getUserData(id);
    expect(result).toEqual(user);
  });
  it('It should return error for user does not exits in DB ', async () => {
    try {
      await appRepositoity.getUserData(100);
    } catch (error) {
      expect(error.message).toBe('User: 100 not found ');
    }
  });
});
