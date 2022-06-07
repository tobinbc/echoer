import { ProxyModule } from '@finastra/nestjs-proxy';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [
    ProxyModule.forRoot({
      config: {},
      services: [
        {
          id: 'revolut-business-auth',
          url: 'https://b2b.revolut.com/api/1.0/auth/token',
          config: {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        },
        {
          id: 'revolut-business',
          url: 'https://b2b.revolut.com/api/1.0',
        },
        {
          id: 'revolut-business-auth-sandbox',
          url: 'https://sandbox-b2b.revolut.com/api/1.0/auth/token',
          config: {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        },
        {
          id: 'revolut-business-sandbox',
          url: 'https://sandbox-b2b.revolut.com/api/1.0',
        },
      ],
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
