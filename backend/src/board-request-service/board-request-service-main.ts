import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { BoardRequestModule } from './board-request-service.module';

async function bootstrap() {
  const app = await NestFactory.create(BoardRequestModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors();

  await app.listen(3000);
  console.log('Board Request Service (REST API) is running on port 3000');
}

bootstrap();
