import { ConflictException } from '../exceptions/conflict.exception';
import { Injectable } from '@nestjs/common';
import { AppRepositoity } from './app.repository';
import { AppLogger } from './../logger/app-logger.logger';
import { User } from './../common/types/user.dto';

@Injectable()
export class AppService {
  logger: AppLogger;
  constructor(private readonly appRepositoity: AppRepositoity) {
    this.logger = new AppLogger(AppService.name);
  }
  async getUserData(id: number): Promise<User> {
    this.logger.log('Fetching user form Database');
    const data: User = await this.appRepositoity.getUserData(id);
    if (data.title && data.body) {
      return data;
    } else {
      const errorMsg = `Either title or body missing for user`;
      this.logger.error(errorMsg, id);
      throw new ConflictException(errorMsg);
    }
  }
  async getUserAllData(): Promise<User[]> {
    this.logger.log('Fetching users form Database');
    const data: User[] = await this.appRepositoity.getUserAllData();
    for (const key in data) {
      if (
        !(data[key].hasOwnProperty('title') && data[key].hasOwnProperty('body'))
      ) {
        const errorMsg = `Either title or body missing for user: ${data[key].id}`;
        this.logger.error(errorMsg);
        throw new ConflictException(errorMsg);
      }
    }
    return data;
  }
}
