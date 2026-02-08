import { Module } from '@nestjs/common';
import { BoardComputeServiceService } from './board-compute-service.service';
import { BoardComputeServiceController } from './board-compute-service.controller';

@Module({
  controllers: [BoardComputeServiceController],
  providers: [BoardComputeServiceService],
})
export class BoardComputeServiceModule {}
