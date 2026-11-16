import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  //await app.listen(process.env.PORT ?? 3000);

  
const configService = app.get(ConfigService);
const port = configService.get('PORT');
await app.listen(port);
console.log('Application is running on: http://localhost:${port}');
}
bootstrap();
