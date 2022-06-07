import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getReachability(): string {
    return;
  }

  @Get('health')
  getHealth(): string {
    return;
  }
}
