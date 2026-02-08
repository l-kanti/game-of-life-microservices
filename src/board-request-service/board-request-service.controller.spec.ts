import { Test, TestingModule } from '@nestjs/testing';
import { BoardRequestServiceController } from './board-request-service.controller';
import { BoardRequestServiceService } from './board-request-service.service';

describe('BoardRequestServiceController', () => {
  let controller: BoardRequestServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardRequestServiceController],
      providers: [BoardRequestServiceService],
    }).compile();

    controller = module.get<BoardRequestServiceController>(BoardRequestServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
