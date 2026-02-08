import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { BoardRequestController } from './board-request-service.controller';
import { BoardRequestService } from './board-request-service.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BOARD_COMPUTE_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'board',
          protoPath: join(__dirname, '../proto/board_request_service.proto'),
          url: 'localhost:5000', // Adjust to your gRPC server URL
        },
      },
    ]),
  ],
  controllers: [BoardRequestController],
  providers: [BoardRequestService],
})
export class BoardRequestModule {}
