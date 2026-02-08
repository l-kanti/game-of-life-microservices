import { Test, TestingModule } from '@nestjs/testing';
import { BoardRequestServiceService } from './board-request-service.service';

describe('BoardRequestServiceService', () => {
  let service: BoardRequestServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoardRequestServiceService],
    }).compile();

    service = module.get<BoardRequestServiceService>(BoardRequestServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
