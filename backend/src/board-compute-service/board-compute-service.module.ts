import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardComputeController } from './board-compute-service.controller';
import { BoardComputeService } from './board-compute-service.service';
import { GameOfLifeService } from './game-of-life.service';
import { Board } from './entities/board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Board])],
  controllers: [BoardComputeController],
  providers: [BoardComputeService, GameOfLifeService],
})
export class BoardComputeModule {}
