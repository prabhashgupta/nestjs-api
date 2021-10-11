import { Injectable } from '@nestjs/common';

@Injectable({scope: 0})
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
