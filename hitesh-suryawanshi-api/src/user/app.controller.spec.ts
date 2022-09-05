import { NotFoundException } from './../exceptions/not-found.exception';
import { ResponseStatus } from './../common/types/response-status.enum';
import { User } from './../common/types/user.dto';
import { AppRepositoity } from './app.repository';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
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
      controllers: [AppController],
      providers: [AppService, AppRepositoity],
    }).compile();
    appRepositoity = module.get<AppRepositoity>(AppRepositoity);
    appService = module.get<AppService>(AppService);
    appController = module.get<AppController>(AppController);
    app = module.createNestApplication();
    await app.init();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });
  it('It should return user information', async () => {
    appService.getUserData = jest.fn().mockReturnValue(user);
    const result = await appController.getUserData(id);
    expect(result).toEqual({
      statusCode: HttpStatus.OK,
      success: true,
      message: ResponseStatus.SUCCESS,
      data: [user],
      error: null,
    });
  });
  it('It should return error for user does not exits in DB ', async () => {
    appService.getUserData = jest.fn().mockReturnValue(NotFoundException);
    try {
      await appController.getUserData(100);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
    }
  });
});
