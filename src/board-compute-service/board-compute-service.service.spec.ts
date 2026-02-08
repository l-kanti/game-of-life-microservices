import { Test, TestingModule } from '@nestjs/testing';
import { BoardComputeServiceService } from './board-compute-service.service';

describe('BoardComputeServiceService', () => {
  let service: BoardComputeServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoardComputeServiceService],
    }).compile();

    service = module.get<BoardComputeServiceService>(BoardComputeServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
