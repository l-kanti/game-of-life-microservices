import { Test, TestingModule } from '@nestjs/testing';
import { BoardComputeServiceController } from './board-compute-service.controller';
import { BoardComputeServiceService } from './board-compute-service.service';

describe('BoardComputeServiceController', () => {
  let controller: BoardComputeServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardComputeServiceController],
      providers: [BoardComputeServiceService],
    }).compile();

    controller = module.get<BoardComputeServiceController>(BoardComputeServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
