import { Module } from '@nestjs/common';
import { BoardRequestServiceService } from './board-request-service.service';
import { BoardRequestServiceController } from './board-request-service.controller';

@Module({
  controllers: [BoardRequestServiceController],
  providers: [BoardRequestServiceService],
})
export class BoardRequestServiceModule {}
