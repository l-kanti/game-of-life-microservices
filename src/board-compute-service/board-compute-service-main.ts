import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { BoardComputeModule } from './board-compute-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BoardComputeModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'board',
        protoPath: join(__dirname, '../proto/board_request_service.proto'),
        url: '0.0.0.0:5000',
      },
    },
  );

  await app.listen();
  console.log('Board Compute Service (gRPC) is running on port 5000');
}

bootstrap();
