import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { BoardRequestController } from './board-request-service.controller';
import { BoardRequestService } from './board-request-service.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BOARD_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'board',
          protoPath: join(__dirname, '../proto/board.proto'),
          url: 'localhost:5000',
        },
      },
    ]),
  ],
  controllers: [BoardRequestController],
  providers: [BoardRequestService],
})
export class BoardRequestModule {}